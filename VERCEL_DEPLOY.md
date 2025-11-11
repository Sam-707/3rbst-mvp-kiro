# Deploy 3rbst MVP to Vercel

## ✅ Prerequisites Complete

- ✅ Vercel CLI installed (v45.0.9)
- ✅ Dependencies installed
- ✅ Project ready

## 🚀 Deploy Now

### Option 1: Deploy to Production (Recommended)

```bash
cd 3rbst-mvp
vercel --prod
```

This will:
1. Prompt you to log in (if not already)
2. Ask to link to existing project or create new
3. Deploy to production
4. Give you a live URL

### Option 2: Deploy to Preview First

```bash
cd 3rbst-mvp
vercel
```

This creates a preview deployment for testing.

## 📋 Deployment Steps

### 1. Login to Vercel

```bash
vercel login
```

Choose your login method:
- Email
- GitHub
- GitLab
- Bitbucket

### 2. Deploy

```bash
vercel --prod
```

### 3. Answer Prompts

```
? Set up and deploy "~/3rbst-mvp"? [Y/n] Y
? Which scope do you want to deploy to? [Your Account]
? Link to existing project? [y/N] N
? What's your project's name? 3rbst-mvp
? In which directory is your code located? ./
```

### 4. Wait for Build

Vercel will:
- Upload your files
- Install dependencies
- Build your Next.js app
- Deploy to CDN

### 5. Get Your URL

```
✅ Production: https://3rbst-mvp.vercel.app
```

## 🌐 Custom Domain (Optional)

### Add Domain

```bash
vercel domains add 3rbst.de
```

### Configure DNS

Add these records to your domain:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Verify

```bash
vercel domains verify 3rbst.de
```

## 🔄 Update Deployment

After making changes:

```bash
vercel --prod
```

This will deploy the new version.

## 📊 View Deployment

```bash
# Open in browser
vercel open

# View logs
vercel logs

# List deployments
vercel ls
```

## 🎯 Quick Commands

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# Open dashboard
vercel open

# View logs
vercel logs

# List projects
vercel ls

# Remove deployment
vercel rm [deployment-url]

# Add domain
vercel domains add yourdomain.com

# List domains
vercel domains ls
```

## 🔧 Troubleshooting

### Build Fails

```bash
# Test build locally first
npm run build

# Check for errors
npm run dev
```

### Login Issues

```bash
# Logout and login again
vercel logout
vercel login
```

### Domain Issues

```bash
# Check domain status
vercel domains inspect 3rbst.de

# Verify DNS
vercel domains verify 3rbst.de
```

## 📈 After Deployment

### 1. Test Your Site

Visit your deployment URL and test:
- [ ] All pages load
- [ ] Filters work
- [ ] Mobile responsive
- [ ] Links work
- [ ] Forms styled

### 2. Set Up Analytics

Add to `pages/_app.js`:

```javascript
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}
```

### 3. Configure Environment Variables

```bash
vercel env add NEXT_PUBLIC_API_URL
```

### 4. Enable Preview Deployments

Connect to GitHub for automatic preview deployments on pull requests.

## 🎉 Success!

Your 3rbst MVP is now live at:
- Production: `https://3rbst-mvp.vercel.app`
- Custom domain: `https://3rbst.de` (after DNS setup)

## 📞 Next Steps

1. Share with beta users
2. Gather feedback
3. Iterate on design
4. Add real doctor data
5. Monitor analytics

---

**Ready to deploy?** Run: `vercel --prod`
