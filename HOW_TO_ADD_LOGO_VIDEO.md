# 🎨 How to Add Your Logo & Video

## 📁 **FILE REQUIREMENTS**

### **Logo Image:**
- **Filename:** `logo.png` (exactly this name)
- **Size:** 512x512px or 1024x1024px (square)
- **Format:** PNG with transparent background (recommended)
- **Alternative:** JPG also works

### **Video File:**
- **Filename:** `hero-video.mp4` (exactly this name)
- **Format:** MP4 (H.264 codec)
- **Duration:** 10-30 seconds (loops automatically)
- **Size:** Keep under 5MB for fast loading
- **Aspect Ratio:** 16:9 or 1:1 works best
- **Resolution:** 720p (1280x720) recommended

---

## 📂 **WHERE TO PLACE FILES**

Put both files in the **same folder** as `HYMNORA_FINAL.html`:

```
Hymnora/
├── HYMNORA_FINAL.html  ← Main app file
├── logo.png            ← Your logo (ADD THIS)
├── hero-video.mp4      ← Your video (ADD THIS)
└── docs/
    └── index.html
```

**For deployment (GitHub Pages):**
Also add them to the `docs/` folder:

```
Hymnora/docs/
├── index.html
├── logo.png            ← Copy your logo here too
└── hero-video.mp4      ← Copy your video here too
```

---

## 🎨 **LOGO APPEARS IN 2 PLACES**

### **1. Header (Top of app)**
- **Size:** 36x36px (small)
- **Position:** Left side of "HYMNORA" text
- **Shape:** Rounded corners (8px)
- **Effect:** Drop shadow

### **2. Home Screen Hero Section**
- **Size:** 80x80px (large)
- **Position:** Center, above welcome text
- **Shape:** Rounded corners (20px)
- **Effect:** 3D shadow + white border

---

## 🎥 **VIDEO BACKGROUND**

### **Features:**
- **Auto-play:** Starts automatically when app opens
- **Loop:** Plays continuously
- **Muted:** No sound (mobile requirement)
- **Position:** Behind text in hero section
- **Opacity:** 60% (slightly dimmed)
- **Overlay:** Dark tint for text readability

### **Video appears on:**
- ✅ Home screen welcome hero section
- ✅ Behind "Welcome to God's Word" text
- ✅ Continuous loop animation

---

## 🚀 **QUICK SETUP STEPS**

### **Step 1: Prepare Your Files**
```bash
1. Rename your logo to: logo.png
2. Rename your video to: hero-video.mp4
3. Check file sizes (logo < 500KB, video < 5MB)
```

### **Step 2: Add to Repository**
```bash
# Copy files to main folder
cp /path/to/your/logo.png ./Hymnora/logo.png
cp /path/to/your/video.mp4 ./Hymnora/hero-video.mp4

# Copy to docs folder (for deployment)
cp ./Hymnora/logo.png ./Hymnora/docs/logo.png
cp ./Hymnora/hero-video.mp4 ./Hymnora/docs/hero-video.mp4
```

### **Step 3: Commit & Push**
```bash
cd Hymnora
git add logo.png hero-video.mp4 docs/logo.png docs/hero-video.mp4
git commit -m "Added custom logo and hero video"
git push
```

### **Step 4: Wait & Refresh**
- Wait 2-3 minutes for GitHub Pages to update
- Refresh your browser
- Your logo and video will appear!

---

## ✨ **WHAT CHANGES:**

### **Before (Default):**
```
Header:  ✨ HYMNORA
Home:    🙏 Welcome to God's Word (emoji icon)
```

### **After (With Your Files):**
```
Header:  [Your Logo] HYMNORA
Home:    [Your Logo + Background Video]
         Welcome to God's Word
```

---

## 🎯 **DESIGN SPECIFICATIONS**

### **Logo Dimensions:**

**In Header:**
```css
width: 36px;
height: 36px;
border-radius: 8px;
margin-right: 10px;
```

**In Home Hero:**
```css
width: 80px;
height: 80px;
border-radius: 20px;
border: 3px solid white;
box-shadow: 0 8px 24px rgba(0,0,0,0.3);
```

### **Video Styling:**
```css
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
opacity: 0.6;
```

---

## 🔧 **TROUBLESHOOTING**

### **Logo not showing?**
✅ Check filename is exactly `logo.png` (case-sensitive)
✅ File is in correct folder
✅ File size < 500KB
✅ Image format is PNG or JPG
✅ Clear browser cache (Ctrl+F5)

### **Video not playing?**
✅ Check filename is exactly `hero-video.mp4`
✅ Format is MP4 (H.264 codec)
✅ File size < 5MB
✅ Video has h264 video codec
✅ Try on different browser (some block autoplay)

### **Files exist but still not showing?**
✅ Wait 2-3 minutes after pushing to GitHub
✅ Hard refresh browser (Ctrl+Shift+R)
✅ Check browser console for errors (F12)
✅ Verify files are in `docs/` folder for deployment

---

## 📱 **MOBILE CONSIDERATIONS**

### **Logo:**
- Keep logo simple (works at small sizes)
- High contrast for visibility
- Square aspect ratio (1:1)

### **Video:**
- Mobile data friendly (< 3MB ideal)
- Short loop (10-20 seconds)
- Clear visuals (readable at small sizes)
- No text in video (may be hard to read)

---

## 🎨 **RECOMMENDED VIDEO IDEAS**

Good examples:
- ✅ Abstract light rays
- ✅ Soft bokeh particles
- ✅ Gentle wave patterns
- ✅ Slow motion nature
- ✅ Subtle gradient animations

Avoid:
- ❌ Text or words in video
- ❌ Very fast motion
- ❌ Dark/muddy colors
- ❌ Complex scenes
- ❌ Large file sizes

---

## 💡 **PRO TIPS**

### **For Logo:**
1. Export at 2x size (1024x1024) for retina displays
2. Use transparent background PNG
3. Include subtle padding around edges
4. Test on both light and dark backgrounds

### **For Video:**
1. Export as MP4 with H.264 codec
2. Use 30fps for smooth playback
3. Optimize with HandBrake or similar tool
4. Test loop point for seamless replay
5. Keep it subtle (background, not distraction)

---

## 📊 **FILE SIZE GUIDE**

### **Logo:**
- **Ideal:** 50-100KB
- **Maximum:** 500KB
- **Resolution:** 512x512 or 1024x1024

### **Video:**
- **Ideal:** 2-3MB
- **Maximum:** 5MB
- **Duration:** 15-20 seconds
- **Resolution:** 720p (1280x720)

---

## ✅ **CHECKLIST**

Before deploying:
- [ ] Logo is exactly 512x512 or 1024x1024 pixels
- [ ] Logo filename is `logo.png` (lowercase)
- [ ] Video is MP4 format with H.264 codec
- [ ] Video filename is `hero-video.mp4` (lowercase)
- [ ] Both files are under 5MB total
- [ ] Files are in both main and `docs/` folders
- [ ] Tested locally before pushing
- [ ] Committed and pushed to GitHub
- [ ] Waited 2-3 minutes for deployment
- [ ] Hard refreshed browser

---

## 🎉 **RESULT**

After adding your files, the app will show:
- ✨ Your logo in the header
- 🎥 Your video playing in background
- 💎 Your logo centered on home screen
- 📱 Professional branded experience

**Your Bible app, your brand! 🚀**

---

**Need Help?**
- Check file names are EXACTLY correct
- Verify files are in the right folders
- Clear browser cache
- Wait a few minutes after pushing to GitHub
