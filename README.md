# Innera Field

**One Field. One Breath. One Source.**

A free meditation and consciousness portal for all beings. For humanity. For peace. For God.

---

## Features

- 🌬️ 4-4-4-4 breathing technique with visual animation
- 🎵 Solfeggio frequencies (528Hz healing, 432Hz peace)
- 🎧 Binaural beats that shift with your breath
- 🔈 Audio fade transitions between phases (accessibility)
- 👁️ Works for blind users (sound-based tracking)
- 🌍 10 languages built-in
- 📱 PWA - installable on any device
- 📴 Works offline
- ♿ Full accessibility support
- 💜 100% free, no tracking, no ads

---

## Languages Supported

English, Spanish (Español), Chinese (中文), Hindi (हिन्दी), Arabic (العربية), Portuguese (Português), Russian (Русский), Japanese (日本語), Korean (한국어), French (Français)

---

## 5 Journeys

| Journey | Binaural | Solfeggio | Purpose |
|---------|----------|-----------|---------|
| ♡ Heart Opening | 6 Hz (Theta) | 528 Hz | Love, compassion |
| ✧ Awakening | 40 Hz (Gamma) | 741, 852, 963 Hz | Clarity, insight |
| ⬡ Grounding | 2 Hz (Delta) | 285, 174 Hz | Earth connection |
| ∞ Unity | 10 Hz (Alpha) | 528, 639 Hz | Oneness |
| ◯ Deep Peace | 4 Hz (Theta) | 432 Hz | Deep relaxation |

---

## GitHub Deployment - Step by Step

### Step 1: Create Repository

1. Go to [github.com](https://github.com)
2. Click **+** → **New repository**
3. Name: `innerafield.com` (or any name)
4. Keep it **Public**
5. Click **Create repository**

### Step 2: Upload Files

Upload these files to your repository:

```
innerafield.com/
├── index.html          (the main app)
├── manifest.json       (PWA config)
├── sw.js              (service worker for offline)
└── icons/
    ├── icon-192.png    (Android/PWA icon)
    ├── icon-512.png    (Android/PWA icon)
    ├── apple-touch-icon.png  (iOS icon)
    ├── favicon-32.png  (browser tab)
    └── favicon-16.png  (browser tab)
```

**To upload:**
1. Click **Add file** → **Upload files**
2. Drag all files (keep folder structure)
3. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to **Settings** → **Pages** (left sidebar)
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click **Save**
5. Wait 1-2 minutes

### Step 4: Visit Your Site

Your app will be live at:
```
https://yourusername.github.io/innerafield.com/
```

---

## Custom Domain (innerafield.com)

### Step 1: Configure Namecheap DNS

In Namecheap → Domain List → Manage → Advanced DNS:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

### Step 2: Add CNAME file

Create a file named `CNAME` (no extension) with:
```
innerafield.com
```

Upload to your repository.

### Step 3: Configure GitHub Pages

1. Settings → Pages
2. Custom domain: `innerafield.com`
3. Check **Enforce HTTPS** (may take a few minutes)

### Step 4: Wait for DNS

DNS propagation takes 10 minutes to 48 hours. Check at:
- [whatsmydns.net](https://www.whatsmydns.net/)

---

## File Sizes

| File | Size | Purpose |
|------|------|---------|
| index.html | 44 KB | App + translations |
| manifest.json | 616 B | PWA config |
| sw.js | 1.6 KB | Offline support |
| icon-512.png | 245 KB | App icon |
| icon-192.png | 47 KB | App icon |
| apple-touch-icon.png | 42 KB | iOS icon |

**Total: ~340 KB** (smaller than most images)

---

## Human Voice Recording (Future)

The app currently uses Web Speech API (browser TTS). To add human voice:

### Option A: Record Your Own Voice

1. Record these phrases in a quiet room:
   - "breathe in" (2 seconds)
   - "hold" (1 second)
   - "release" (2 seconds)
   - "rest" (1 second)

2. Save as MP3 files (64kbps mono, ~20KB each)

3. Add to the app code

### Option B: AI Voice Translation

Services that can translate your English recording to other languages:
- **ElevenLabs** - Voice cloning + translation
- **Resemble.AI** - Voice cloning
- **Google Cloud TTS** - High quality, many languages

For now, Web Speech API works in the user's system language and is free.

---

## Donations

The app supports:
- Ko-fi (credit/debit)
- Bitcoin
- Ethereum

To add PayPal, create a PayPal Donate button and add the link.

---

## License

This is a gift to humanity. Use it freely.

**Built with love by InneraField + Claude**

*For humanity. For peace. For God.*

---

## One Field. One Breath. One Source.

✧
