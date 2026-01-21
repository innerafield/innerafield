# INNERA FIELD v3 — BREATHWORK ARCHITECTURE

**One Field. One Breath. One Source.**

---

## WHAT'S NEW IN V3

1. **Breathwork Modes** — Multiple breathing patterns (Reddit request)
2. **Protected Title** — "INNERA FIELD" won't be translated
3. **Protected Wisdoms** — Wisdom messages stay in English (universal)
4. **Simple Glowing Logo** — Golden orb for all platforms
5. **Proper Favicon** — Shows in Google search results
6. **PayPal + Ko-fi** — Both donation options

---

## BREATHWORK MODES

### Popular Breathing Techniques

| Name | Pattern | Seconds | Purpose |
|------|---------|---------|---------|
| **Box Breathing** | 4-4-4-4 | inhale 4, hold 4, exhale 4, hold 4 | Balance, calm (CURRENT) |
| **Relaxing Breath** | 4-7-8 | inhale 4, hold 7, exhale 8 | Sleep, anxiety relief |
| **Energizing** | 4-0-4-0 | inhale 4, exhale 4 (no holds) | Energy, focus |
| **Coherent** | 5-0-5-0 | inhale 5, exhale 5 | Heart coherence |
| **Extended Exhale** | 4-0-8-0 | inhale 4, exhale 8 | Deep relaxation |
| **Wim Hof** | 2-0-2-15 | quick breaths, then hold | Energy, cold tolerance |
| **Buteyko** | 3-3-3-3 | gentle, through nose | Reduce breathing |

### Recommended for Innera Field

Keep it simple. Add these 4:

| Mode | Pattern | Best For |
|------|---------|----------|
| **Balance** | 4-4-4-4 | Default, all-purpose |
| **Calm** | 4-7-8 | Anxiety, sleep |
| **Energy** | 4-0-4-0 | Morning, focus |
| **Deep** | 4-0-8-0 | Deep meditation |

---

## WHERE TO PUT BREATHWORK

### Option A: Replace Duration Section (Recommended)

Current:
```
JOURNEY → [Heart] [Awakening] [Grounding] [Unity] [Peace]
DURATION → [5 min] [10 min] [20 min] [∞]
```

New:
```
JOURNEY → [Heart] [Awakening] [Grounding] [Unity] [Peace]
BREATHWORK → [Balance] [Calm] [Energy] [Deep]
DURATION → [5] [10] [20] [∞]
```

### Option B: Inside Journey Selection

Each journey has its own default breathwork, user can override.

### Option C: Separate Tab/Section

More complex, not recommended for simplicity.

---

## RECOMMENDED APPROACH

**Option A** — Add breathwork row between Journey and Duration.

```
┌─────────────────────────────────────┐
│                                 [×] │
│                                     │
│ JOURNEY                             │
│ [♡] Heart Opening                   │
│ [✧] Awakening                       │
│ [⬡] Grounding                       │
│ [∞] Unity                           │
│ [◯] Deep Peace                      │
│ ─────────────────────────────────── │
│ BREATHWORK                          │
│ [Balance] [Calm] [Energy] [Deep]    │
│ ─────────────────────────────────── │
│ DURATION                            │
│ [5] [10] [20] [∞]                   │
│ ─────────────────────────────────── │
│    [🔈] [🌐] [↗] [⬇]               │
└─────────────────────────────────────┘
```

---

## BREATHWORK DATA STRUCTURE

```javascript
const BREATHWORK = {
  balance: {
    name: 'Balance',
    pattern: [4, 4, 4, 4],  // inhale, hold, exhale, hold (seconds)
    words: ['breathe in', 'hold', 'release', 'rest']
  },
  calm: {
    name: 'Calm',
    pattern: [4, 7, 8, 0],  // 4-7-8 technique
    words: ['breathe in', 'hold', 'release slowly', '']
  },
  energy: {
    name: 'Energy',
    pattern: [4, 0, 4, 0],  // no holds
    words: ['breathe in', '', 'release', '']
  },
  deep: {
    name: 'Deep',
    pattern: [4, 0, 8, 0],  // extended exhale
    words: ['breathe in', '', 'release slowly', '']
  }
};
```

---

## PROTECTED CONTENT (NO TRANSLATE)

Add `class="notranslate"` to elements that should NOT be translated:

```html
<h1 class="title notranslate">INNERA FIELD</h1>
<p class="wisdom notranslate" id="wisdom"></p>
```

Also add meta tag:
```html
<meta name="google" content="notranslate">
```

And for specific elements:
```html
<span translate="no">INNERA FIELD</span>
```

**What stays in English:**
- "INNERA FIELD" title
- Wisdom messages (they're universal, poetic)
- Journey names can be translated (optional)

---

## FAVICON FOR GOOGLE SEARCH

Add these to `<head>`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
```

**Open Graph for social sharing:**
```html
<meta property="og:title" content="Innera Field">
<meta property="og:description" content="Free breathing meditation. No account. No tracking. Just peace.">
<meta property="og:image" content="https://innerafield.com/icons/icon-512.png">
<meta property="og:url" content="https://innerafield.com">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Innera Field">
<meta name="twitter:description" content="Free breathing meditation. No account. No tracking. Just peace.">
<meta name="twitter:image" content="https://innerafield.com/icons/icon-512.png">
```

---

## DONATIONS

### Both Ko-fi AND PayPal

```html
<div class="energy">
  <span>if this serves you</span>
  <a class="energy-btn" href="https://ko-fi.com/innerafield" title="Ko-fi">♡</a>
  <a class="energy-btn" href="https://www.paypal.com/ncp/payment/3MLTXSEW9L3RL" title="PayPal">$</a>
  <button class="energy-btn" id="btcBtn" title="Bitcoin">₿</button>
  <button class="energy-btn" id="ethBtn" title="Ethereum">Ξ</button>
</div>
```

**4 donation options:**
1. Ko-fi (credit/debit, simple)
2. PayPal (trusted, universal)
3. Bitcoin (decentralized)
4. Ethereum (decentralized)

---

## FILE STRUCTURE

```
innerafield.com/
├── index.html          (main app with breathwork)
├── manifest.json       (PWA config)
├── sw.js              (service worker)
├── favicon.ico        (for Google search)
├── CNAME              (innerafield.com)
├── README.md
└── icons/
    ├── icon-512.png    (glowing orb)
    ├── icon-192.png
    ├── apple-touch-icon.png
    ├── favicon-48.png
    ├── favicon-32.png
    └── favicon-16.png
```

---

## IMPLEMENTATION PRIORITY

### Phase 3A (This Session)
1. ✅ Simple glowing logo (golden orb)
2. ✅ All icon sizes
3. ✅ favicon.ico
4. ⏳ Protected title (notranslate)
5. ⏳ Open Graph meta tags
6. ⏳ PayPal donation link
7. ⏳ Breathwork modes (4 patterns)

### Phase 3B (Optional Future)
8. More breathwork patterns
9. Custom breathwork creator
10. Session history

---

## SUMMARY

| Change | Purpose |
|--------|---------|
| Glowing orb logo | Simple, recognizable at any size |
| favicon.ico | Shows in Google search |
| Open Graph tags | Better social sharing |
| notranslate class | Protect "INNERA FIELD" title |
| Breathwork modes | User-requested feature |
| PayPal button | More donation options |

---

**One Field. One Breath. One Source.**

✧
