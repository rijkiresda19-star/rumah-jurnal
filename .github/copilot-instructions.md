# AI Coding Agent Instructions

This document provides essential context for AI agents working in this codebase. Update these sections as your project structure and conventions become established.

## Project Overview

**Status**: Active - Deployed to Vercel

- **Purpose**: Website Rumah Jurnal - Platform komunitas untuk berbagi cerita dan pengalaman
- **Technology Stack**: HTML5, CSS3, Vanilla JavaScript
- **Main Components**: Navigation, Hero Section, Articles Grid, About Section, Contact Form
- **Live URL**: https://rumah-jurnal-drab.vercel.app/

## Architecture & Key Files

**Project Structure**:
```
rumah-jurnal/
├── index.html         # Main HTML structure (6 article cards + contact form)
├── styles.css         # Responsive design (mobile-first approach)
├── script.js          # Interactivity & smooth scrolling
├── .git/              # Git repository
└── .github/
	└── copilot-instructions.md
```

**Key Architecture**:
- **index.html**: 7 sections (navbar, hero, articles grid, about, contact, footer)
- **styles.css**: CSS custom properties (--primary-color, etc), responsive grid layout
- **script.js**: Smooth scroll navigation, form validation, intersection observer for animations

## Developer Workflows

### Local Development

```bash
# Clone repository
git clone https://github.com/rijkiresda19-star/rumah-jurnal.git
cd rumah-jurnal

# Open in browser (macOS)
open index.html

# Or use Python server for live reload
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deployment

```bash
# Push changes to GitHub
git add .
git commit -m "Your message"
git push origin main

# Vercel auto-deploys on push to main branch
# Watch deployment at: https://vercel.com/dashboard
```

### Debugging in Browser
- Open DevTools: `Cmd + Option + I` (macOS) or `F12`
- Check Console for JavaScript errors
- Inspect Elements to debug CSS layout
- Network tab untuk melihat file loading

## Code Patterns & Conventions

### CSS Architecture
- **CSS Variables**: All colors in `:root` selector (--primary-color, --secondary-color, etc)
- **Responsive Grid**: `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`
- **Mobile-First**: @media queries start at 768px then 480px breakpoints
- **Hover Effects**: All interactive elements have `transition: all 0.3s ease`

### JavaScript Patterns
- **Smooth Scrolling**: All navigation links use `scrollIntoView({ behavior: 'smooth' })`
- **Form Handling**: Submit events use `event.preventDefault()` + validation
- **DOM Observers**: `IntersectionObserver` untuk scroll animations
- **Event Listeners**: DOMContentLoaded untuk initialize pada saat page load

### Article Card Structure (Repeatable)
```html
<article class="article-card">
	<div class="article-header">
		<span class="category">Kategori</span>
		<span class="date">Tanggal</span>
	</div>
	<h3>Judul Artikel</h3>
	<p>Deskripsi singkat...</p>
	<a href="#" class="read-more">Baca Selengkapnya →</a>
</article>
```

## Integration Points & Dependencies

### Deployment Pipeline
- **GitHub**: Source code repository (rijkiresda19-star/rumah-jurnal)
- **Vercel**: Auto-deploys on push to main branch
- **DNS**: Vercel provides default .vercel.app domain
- **No External APIs**: Currently static content only

### Future Integration Points (When Needed)
- Backend API for CRUD articles (currently hardcoded in HTML)
- Database connection (MongoDB/Firebase for storing articles)
- Email service for contact form submissions (Mailgun/SendGrid)
- User authentication (Firebase Auth/Auth0)

## Critical Knowledge

### Performance
- No build step needed - runs directly in browser
- CSS animations use GPU acceleration (transform, opacity)
- Intersection Observer для lazy-loading animations (optional)

### Current Limitations
- All data is hardcoded in HTML (6 sample articles)
- Contact form doesn't actually send emails (validation only)
- No user authentication or persistent storage

### Next Steps for Enhancement
1. Add backend API (Node.js/Express)
2. Connect to database (MongoDB/Firebase)
3. Implement real contact form submission
4. Add admin panel for article management
5. User authentication & profiles

## Common Pitfalls

### Things to Avoid
- **Don't hardcode colors**: Use CSS variables instead (use --primary-color)
- **Don't break grid layout**: Maintain `repeat(auto-fit, minmax(320px, 1fr))` pattern
- **Don't remove smooth scroll**: Keep `behavior: 'smooth'` for UX consistency
- **Don't forget mobile breakpoints**: Always test at 768px and 480px
- **Don't change category colors without updating all instances**: Use CSS classes

### Git Workflow
- Always push to `main` branch (Vercel listens to main)
- Don't commit node_modules or build artifacts
- Include meaningful commit messages

---

**Last Updated**: December 5, 2025 - Deployment Complete

**Website Status**: ✅ LIVE on Vercel
**GitHub Repo**: https://github.com/rijkiresda19-star/rumah-jurnal
**Deployment URL**: https://rumah-jurnal-drab.vercel.app/
