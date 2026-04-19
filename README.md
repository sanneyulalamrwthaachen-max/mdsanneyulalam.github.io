# Md Sanney Ul Alam — Portfolio Website

Personal academic & professional portfolio site, deployable on **GitHub Pages** for free.

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click the **+** icon → **New repository**
3. Name it exactly: `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
   - e.g. `sanneyulalam.github.io`
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload the files
**Option A — via GitHub website (easiest):**
1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop all three files:
   - `index.html`
   - `style.css`
   - `script.js`
4. Click **Commit changes**

**Option B — via Git (if you have Git installed):**
```bash
git clone https://github.com/your-username/your-username.github.io
cd your-username.github.io
# Copy index.html, style.css, script.js into this folder
git add .
git commit -m "Initial portfolio site"
git push origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**

### Step 4 — Visit your site
After ~1 minute your site will be live at:
```
https://your-username.github.io
```

---

## 📸 Adding Your Photo

The site is designed without a photo section for clean loading, but if you want to add one:

1. Add your photo (e.g. `photo.jpg`) to the same folder as `index.html`
2. In `index.html`, find the `#hero` section and add inside `.hero-content`:
```html
<img src="photo.jpg" alt="Md Sanney Ul Alam" class="hero-photo" />
```
3. In `style.css`, add:
```css
.hero-photo {
  width: 120px; height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--gold);
  margin-bottom: 1.5rem;
}
```

---

## ✏️ Customising Content

All content is in `index.html`. Look for the comments like `<!-- ░░ HERO ░░ -->` to find each section quickly.

**To update your email/phone:** Search for `sanneyulalam.rwthaachen@gmail.com` and replace with yours.

**Accent colour:** In `style.css`, change `--accent: #2E4057` to any hex colour you like.

---

## 📁 File Structure

```
your-username.github.io/
├── index.html   ← all page content
├── style.css    ← all styles & layout
├── script.js    ← navbar & scroll animations
└── README.md    ← this file (not shown on site)
```

---

## 🌐 Custom Domain (Optional)

If you own a domain (e.g. `sanneyulalam.com`):
1. In your repository, create a file named `CNAME` containing just your domain name
2. Update your domain's DNS to point to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
