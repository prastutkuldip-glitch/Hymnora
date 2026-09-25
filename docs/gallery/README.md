# Church Gallery files

## Photos
- Formats: `.jpg` / `.png`
- Keep each file under about 2 MB so the gallery loads fast on mobile data
- Upload here: https://github.com/prastutkuldip-glitch/Hymnora/upload/main/docs/gallery

## Videos — read this before uploading

Big videos **cannot** live in this repository. The hard limits:

| Route | Limit |
|---|---|
| GitHub web upload | 25 MB per file |
| Git push from a computer | 100 MB per file (push is rejected above this) |
| Git LFS | allows 2 GB, but **GitHub Pages does not serve LFS files** |
| GitHub Pages site total | 1 GB soft limit |

So videos are hosted outside and embedded. All three of these play **inside**
the app, no redirect:

### 1. YouTube — recommended for 500-700 MB files
Upload the original file, set visibility to **Unlisted** (only people with the
link can watch, it never appears in search). Then add:

```js
{title:"June Convention Day 1", yt:"https://youtu.be/VIDEO_ID"}
```

### 2. Google Drive — if it must stay off YouTube
Upload to Drive, then Share -> General access -> **Anyone with the link**
(Viewer). Without that the embed shows nothing. Then add:

```js
{title:"June Convention Day 1", drive:"https://drive.google.com/file/d/FILE_ID/view?usp=sharing"}
```

### 3. Small clips as real files
Under 25 MB only, uploaded into this folder:

```js
{title:"Short clip", file:"gallery/clip1.mp4"}
```

Any YouTube or Drive link format works — paste it exactly as copied.
