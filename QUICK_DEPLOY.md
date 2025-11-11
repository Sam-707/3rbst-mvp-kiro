# Quick Deploy Guide (For Experienced Users)

## 🚀 You Know the Drill

Since you've already deployed to Vercel before, here's the quick version:

### Deploy Now

```bash
cd 3rbst-mvp
vercel --prod
```

That's it! You know what to do.

## 🔧 Project Settings

When prompted:
- **Project name:** `3rbst-mvp` (or your preference)
- **Framework:** Next.js (auto-detected)
- **Build command:** `npm run build` (default)
- **Output directory:** `.next` (default)

## 🌐 If You Want Custom Domain

```bash
vercel domains add 3rbst.de
```

Then update DNS at your registrar.

## 📊 Connect to GitHub (Optional)

For automatic deployments on push:

1. Go to Vercel dashboard
2. Import from GitHub
3. Select this repo
4. Auto-deploy on push to main

## 🔄 Update Deployment

```bash
vercel --prod
```

Or push to GitHub if connected.

## 📝 Environment Variables (If Needed)

```bash
vercel env add NEXT_PUBLIC_API_URL
```

Or add in Vercel dashboard.

## ✅ Post-Deploy Checklist

- [ ] Test live URL
- [ ] Check mobile responsive
- [ ] Verify filters work
- [ ] Test all links
- [ ] Add custom domain (optional)
- [ ] Set up analytics
- [ ] Replace mock data with real data

## 🎯 Connect Real Data

```bash
# Generate API data
python3 recommendation_engine.py

# Copy to MVP
cp doctors_api.json 3rbst-mvp/data/

# Update mockDoctors.js to import real data

# Redeploy
vercel --prod
```

## 📊 Your Vercel Dashboard

View all deployments:
```bash
vercel ls
```

Or visit: https://vercel.com/dashboard

## 🎉 Done!

Your 3rbst MVP will be live at:
- `https://3rbst-mvp-[your-username].vercel.app`
- Or your custom domain

---

**Quick deploy:** `cd 3rbst-mvp && vercel --prod`
