const VERSION='3.3.4';
const CACHE='innerafield-v'+VERSION;
const ASSETS=['/','/index.html','/manifest.json','/favicon.ico'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const url=new URL(e.request.url);if(url.origin!==location.origin)return;if(e.request.mode==='navigate'||url.pathname.endsWith('.html')||url.pathname==='/'){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));return;}e.respondWith(caches.match(e.request).then(cached=>{if(cached)return cached;return fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,c));}return r;});}));});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting();});
