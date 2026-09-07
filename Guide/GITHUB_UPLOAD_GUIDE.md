# 📤 Complete Guide: Upload & Run on GitHub

A complete step-by-step guide to get your CricutCraft e-commerce store on GitHub and deployed to the web.

## 🎯 Overview

You'll complete these steps:
1. Create a GitHub account (if needed)
2. Upload code to GitHub
3. Deploy to Vercel (easiest) or other platforms
4. Set up your custom domain

**Total Time: 15-20 minutes**

---

## 📋 Part 1: Prepare Your Computer

### Step 1A: Install Git

**Windows:**
1. Go to https://git-scm.com/download/win
2. Download and run installer
3. Use default options
4. Open Command Prompt/PowerShell

**macOS:**
```bash
# Install Homebrew first (if needed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Git
brew install git
```

**Linux:**
```bash
sudo apt-get update
sudo apt-get install git
```

### Step 1B: Install Node.js

1. Go to https://nodejs.org
2. Download LTS version (18.x or 20.x)
3. Run installer and follow steps
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 1C: Extract Project Files

Option A: Using tar.gz (macOS/Linux)
```bash
tar -xzf cricut-shop.tar.gz
cd cricut-shop
```

Option B: On Windows or any OS
1. Download `cricut-shop.tar.gz` or `cricut-shop` folder
2. Extract it using WinRAR, 7-Zip, or Windows built-in
3. Open folder in Command Prompt/PowerShell

---

## 🔐 Part 2: Create GitHub Account

### Step 2A: Sign Up for GitHub

1. Go to https://github.com/signup
2. Enter email address
3. Create password
4. Choose username (e.g., `cricutcraft`)
5. Verify email address
6. Choose free plan

### Step 2B: Create Personal Access Token

1. Go to https://github.com/settings/tokens/new
2. Click **Generate new token** → **Generate new token (classic)**
3. Name it: `CricutCraft-Deployment`
4. Check these scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Actions)
5. Scroll down and click **Generate token**
6. **COPY the token** (you won't see it again!)

💾 Save this token somewhere safe - you'll need it!

---

## 📤 Part 3: Upload to GitHub

### Step 3A: Open Terminal/Command Prompt

**Windows:**
1. Open Command Prompt or PowerShell
2. Navigate to your project: `cd path/to/cricut-shop`

**macOS/Linux:**
1. Open Terminal
2. Navigate: `cd path/to/cricut-shop`

### Step 3B: Initialize Git

```bash
# Navigate to project directory
cd cricut-shop

# Initialize git repository
git init

# Configure git (use your GitHub email and name)
git config user.name "Your Name"
git config user.email "your-email@github.com"

# If you want to set globally:
# git config --global user.name "Your Name"
# git config --global user.email "your-email@github.com"
```

### Step 3C: Add Files to Git

```bash
# Stage all files
git add .

# Check what's staged (optional)
git status

# Create first commit
git commit -m "Initial commit: CricutCraft e-commerce store - full code ready"
```

### Step 3D: Create Remote Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `cricut-shop`
3. Description: `Beautiful e-commerce store for custom Cricut products`
4. Choose **Public** (recommended for free)
5. **DO NOT** initialize with README (we already have one)
6. Click **Create repository**

### Step 3E: Push Code to GitHub

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/cricut-shop.git

# Verify it's added
git remote -v

# Push to GitHub (will prompt for authentication)
git branch -M main
git push -u origin main
```

When prompted for authentication:
- **Username**: Your GitHub username
- **Password**: Use the personal access token you created (not your GitHub password!)

**Success!** Your code is now on GitHub! 🎉

---

## 🚀 Part 4: Deploy to Vercel (Easiest)

### Step 4A: Create Vercel Account

1. Go to https://vercel.com/signup
2. Click **Continue with GitHub**
3. Authorize Vercel
4. Follow setup wizard

### Step 4B: Import Project

1. In Vercel dashboard, click **Add New** → **Project**
2. Click **Continue with GitHub**
3. Search for `cricut-shop` repository
4. Click **Import**

### Step 4C: Configure Project

1. **Project Name**: `cricut-shop` (or your choice)
2. **Framework Preset**: Next.js (auto-detected)
3. **Root Directory**: `./` (default)
4. Click **Deploy**

⏳ Wait 2-3 minutes for deployment...

### Step 4D: Your Site is Live! 🎉

After deployment:
1. You'll see a success message
2. Your site URL: `https://cricut-shop.vercel.app`
3. Visit it in your browser!

---

## 🌐 Part 5: Add Custom Domain (Optional but Recommended)

### Step 5A: Purchase a Domain

Choose one registrar:

| Registrar | Price | Link |
|-----------|-------|------|
| Namecheap | $0.88/year | https://namecheap.com |
| GoDaddy | $1/year (first year) | https://godaddy.com |
| Google Domains | $12/year | https://domains.google.com |
| Porkbun | $3.29/year | https://porkbun.com |

**Recommended:** Namecheap (cheap + good support)

### Step 5B: Connect Domain to Vercel

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `cricutcraft.com`)
4. Click **Add**
5. Vercel shows DNS records

### Step 5C: Update DNS Records

Go to your domain registrar (e.g., Namecheap):

1. Log in to your account
2. Go to **Manage Domain**
3. Click **Advanced DNS**
4. Copy the DNS records from Vercel and add them:

Usually something like:
- Type: `CNAME`
- Host: `www`
- Value: `cname.vercel-dns.com`

**Wait 24-48 hours** for DNS to propagate

Then visit `https://www.cricutcraft.com` 🎉

---

## ✅ Part 6: Verify Everything Works

### Test Your Store

1. ✅ Visit your site
2. ✅ Browse products
3. ✅ Search and filter
4. ✅ Add to cart
5. ✅ Check mobile view
6. ✅ Try contact form
7. ✅ Check all links work

### Performance Check

- Vercel: Dashboard → Analytics
- Google PageSpeed: https://pagespeed.web.dev
- GTmetrix: https://gtmetrix.com

---

## 🔄 Update Your Code

Every time you make changes:

```bash
# Make changes to files...

# Add changes to git
git add .

# Commit with a message
git commit -m "Update: Added new products"

# Push to GitHub
git push origin main
```

Vercel automatically deploys! ✅

---

## 🛠️ Common Commands Reference

```bash
# Check git status
git status

# View commit history
git log --oneline

# See changes you made
git diff

# Add specific file
git add src/lib/products.js

# Undo changes to a file
git checkout src/lib/products.js

# View remote
git remote -v

# Update from GitHub (if you change code elsewhere)
git pull origin main
```

---

## 🚨 Troubleshooting

### Problem: "fatal: not a git repository"
**Solution:**
```bash
cd cricut-shop
git init
```

### Problem: "Authentication failed"
**Solution:**
- Use your personal access token (not password)
- On Windows, Git Credential Manager may prompt
- Generate new token if needed

### Problem: "Vercel deployment failed"
**Solution:**
1. Check build logs in Vercel dashboard
2. Ensure Node 18+ is installed
3. Try local build: `npm run build`
4. Common fixes:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Problem: "DNS not working"
**Solution:**
- Wait 24-48 hours for propagation
- Check DNS records are correct
- Use https://dnschecker.org to verify
- Flush your local DNS:
  - Windows: `ipconfig /flushdns`
  - macOS: `sudo dscacheutil -flushcache`
  - Linux: `sudo systemctl restart nscd`

### Problem: "My site looks wrong on mobile"
**Solution:**
- Clear browser cache
- Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
- Check in incognito/private window

---

## 📊 Monitoring Your Site

### Enable Google Analytics

1. Go to https://analytics.google.com
2. Sign up/sign in
3. Create property for your domain
4. Get tracking ID
5. Add to next.js later if needed

### Monitor Uptime

1. Go to https://uptimerobot.com
2. Create free account
3. Add your site URL
4. Get alerts if site goes down

### Track Errors

1. Go to https://sentry.io
2. Create free account
3. Follow Next.js setup

---

## 🎨 Next Customizations

### Update Products
- Edit `src/lib/products.js`
- Add your actual products
- Use real product images
- Push to GitHub
- Vercel auto-deploys ✅

### Add Payment Processing
- Sign up at https://stripe.com
- Get API keys
- Add to Vercel environment variables
- Implement payment flow

### Add Email Newsletter
- Sign up at https://mailchimp.com
- Get API key
- Add subscription form to footer

### Add Product Reviews
- Sign up at https://trustpilot.com
- Add review widget to product pages

---

## 📱 Social Media Integration

Update in `src/components/Footer.js`:

```javascript
// Find this section and add your links:
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://pinterest.com/yourprofile">Pinterest</a>
```

---

## 💡 Pro Tips

1. **Use GitHub Desktop** (easier than command line)
   - Download from https://desktop.github.com
   - No command line needed!

2. **Vercel Git Integration**
   - Every push = automatic deploy
   - No manual deployment needed
   - Preview deployments for PRs

3. **Backup Your Code**
   - GitHub IS your backup
   - Use `.gitignore` for sensitive files
   - Check `.env.local` is NOT in git

4. **Keep Secret Keys Safe**
   - Use `.env.local` locally
   - Add environment variables in Vercel
   - NEVER commit `.env.local`

---

## 🎯 Your Deployment Checklist

- [ ] Git installed and configured
- [ ] GitHub account created
- [ ] Personal access token generated
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Site is live and working
- [ ] Domain purchased (optional)
- [ ] Domain connected to Vercel (optional)
- [ ] DNS verified (optional)
- [ ] Google Analytics added (optional)
- [ ] Products customized
- [ ] Contact info updated
- [ ] Site tested on mobile
- [ ] All links verified

---

## 🆘 Need Help?

### Useful Links
- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Troubleshooting**: See DEPLOYMENT.md

### Get Support
- GitHub Issues: Post questions on repo
- Vercel Support: https://vercel.com/support
- Stack Overflow: Tag `next.js` and `vercel`

---

## 🎉 You Did It!

Your professional e-commerce store is now:
- ✅ On GitHub (backed up)
- ✅ Deployed to production
- ✅ Live on the internet
- ✅ Ready to sell! 🚀

---

## 📈 Next Steps

1. ✅ Get site live
2. ✅ Test everything
3. ⏭️ Add real products
4. ⏭️ Add Stripe payments
5. ⏭️ Set up email
6. ⏭️ Promote on social media
7. ⏭️ Add SEO optimization
8. ⏭️ Scale and grow! 📈

---

**Congratulations on launching your store! 🎊**

**Questions?** Check the included documentation files:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Detailed deployment guide
- `QUICKSTART.md` - Quick reference

Happy selling! 🛍️✂️

---

Last updated: September 2024
