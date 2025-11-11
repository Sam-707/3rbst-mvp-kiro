# 3rbst MVP Deployment Guide

## 🚀 Quick Deployment

### Option 1: Vercel (Recommended - 5 minutes)

**Why Vercel?**
- Built for Next.js
- Automatic deployments
- Free SSL
- Global CDN
- Zero configuration

**Steps:**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
cd 3rbst-mvp
vercel
```

3. **Follow prompts:**
   - Link to Vercel account
   - Set project name: `3rbst-mvp`
   - Accept defaults

4. **Done!** Your site is live at `https://3rbst-mvp.vercel.app`

**Custom Domain:**
```bash
vercel --prod
vercel domains add 3rbst.de
```

---

### Option 2: Netlify (Alternative - 5 minutes)

**Steps:**

1. **Build static site**
```bash
cd 3rbst-mvp
npm run build
npm run export
```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `out/` folder
   - Or use Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

3. **Custom domain:**
   - Go to Domain settings
   - Add `3rbst.de`
   - Update DNS records

---

### Option 3: Static Hosting (Any Provider)

**Build:**
```bash
cd 3rbst-mvp
npm run build
npm run export
```

**Upload `out/` folder to:**
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any static host

---

## 🔧 Environment Setup

### Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Test production build
npm start

# Or export static
npm run export
```

---

## 📊 Connecting Real Data

### Step 1: Generate API Data

```bash
# In your data processing directory
python3 process_scraped_osm_data.py
python3 enrich_doctors_simple.py
python3 recommendation_engine.py
```

This creates `doctors_api.json`

### Step 2: Copy to MVP

```bash
# Copy API data to MVP
cp doctors_api.json 3rbst-mvp/data/

# Or create symlink
ln -s ../doctors_api.json 3rbst-mvp/data/
```

### Step 3: Update Mock Data

Edit `3rbst-mvp/data/mockDoctors.js`:

```javascript
import doctorsData from './doctors_api.json'

export const mockDoctors = doctorsData.doctors.map(doctor => ({
  id: doctor.id,
  name: doctor.name,
  specialty: doctor.specialty,
  bundesland: doctor.state,
  city: doctor.city,
  phone: doctor.contact.phone,
  email: doctor.contact.email || '',
  website: doctor.contact.website || '',
  languages: doctor.languages,
  verified: doctor.confidence >= 0.85,
  recommended: doctor.recommendation_score > 0.8,
  jameda_url: doctor.profiles.jameda,
  doctolib_url: doctor.profiles.doctolib,
  description: `Spezialisiert auf ${doctor.specialty}`
}))

export const bundeslaender = [...new Set(mockDoctors.map(d => d.bundesland))].sort()
export const specialties = [...new Set(mockDoctors.map(d => d.specialty))].sort()
```

### Step 4: Test

```bash
npm run dev
# Check that real data loads correctly
```

---

## 🔄 Automated Updates

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: |
          cd 3rbst-mvp
          npm install
      
      - name: Build
        run: |
          cd 3rbst-mvp
          npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./3rbst-mvp
```

### Manual Update Script

Create `update-and-deploy.sh`:

```bash
#!/bin/bash

echo "🔄 Updating 3rbst MVP..."

# Process data
echo "📊 Processing doctor data..."
python3 process_scraped_osm_data.py
python3 enrich_doctors_simple.py
python3 recommendation_engine.py

# Copy to MVP
echo "📋 Copying data to MVP..."
cp doctors_api.json 3rbst-mvp/data/

# Build
echo "🏗️  Building MVP..."
cd 3rbst-mvp
npm run build

# Deploy
echo "🚀 Deploying..."
vercel --prod

echo "✅ Deployment complete!"
```

Make executable:
```bash
chmod +x update-and-deploy.sh
```

Run:
```bash
./update-and-deploy.sh
```

---

## 🌐 Custom Domain Setup

### Vercel

1. **Add domain:**
```bash
vercel domains add 3rbst.de
```

2. **Update DNS:**
   - Add A record: `76.76.21.21`
   - Add CNAME: `cname.vercel-dns.com`

3. **SSL:** Automatic

### Netlify

1. **Add domain in dashboard**
2. **Update DNS:**
   - Add A record: Netlify's IP
   - Add CNAME: `your-site.netlify.app`
3. **SSL:** Automatic

---

## 📈 Performance Optimization

### Image Optimization

If adding images:

```javascript
// Use Next.js Image component
import Image from 'next/image'

<Image
  src="/doctor-illustration.png"
  alt="Female doctor"
  width={500}
  height={500}
  priority
/>
```

### Code Splitting

Already optimized with Next.js automatic code splitting.

### Caching

Add `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## 🔍 SEO Optimization

### Add Meta Tags

Edit `pages/index.js`:

```javascript
<Head>
  <title>3rbst - Curated Female Doctors for Women | First in Germany</title>
  <meta name="description" content="Discover female doctors carefully selected and verified by women in our community. Your comfort, privacy, and trust come first." />
  <meta name="keywords" content="female doctors, women doctors, Germany, Ärztin, Frauenärztin, verified doctors" />
  
  {/* Open Graph */}
  <meta property="og:title" content="3rbst - First Curated Female Doctor Platform" />
  <meta property="og:description" content="Discover verified female doctors in Germany" />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://3rbst.de" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="3rbst - Curated Female Doctors" />
  <meta name="twitter:description" content="First platform for verified female doctors in Germany" />
  <meta name="twitter:image" content="/twitter-image.png" />
</Head>
```

### Add Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://3rbst.de/</loc>
    <lastmod>2025-11-11</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://3rbst.de/sitemap.xml
```

---

## 📊 Analytics Setup

### Google Analytics

1. **Get tracking ID** from Google Analytics

2. **Add to `pages/_app.js`:**

```javascript
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
```

### Plausible Analytics (Privacy-friendly alternative)

```javascript
<Script
  defer
  data-domain="3rbst.de"
  src="https://plausible.io/js/script.js"
/>
```

---

## 🔒 Security

### Headers

Add security headers in `next.config.js`:

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Environment Variables

For sensitive data, use `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.3rbst.de
NEWSLETTER_API_KEY=your_key_here
```

Access in code:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Deployment Fails

```bash
# Check Node version
node --version  # Should be 18+

# Update dependencies
npm update

# Try clean build
npm run build
```

### Data Not Loading

```bash
# Check data file exists
ls -la 3rbst-mvp/data/doctors_api.json

# Verify JSON format
cat 3rbst-mvp/data/doctors_api.json | jq .

# Check import path in mockDoctors.js
```

---

## ✅ Pre-Launch Checklist

- [ ] Real doctor data loaded
- [ ] All links work
- [ ] Mobile responsive
- [ ] Forms functional
- [ ] Analytics installed
- [ ] SEO meta tags added
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Privacy policy added
- [ ] Terms of service added
- [ ] Contact information updated
- [ ] Social media links added
- [ ] Newsletter signup works
- [ ] Performance tested
- [ ] Cross-browser tested

---

## 🎉 Launch!

Once checklist is complete:

1. **Final test:** `npm run build && npm start`
2. **Deploy:** `vercel --prod`
3. **Verify:** Check live site
4. **Monitor:** Watch analytics
5. **Iterate:** Gather feedback

---

**Your 3rbst MVP is ready to launch!** 🚀
