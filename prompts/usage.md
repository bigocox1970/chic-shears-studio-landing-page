# Usage Instructions

A vanilla HTML/CSS/JS template for stunning, hand-crafted web pages. No frameworks, no build steps—just beautiful design with modern CSS techniques.

---

## REQUIRED FOR EVERY SITE

These are non-negotiable — every site built with this template must include all of the following.

### SEO
- `<title>` tag: business name + location + primary service (e.g. "Smith Plumbing | Plumber in Oxford")
- `<meta name="description">`: 150–160 chars, natural language, includes location and service
- Open Graph tags: `og:title`, `og:description`, `og:image` (use hero image URL), `og:url`, `og:type`
- Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `<link rel="canonical">` pointing to the site's own URL
- Every `<img>` must have a descriptive `alt` attribute (not empty, not "image")
- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Section IDs and anchor links should be lowercase-hyphenated and descriptive (e.g. `#our-services`, `#contact-us`)
- For local businesses, include a LocalBusiness JSON-LD schema block in `<head>`

### Sticky Header
The `<header>` must be `position: sticky; top: 0;` with a high `z-index`. It must become more opaque on scroll (JavaScript adds a `scrolled` class, already handled by `app.js`). Include logo/business name on the left and nav links on the right.

### Dark / Light Mode
Every site must have a working dark/light mode toggle:
- Default to the user's system preference via `prefers-color-scheme`
- A toggle button (moon/sun icon) in the header switches between modes
- Implement using a `data-theme="dark"` attribute on `<html>` and CSS variables:
  ```css
  :root { --bg: #fff; --text: #111; --surface: #f5f5f5; }
  [data-theme="dark"] { --bg: #111; --text: #f5f5f5; --surface: #1e1e1e; }
  ```
- Every colour in the design must reference a CSS variable — no hardcoded `#fff` or `#000` in the stylesheet
- Persist the user's choice in `localStorage`
- The toggle state must be applied before first paint (inline script in `<head>`) to avoid flash

### Social Share Bar
Every site must include a social share bar in the footer (not social media profile links — these let visitors share the page):
```html
<div class="social-share">
  <span>Share this page:</span>
  <a href="https://www.facebook.com/sharer/sharer.php?u=PAGE_URL" target="_blank" rel="noopener" aria-label="Share on Facebook"><i data-lucide="facebook"></i></a>
  <a href="https://twitter.com/intent/tweet?url=PAGE_URL&text=PAGE_TITLE" target="_blank" rel="noopener" aria-label="Share on X / Twitter"><i data-lucide="twitter"></i></a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=PAGE_URL" target="_blank" rel="noopener" aria-label="Share on LinkedIn"><i data-lucide="linkedin"></i></a>
  <a href="https://api.whatsapp.com/send?text=PAGE_TITLE%20PAGE_URL" target="_blank" rel="noopener" aria-label="Share on WhatsApp"><i data-lucide="message-circle"></i></a>
</div>
```
Replace `PAGE_URL` and `PAGE_TITLE` with the actual page URL and title (URL-encoded).

---

## CRITICAL: Generated Images

If the conversation contains a `[GENERATED IMAGES]` block, you **must** use those exact URLs in the HTML. These are real hosted images — do not replace them with placeholders, stock photos, or invented paths.

Rules:
- Copy the full URL exactly as provided (including `?v=...` query string)
- Use the hero URL as a full-width `<img>` or CSS `background-image` in the hero section
- Use work1 and work2 URLs in services, gallery, or about sections
- Never write `images/gallery.jpg`, `photo.png`, or any other made-up path — if it is not in the `[GENERATED IMAGES]` block, do not use it
- `app.js` already handles scroll reveal, icons, sticky header, and smooth scrolling — do not rewrite it unless you need site-specific logic

## Included Libraries
- **Google Fonts** — Inter font family for crisp, modern typography
- **Lucide Icons** — 1000+ beautiful open-source icons (MIT licensed)
- **Tailwind CSS (CDN)** — Utility-first CSS framework loaded via CDN

**Important**: Always use Tailwind CSS via CDN script tag only. Never use the Tailwind CLI, PostCSS, or any build-time Tailwind configuration. Add Tailwind classes directly in HTML.

### Tailwind CDN Setup
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Then use Tailwind utility classes directly:
```html
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

---

## Visual Design Patterns

### Glass Morphism Cards
Create depth with frosted glass effects. Combine `glass` with `hover-lift` for interactive cards that float on hover:
```html
<div class="card glass hover-lift">
```

### Gradient Text
Make headings pop with animated gradient fills using `gradient-text` on any text element.

### Ambient Glow
The `ambient-glow` div creates soft radial gradients in the background. Customize colors in CSS to match your brand.

### Staggered Animations
Wrap elements in a `stagger` container for cascading entrance animations—each child animates 0.1s after the previous.

---

## Layout Building Blocks

### Hero Sections
Full-height hero with centered content, badge, headline, subtitle, and action buttons. Use `hero`, `hero-content`, and `hero-actions` classes.

### Responsive Grids
Auto-fitting grid that adapts from 1 to 3+ columns:
```html
<div class="grid">
  <!-- Cards automatically arrange -->
</div>
```

### Stats Displays
Showcase metrics with large gradient numbers and uppercase labels using `stats-grid`, `stat-value`, and `stat-label`.

### Sections
Alternate between `section` (white) and `section section-alt` (light gray) for visual rhythm.

---

## Interactive Elements

### Buttons
- **Primary**: `btn` — gradient background with glow shadow
- **Outline**: `btn btn-outline` — transparent with border
- **Sizes**: Add `btn-sm` or `btn-lg`

### Scroll Reveal
Add `reveal` class to any element for fade-up animation when scrolled into view. JavaScript handles the intersection observer automatically.

### Smooth Scrolling
Anchor links like `href="#services"` automatically smooth-scroll to their targets.

### Sticky Header
The `header glass` becomes more opaque as user scrolls, handled by JavaScript.

---

## Icons

Add Lucide icons anywhere with the `data-lucide` attribute:
```html
<i data-lucide="rocket"></i>
<i data-lucide="sparkles"></i>
<i data-lucide="heart"></i>
```

Popular icons for business sites: `target`, `zap`, `gem`, `mail`, `phone`, `map-pin`, `check-circle`, `star`, `users`, `clock`, `shield`, `award`

Browse all icons: https://lucide.dev/icons

---

## Theming

### Color Customization
All colors flow from CSS variables in `:root`. Change `--accent` and `--accent-secondary` to transform the entire site's color scheme instantly.

### Light/Dark Adaptation
Variables like `--bg-primary`, `--text-primary`, and `--surface` control the base theme. Swap their values to create dark mode variants.

### Shadow & Glow
Use `--shadow`, `--shadow-lg`, and `--glow` for consistent depth. Add `glow` class to any element for accent-colored glow effect.

---

## Typography

- **Headings**: Fluid sizing with `clamp()` for responsive scaling
- **Body text**: Uses `--text-secondary` for comfortable reading
- **Muted text**: Apply `--text-muted` for less important info

---

## Common Patterns

### Feature Cards with Icons
Card with centered icon, title, and description—perfect for services or features.

### Call-to-Action Blocks
Combine `cta-card glass glow` for attention-grabbing contact sections.

### Contact Info with Icons
Inline icons before text create scannable contact details.

### Badges
Small `badge` elements for social proof like "⭐ Trusted by 500+ customers".
