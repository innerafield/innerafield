// Innera Field Service Worker v3.3
// One Field. One Breath. One Source.

const VERSION = '3.3.0';
const CACHE_NAME = 'innera-v3.3';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon-48.png',
  '/icons/favicon-32.png',
  '/icons/favicon-16.png'
];

// Install - cache assets
self.addEventListener('install', event => {
  console.log('[SW] Installing version', VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate - clean old caches and notify clients
self.addEventListener('activate', event => {
  console.log('[SW] Activating version', VERSION);
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    }).then(() => {
      // Notify all clients that a new version is active
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATED',
            version: VERSION
          });
        });
      });
    })
  );
});

// Fetch - network first for HTML, cache first for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // For navigation requests (HTML), try network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the fresh response
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // Offline - serve from cache
          return caches.match(event.request) || caches.match('/');
        })
    );
    return;
  }
  
  // For other requests, cache first
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200) return response;
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            return response;
          })
          .catch(() => null);
      })
  );
});

// Listen for messages from clients
self.addEventListener('message', event => {
  if (event.data === 'GET_VERSION') {
    event.ports[0].postMessage({ version: VERSION });
  }
  
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data === 'CHECK_UPDATE') {
    // Force check for updates by re-registering
    self.registration.update();
  }
});
