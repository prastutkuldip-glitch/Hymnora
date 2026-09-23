# HYMNORA - Detailed Feature Specifications

## Overview

This document provides comprehensive specifications for all 6 main sections of the Hymnora application, detailing functionality, user interactions, data requirements, and implementation guidelines.

---

## 1. HOME TAB - Dashboard & Quick Access

### Purpose
Central hub providing quick access to all features, displaying personalized content, and encouraging daily engagement.

### Key Features

#### 1.1 Personalized Greeting
**Description:** Dynamic greeting based on time of day  
**Implementation:**
```javascript
const getGreeting = (hour) => {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  if (hour < 21) return "Good evening";
  return "Good night";
};
```
**Display:** "{Greeting}, {UserName}!"  
**Location:** Top of screen below logo

#### 1.2 Continue Bible Reading Card
**Purpose:** Resume Bible reading from last position  
**Data Required:**
- Last read book, chapter, verse
- Reading progress percentage
- Translation used
- Timestamp of last read

**UI Elements:**
- Book name and chapter number
- Visual progress bar
- "Continue Reading" button
- Estimated reading time remaining

**Interaction:**
- Tap card → Opens Bible reader at exact last position
- Shows even if user hasn't read (suggests starting with Genesis or John)

**API:**
```
GET /api/bible/reading-history?limit=1
Response: {
  bookId, chapter, verse, translation, timestamp, progress
}
```

#### 1.3 Verse of the Day
**Purpose:** Daily spiritual inspiration and engagement  
**Features:**
- Automatically changes daily at midnight
- Beautiful glassmorphism card design
- Full verse text displayed
- Bible reference shown
- Action buttons row

**Actions Available:**
1. **Listen (Premium):** Play audio of verse
2. **Bookmark:** Save verse to bookmarks
3. **Favorite:** Add to favorites
4. **Share:** Share verse image/text
5. **Context (Premium):** View detailed explanation

**Data Structure:**
```javascript
{
  id: uuid,
  date: "2024-01-15",
  translation: "KJV",
  book: "John",
  chapter: 3,
  verse: 16,
  text: "For God so loved the world...",
  reference: "John 3:16"
}
```

**Daily Rotation Logic:**
- Admin pre-schedules verses for each day
- System auto-selects next verse at midnight
- Falls back to random inspirational verse if not scheduled
- Same verse shown to all users (creates community feeling)

**Push Notification:**
- Sent daily at user-preferred time (default: 8:00 AM)
- Title: "Your Daily Verse"
- Body: First 50 characters of verse + "..."
- Tap notification → Opens Verse of the Day on Home

#### 1.4 Quick Access Cards
**Purpose:** Navigate to main features quickly  
**Layout:** 2x2 or 2x3 grid of feature cards

**Cards:**
1. **Hymns Card**
   - Icon: Musical note in glass bubble
   - Label: "Hymns"
   - Subtitle: "Worship through song"
   - Action: Navigate to Hymns tab

2. **Bible Audio Card (Premium)**
   - Icon: Speaker/headphones in glass
   - Label: "Bible Audio"
   - Subtitle: "Listen anywhere"
   - Premium badge
   - Action: Navigate to Audio player or Premium screen

3. **Ask Bible AI Card (Premium)**
   - Icon: Sparkle/brain in crystal
   - Label: "Ask Bible AI"
   - Subtitle: "Biblical answers"
   - Premium badge
   - Action: Navigate to AI tab or Premium screen

4. **Christian Books Card (Premium)**
   - Icon: Stack of books in glass
   - Label: "Christian Books"
   - Subtitle: "Grow in faith"
   - Premium badge
   - Action: Navigate to Books tab or Premium screen

5. **Saved & Favorites Card**
   - Icon: Heart in glass bubble
   - Label: "Saved"
   - Subtitle: "Your favorites"
   - Action: Open saved content bottom sheet

6. **Bible Study Card (Future)**
   - Icon: Notebook in glass
   - Label: "Study Plans"
   - Subtitle: "Guided reading"
   - Coming soon badge

#### 1.5 Recently Opened Hymns
**Purpose:** Quick access to recent hymns  
**Display:**
- Horizontal scrollable list
- Shows last 10 hymns viewed
- Each hymn shown as compact card with:
  - Hymn number (if available)
  - Hymn title
  - Language badge
  - Tap → Open hymn detail

**Data:**
```
GET /api/hymns/recent?limit=10
Response: [{
  id, number, title, language, lastOpened
}]
```

#### 1.6 Favorites & Saved Section
**Purpose:** Access to user's saved content  
**Options:**
- Saved Hymns (count badge)
- Bible Bookmarks (count badge)
- Bible Notes (Premium, count badge)
- Highlights (Premium, count badge)

**Each Option:**
- Icon + Label + Count
- Tap → Navigate to respective list screen

### Technical Requirements

**State Management:**
- User profile data (name, photo, subscription status)
- Verse of the day (cached for 24 hours)
- Reading progress
- Recent hymns (cached, synced periodically)
- Saved content counts

**Performance:**
- Lazy load sections as user scrolls
- Cache verse of the day
- Pre-fetch user stats on app launch
- Skeleton loaders while loading

**Offline Support:**
- Show cached verse of the day
- Show cached reading progress
- Show "Connect to sync" message for real-time data

### Success Metrics
- Daily active users viewing Home
- Verse of the Day engagement rate
- Continue Reading click-through rate
- Quick access card usage distribution

---

## 2. BIBLE TAB - Scripture Reading System

### Purpose
Comprehensive Bible reading experience with search, bookmarks, highlights, notes, audio, and contextual study tools.

### Key Features

#### 2.1 Bible Translation Management
**Supported Languages (Launch):**
1. English
   - KJV (King James Version)
   - NIV (New International Version)
   - ESV (English Standard Version)
   - NLT (New Living Translation)

2. Hindi (हिंदी)
   - Hindi Bible (common translation)
   - Hindi Easy Version

3. Assamese (অসমীয়া)
   - Assamese Bible

**Selection Flow:**
1. User selects interface language (if not set)
2. System shows Bible translations for that language
3. User selects preferred translation
4. Saved as default, can be changed anytime

**Translation Switcher:**
- Available in Bible reader header
- Shows current translation
- Tap → Bottom sheet with translation list
- Instant switch without losing position

**Data Structure:**
```javascript
{
  id: uuid,
  name: "King James Version",
  abbreviation: "KJV",
  language: "en",
  description: "Classic English translation",
  isActive: true
}
```

#### 2.2 Bible Books & Navigation
**Structure:**
- 66 books total
- Old Testament: 39 books
- New Testament: 27 books

**Book Selection Screen:**
- Two sections: "Old Testament" and "New Testament"
- Grid layout (2 columns on mobile)
- Each book card shows:
  - Book name
  - Number of chapters
  - Testament badge
  - Reading progress indicator (if started)

**Chapter Selection:**
- Grid of chapter numbers
- Tap chapter → Open Bible reader
- Quick jump: Input field for direct chapter access
- Shows checkmark on completed chapters

**Navigation in Reader:**
- Swipe left: Next chapter
- Swipe right: Previous chapter
- Tap header: Open chapter selector
- Bottom progress bar showing chapter position

#### 2.3 Bible Reader Interface
**Layout:**
- Clean, distraction-free reading
- Verse-by-verse format
- Each verse has small number on left
- Proper spacing between verses
- Background color based on user preference

**Typography:**
- Default font: Lora (serif) 16px
- Adjustable: 14px, 16px, 18px, 20px, 22px
- Line height: 1.75 (relaxed)
- Text alignment: Left (default), Justified
- Color: Deep blue (#0C1E35)

**Header (Collapsible):**
- Back button
- Book & Chapter title
- Search icon
- More menu (...)
- Translation badge

**Footer (Optional):**
- Chapter navigation arrows
- Progress indicator
- Page number (Chapter X of Y)

**Reading Modes:**
1. **Verse Mode:** Each verse separate (default)
2. **Paragraph Mode:** Verses grouped naturally (future)
3. **Two-Column Mode:** For tablets (future)

#### 2.4 Verse Interaction System
**Tap Verse:**
- Verse highlights with ice blue background
- Bottom sheet slides up with actions

**Verse Actions Bottom Sheet:**
```
┌─────────────────────────────┐
│  John 3:16                  │
├─────────────────────────────┤
│  [📑] Bookmark              │
│  [❤️] Favorite               │
│  [🎨] Highlight (Premium)    │
│  [📝] Add Note (Premium)     │
│  [📋] Copy                   │
│  [📤] Share                  │
│  [🔊] Listen (Premium)       │
│  [ℹ️] View Context (Premium) │
└─────────────────────────────┘
```

**Action Behaviors:**

**Bookmark:**
- Instantly saves verse
- Shows bookmark ribbon icon on verse
- Toast: "Verse bookmarked"
- Stored in user's bookmarks list

**Favorite:**
- Adds to favorites collection
- Shows heart icon on verse
- Synced across devices

**Highlight (Premium):**
- Shows color picker (Yellow, Green, Blue, Pink, Purple)
- Applies background color to verse
- Multiple highlights per verse possible
- Persists across sessions

**Add Note (Premium):**
- Opens note editor modal
- Rich text input
- Attach to specific verse
- Shows note indicator icon on verse
- Timestamp and edit history

**Copy:**
- Copies verse text + reference to clipboard
- Format: "{Verse text}" - {Book Chapter:Verse} ({Translation})
- Toast: "Verse copied"

**Share:**
- Generates beautiful verse image (crystal white background, ice blue accents)
- Text includes: Verse + Reference + "- Hymnora" branding
- Native share sheet with options:
  - WhatsApp, Facebook, Twitter, Instagram
  - Save image
  - Copy text
  - More...

**Listen (Premium):**
- Plays audio of selected verse
- Mini player appears at bottom
- Continues in background
- Can expand to full audio player

**View Context (Premium):**
- Opens full-screen context modal
- Detailed explanation of verse

#### 2.5 Bible Search
**Search Interface:**
- Prominent search bar at top
- Search icon in reader header
- Floating search button (optional)

**Search Capabilities:**
- Full-text search across all verses
- Search within current book
- Search within Old/New Testament
- Search entire Bible

**Search Filters:**
- Translation (current or all)
- Testament (Old/New/Both)
- Specific book(s)
- Case sensitivity toggle

**Search Algorithm:**
- Real-time search as user types (debounced 300ms)
- Fuzzy matching for typos
- Highlight matching terms in results
- Ranked by relevance

**Search Results Display:**
- Grouped by book
- Shows verse in context (verse before and after)
- Matching terms highlighted
- Tap result → Opens Bible reader with verse highlighted

**Recent Searches:**
- Stores last 10 searches
- Tap to re-run search
- Clear all option

#### 2.6 Bible Bookmarks System
**Purpose:** Save important verses for quick access

**Bookmark Creation:**
- Tap verse → Bookmark button
- Instantly saved
- Shows bookmark ribbon on verse
- Synced to cloud

**Bookmarks List:**
- Chronological order (newest first)
- Alternative: Group by book
- Each bookmark shows:
  - Verse reference
  - First 100 characters of text
  - Date bookmarked
  - Quick action buttons (Delete, Share)

**Bookmark Management:**
- Search bookmarks
- Filter by book
- Sort by date or book order
- Swipe to delete
- Export bookmarks (CSV/PDF)

**Data Structure:**
```javascript
{
  id: uuid,
  userId: uuid,
  translationId: uuid,
  bookId: uuid,
  chapter: 16,
  verse: 13,
  note: "Personal reminder",
  createdAt: timestamp
}
```

#### 2.7 Bible Highlights (PREMIUM)
**Purpose:** Visually mark important verses with colors

**Color Options:**
- 🟨 Yellow (default)
- 🟩 Green
- 🔵 Blue
- 🩷 Pink
- 🟣 Purple

**Highlight Creation:**
- Tap verse → Highlight option (Premium)
- Color picker appears
- Select color
- Highlight applied immediately
- Semi-transparent background color on verse

**Highlights List:**
- View all highlights
- Filter by color
- Filter by book
- Sort options
- Tap to open verse in reader

**Multi-Highlight:**
- Same verse can have one highlight color
- Changing color updates existing highlight

#### 2.8 Bible Notes (PREMIUM)
**Purpose:** Personal study notes attached to verses

**Note Creation:**
- Tap verse → Add Note (Premium)
- Modal opens with rich text editor
- Save note attached to verse
- Note icon appears on verse

**Note Editor Features:**
- Plain text initially (rich text future)
- 5000 character limit
- Auto-save draft
- Timestamp
- Edit history

**Notes List:**
- All notes sorted by date or book
- Search notes by content
- Filter by book
- Each note shows:
  - Verse reference
  - Note preview
  - Date created/modified
- Tap → Open note editor

**Note Display:**
- Small note icon on verse (📝)
- Tap icon or verse → View/edit note
- Note appears in card below verse

#### 2.9 Reading History (PREMIUM)
**Purpose:** Track reading progress and habits

**Tracking:**
- Auto-track when user reads chapter
- Store book, chapter, time spent
- Date and time of reading
- Reading streak calculation

**Reading Stats:**
- Total verses read
- Total chapters read
- Books completed
- Days reading streak
- Average reading time
- Most read books

**History List:**
- Recent chapters read
- Chronological order
- Shows date and time
- Tap to re-open chapter

**Gamification:**
- Reading streak badges
- Completion certificates
- Progress toward reading entire Bible
- Milestone notifications

#### 2.10 Bible Audio (PREMIUM)
**Purpose:** Listen to Bible anywhere

**Audio Features:**
- Verse-level audio
- Chapter-level audio
- Book-level audio
- AI-generated natural voices

**Audio Player:**
- Mini player (bottom bar)
- Full-screen player (expandable)
- Background playback
- Lock screen controls

**Player Controls:**
- Play/Pause
- Skip 10/15 seconds forward/backward
- Playback speed (0.75x - 2x)
- Next/Previous chapter
- Repeat chapter toggle
- Sleep timer

**Voice Options:**
- Male voice 1 (Deep, authoritative)
- Male voice 2 (Warm, gentle)
- Female voice 1 (Clear, melodic)
- Female voice 2 (Soft, soothing)

**Download for Offline:**
- Download chapters/books
- Manage downloads
- Auto-delete old downloads
- Storage usage indicator

**Audio Generation (Backend):**
- Use ElevenLabs or Google TTS
- Pre-generate popular chapters
- Generate on-demand for rare chapters
- Cache generated audio

#### 2.11 Bible Context (PREMIUM)
**Purpose:** Deep understanding of Scripture

**Context Types:**

1. **Historical Context**
   - Time period
   - Historical events
   - Cultural background
   - Author information

2. **Literary Context**
   - Book genre
   - Chapter theme
   - Surrounding verses
   - Parallel passages

3. **Cultural Context**
   - Ancient customs
   - Geographical setting
   - Social norms
   - Language nuances

4. **Related Passages**
   - Cross-references
   - Similar themes
   - Fulfillment prophecies
   - Quotations in other books

5. **Visual Explanations**
   - Timelines
   - Maps
   - Diagrams
   - Character relationships

**Context Display:**
- Full-screen modal
- Tabbed interface for context types
- Formatted text with headings
- Clickable related passages
- Bookmark context for later
- Share context insights

**Data Source:**
- Pre-written biblical commentary
- API integration (optional)
- Admin-curated content
- Never AI-generated biblical facts

#### 2.12 Bible Settings
**Customization Options:**

**Appearance:**
- Font family (Serif, Sans-serif)
- Font size (14px - 22px)
- Line spacing (Compact, Normal, Relaxed)
- Text alignment (Left, Justified)

**Theme:**
- Light mode (white background)
- Sepia mode (cream background)
- Dark mode (dark grey background)

**Reading Experience:**
- Show verse numbers (Yes/No)
- Red letter Jesus words (Yes/No)
- Chapter navigation mode (Swipe/Buttons)

**Default Translation:**
- Set preferred translation
- Quick switch in reader

### Technical Requirements

**Database:**
- 31,000+ verses stored
- Indexed for fast search
- Compressed text data
- Multiple translations

**Performance:**
- Lazy load verses (virtual scrolling)
- Cache current chapter
- Pre-load next chapter
- Smooth scrolling (60fps)

**Offline:**
- Download translations for offline
- SQLite local database
- Sync bookmarks/notes when online
- Offline indicator

**Sync:**
- Real-time sync across devices
- Conflict resolution (last write wins)
- Sync bookmarks, highlights, notes
- Background sync

### Success Metrics
- Daily Bible readers
- Average verses read per session
- Bookmark usage
- Premium feature adoption (Audio, Context, Notes)
- Reading streak retention

---

## 3. HYMNS TAB - Worship & Music Library

### Purpose
Complete hymn library with official hymns, user-created hymns, categories, search, and social features.

### Key Features

#### 3.1 Hymn Library Structure
**Three Main Sections:**

1. **Official Hymns (Admin Curated)**
   - Professionally entered
   - Organized by categories
   - Verified lyrics
   - Featured prominently

2. **My Hymns (User Created)**
   - User's personal hymns
   - Private by default
   - Can be made public
   - Full edit/delete control

3. **Public Hymns (User Shared)**
   - Other users' public hymns
   - Like, favorite, comment
   - Report inappropriate content
   - Discovery feed

#### 3.2 Hymn Categories System
**Default Categories (Admin Created):**
- Worship & Praise
- Christmas Hymns
- Easter Hymns
- Wedding Hymns
- Funeral Hymns
- Children's Hymns
- Traditional Hymns
- Contemporary Worship
- Devotional Songs
- Gospel Songs
- Regional Hymns (by language)

**Category Display:**
- Horizontal scrollable pills at top
- Grid view for full category list
- Each category has:
  - Name (multilingual)
  - Icon/Image
  - Hymn count
  - Description

**Category Management:**
- Admin can create categories
- Assign multiple categories to hymn
- Filter hymns by category
- Featured categories on home

#### 3.3 Official Hymns
**Data Structure:**
```javascript
{
  id: uuid,
  hymnNumber: "001",
  title: "Amazing Grace",
  lyrics: "Amazing grace how sweet...",
  language: "English",
  categories: [uuid, uuid],
  isOfficial: true,
  createdByAdmin: true,
  views: 1250,
  favorites: 320,
  createdAt: timestamp
}
```

**Display:**
- Grid or list view toggle
- Each hymn card shows:
  - Hymn number (large, prominent)
  - Title
  - Language badge
  - Category badges
  - View count
  - Favorite count

**Hymn Detail View:**
- Full-screen reading interface
- Clean typography (Lora serif)
- Proper line breaks for verses/chorus
- Structure preserved (verse/chorus labels)
- Readable font size (16-18px)
- Scroll for long hymns

**Hymn Actions:**
- Favorite (heart icon)
- Share (generates image)
- Search within hymn (future)
- Print/Export (future)

#### 3.4 User Hymn Creation
**Purpose:** Allow users to preserve their hymns

**Create Hymn Form:**
```
┌─────────────────────────────┐
│ Create New Hymn             │
├─────────────────────────────┤
│ Hymn Name *                 │
│ [___________________]       │
│                             │
│ Hymn Number (optional)      │
│ [___________________]       │
│                             │
│ Language *                  │
│ [Dropdown: English ▼]       │
│                             │
│ Lyrics *                    │
│ [                        ]  │
│ [                        ]  │
│ [      Textarea          ]  │
│ [                        ]  │
│                             │
│ Visibility                  │
│ ○ Private (Only me)         │
│ ○ Public (Everyone)         │
│                             │
│ [Preview] [Save Hymn]       │
└─────────────────────────────┘
```

**Form Fields:**

1. **Hymn Name (Required)**
   - Text input
   - Max 200 characters
   - Example: "Amazing Grace"

2. **Hymn Number (Optional)**
   - Text/Number input
   - Helps organize personal hymn books
   - Example: "001" or "H-345"

3. **Lyrics (Required)**
   - Large textarea
   - Preserves line breaks
   - Max 10,000 characters
   - Supports multiple verses/chorus
   - No rich text formatting initially

4. **Language (Required)**
   - Dropdown selection
   - Options: English, Hindi, Assamese, etc.
   - Helps with search and filtering

5. **Visibility Toggle**
   - Private (default): Only creator sees it
   - Public: Anyone can discover, like, comment
   - Can be changed after creation

**Validation:**
- Name and Lyrics required
- Lyrics minimum 50 characters
- Duplicate check (warn if similar exists)

**Preview:**
- Shows formatted hymn before saving
- Displays exactly as it will appear
- Check line breaks and structure

**Save Process:**
- Validates input
- Saves to database
- Toast: "Hymn created successfully"
- Navigate to hymn detail screen

#### 3.5 My Hymns Management
**My Hymns Screen:**
- List of user's created hymns
- Filter: All / Private / Public
- Sort: Recent, Title, Number
- Search within my hymns

**Hymn Cards:**
- Hymn number + title
- Visibility badge (Private/Public)
- Created date
- Action buttons:
  - Edit
  - Delete
  - Share
  - View (opens detail)

**Edit Hymn:**
- Same form as create
- Pre-filled with existing data
- Can change visibility
- Update button
- Confirmation: "Changes saved"

**Delete Hymn:**
- Confirmation dialog: "Are you sure?"
- Warning: "This cannot be undone"
- Buttons: Cancel / Delete
- On delete: Remove from database
- Toast: "Hymn deleted"

**Change Visibility:**
- Toggle switch on hymn detail
- Private → Public: Becomes discoverable
- Public → Private: Hidden from others
- Confirmation required for public

#### 3.6 Public Hymns Discovery
**Public Hymns Feed:**
- Discover user-created public hymns
- Sort options:
  - Trending (most likes recent)
  - Most Popular (all-time likes)
  - Recent (newest first)
  - Random discovery

**Hymn Cards (Public):**
- Title and number
- Creator name (partial: "By John D.")
- Language badge
- Like count ❤️ 245
- Comment count 💬 12
- Favorite count ⭐ 89
- Thumbnail or first line preview

**Hymn Detail (Public):**
- Full hymn display
- Creator attribution
- Social actions row:
  - Like button (heart, toggle)
  - Favorite button (star, save)
  - Share button
  - Comment button (scroll to comments)
- Comments section below

#### 3.7 Social Features (Public Hymns Only)

**Like System:**
- Tap heart icon to like
- Like count visible
- User can unlike
- Instant update
- Sync to server

**Favorite System:**
- Save public hymns to favorites
- Different from Like (bookmark vs. appreciation)
- Access from Profile → Favorite Hymns
- Cross-device sync

**Comment System:**
- Available on public hymns
- Comment input at bottom
- Max 500 characters
- User avatar + name shown
- Timestamp
- Edit own comments (5 min window)
- Delete own comments
- Report inappropriate comments

**Comment Display:**
- Nested comments (future)
- Sort: Newest / Oldest
- Load more (pagination)
- Empty state: "Be the first to comment"

**Moderation:**
- Users can report hymns/comments
- Report reasons:
  - Inappropriate content
  - Spam
  - Copyright violation
  - Offensive language
  - Other
- Admin reviews reports
- Actions: Hide, Delete, Warn user

#### 3.8 Hymn Search System
**Search Bar:**
- Always visible at top
- Placeholder: "Search hymns by name, number, or lyrics"
- Instant search (debounced)

**Search Scope:**
- Official hymns
- My hymns
- Public hymns
- Configurable via filter

**Search Criteria:**
- Hymn name/title
- Hymn number
- Lyrics content (full-text)
- Language
- Category

**Advanced Filters:**
```
┌─────────────────────────┐
│ Filters                 │
├─────────────────────────┤
│ Type:                   │
│ ☑ Official Hymns        │
│ ☑ My Hymns              │
│ ☑ Public Hymns          │
│                         │
│ Language:               │
│ ☐ English               │
│ ☐ Hindi                 │
│ ☐ Assamese              │
│ ☐ All Languages         │
│                         │
│ Category:               │
│ [Dropdown: All ▼]       │
│                         │
│ [Clear] [Apply]         │
└─────────────────────────┘
```

**Search Results:**
- Grouped by type (Official / My / Public)
- Highlight matching terms
- Show hymn number + title
- Language badge
- Tap to open hymn detail

**Recent Searches:**
- Store last 10 searches
- Quick access below search bar
- Clear all option

**Empty State:**
- "No hymns found"
- Suggestions:
  - Check spelling
  - Try different keywords
  - Adjust filters
  - Create your own hymn

#### 3.9 Hymn Categories Browse
**Category Grid View:**
- 2 columns on mobile
- Each category card:
  - Category name
  - Icon or background image
  - Hymn count
  - Glassmorphism design

**Category Detail:**
- Category header with description
- List of hymns in category
- Sort options
- Filter language within category
- Breadcrumb navigation

#### 3.10 Hymn Sharing
**Share Features:**
- Generate beautiful hymn image
- Background: Crystal white with ice blue gradient
- Text: Title, Lyrics (formatted), Language
- Footer: "- Hymnora" branding

**Share Options:**
- Share image (PNG)
- Share text (plain text)
- Copy lyrics to clipboard
- Share link (deep link to hymn)

**Share Destinations:**
- WhatsApp
- Facebook
- Instagram Story
- Twitter
- Email
- SMS
- More...

### Technical Requirements

**Database:**
- Efficient hymn storage
- Full-text search index on lyrics
- Category relationships
- Like/Favorite tracking
- Comment storage

**Performance:**
- Virtual scrolling for long hymn lists
- Image generation on-demand (cached)
- Lazy load comments
- Optimize search queries

**Sync:**
- Sync user hymns across devices
- Sync favorites
- Real-time like/comment counts
- Conflict resolution

**Security:**
- Rate limiting on hymn creation (max 20/day)
- Content moderation queue
- Prevent spam comments
- User blocking (future)

### Success Metrics
- Official hymn views
- User hymn creation rate
- Public hymn engagement (likes, comments)
- Search usage
- Social feature adoption
- Category usage distribution

---

## 4. ASK BIBLE AI TAB - Biblical Q&A Assistant (PREMIUM)

### Purpose
AI-powered assistant providing biblical answers, explanations, and guidance grounded in Scripture.

### Key Features

#### 4.1 Chat Interface
**Design:**
- WhatsApp-style chat UI
- User messages: Right-aligned, ice blue bubble
- AI messages: Left-aligned, white glass bubble
- Avatar icons for user and AI
- Timestamp on messages
- Smooth scrolling
- Auto-scroll to latest message

**Input Section:**
- Text input field at bottom
- Microphone icon (future voice input)
- Image upload icon
- PDF upload icon
- Send button (paper plane icon)
- Character counter (3000 max)

**Message States:**
- Sending (loading indicator)
- Sent (checkmark)
- Error (red exclamation, retry option)

#### 4.2 Welcome Experience (First Time)
**Welcome Message:**
```
👋 Hello! I'm your Bible AI assistant.

I can help you:
• Understand Bible verses
• Answer biblical questions
• Explain Christian concepts
• Provide scriptural guidance

All my answers are grounded in Scripture.

What would you like to know?
```

**Suggested Questions (Pills):**
- "What does the Bible say about love?"
- "Explain John 3:16"
- "Who was Paul?"
- "What is grace?"
- "Tell me about prayer"
- "What happens after death?"

**Quick Topics:**
- Love & Relationships
- Prayer & Faith
- Salvation & Grace
- Wisdom & Guidance
- Heaven & Eternity
- Sin & Forgiveness

#### 4.3 Answer Modes
**User Selects Mode Before Asking:**

**1. Simple Answer**
- Concise response (100-300 words)
- Easy to understand
- Key Bible verses cited
- Quick read
- Best for: Quick questions, basic understanding

**2. Detailed Answer**
- Comprehensive response (500-1500 words)
- In-depth explanation
- Multiple Bible references
- Context and nuances
- Different interpretations mentioned
- Best for: Deep study, complex topics

**Mode Selector:**
- Toggle above input field
- Icons: Simple (⚡) / Detailed (📖)
- Selected mode shown in pill format
- Persists across session

#### 4.4 AI Response Format
**Answer Structure:**

```
[AI Response]
Based on Scripture, [biblical answer]...

📖 Bible References:
• John 3:16 - "For God so loved..."
• Romans 8:28 - "And we know that..."
• 1 Corinthians 13:4-7 - "Love is patient..."

[Additional explanation if detailed mode]

Note: The Bible doesn't directly address [specific modern context], but biblical principles suggest [inference].
```

**Key Rules:**
1. **Always cite Scripture:** Every claim backed by verse
2. **Distinguish facts from interpretation:** Clearly label
3. **Never invent:** If Bible doesn't say, state clearly
4. **Show humility:** Acknowledge theological differences
5. **Stay biblical:** Focus on Scripture, not human wisdom

**Example Response (Simple Mode):**
```
Question: What does the Bible say about worry?

AI: The Bible tells us not to worry. Jesus said in Matthew 6:25-27, "Do not worry about your life..." He explained that God cares for the birds and flowers, and we are more valuable to Him.

📖 Key Verses:
• Matthew 6:25-34 - Jesus teaches about worry
• Philippians 4:6-7 - "Do not be anxious..."
• 1 Peter 5:7 - "Cast all your anxiety on Him"

God wants us to trust Him with our concerns rather than worrying.
```

**Example Response (Detailed Mode):**
```
[Much longer, includes historical context, Greek/Hebrew word meanings, different Christian interpretations, practical application, related passages, etc.]
```

#### 4.5 Bible References (Interactive)
**In AI Messages:**
- Bible references are highlighted in ice blue
- Format: "Book Chapter:Verse"
- Underlined or in pill format
- Tap to interact

**Tap Bible Reference:**
- Bottom sheet preview appears
- Shows:
  - Verse text
  - Reference
  - Translation used
- Actions:
  - "Open in Bible Reader"
  - "Copy Verse"
  - "Close"

**Reference Linking:**
- Automatically parse references in AI response
- Create clickable links
- Format validation (Book Chapter:Verse)

#### 4.6 Voice Output (AI Voice)
**Purpose:** Listen to AI answers

**Voice Button:**
- Speaker icon on each AI message
- Tap to play audio version
- Loading state while generating

**Voice Player:**
- Mini audio player appears
- Play/Pause toggle
- Progress bar
- Speed control (0.75x, 1x, 1.25x, 1.5x)
- Close button

**Voice Settings:**
```
┌─────────────────────────┐
│ Voice Settings          │
├─────────────────────────┤
│ Voice:                  │
│ ○ Male 1 (Deep)         │
│ ● Male 2 (Warm)         │
│ ○ Female 1 (Clear)      │
│ ○ Female 2 (Soft)       │
│                         │
│ Language:               │
│ ● Auto-detect           │
│ ○ English               │
│ ○ Hindi                 │
│ ○ Assamese              │
│                         │
│ Default Speed:          │
│ [●────────] 1.0x        │
│                         │
│ [Save Settings]         │
└─────────────────────────┘
```

**Voice Generation:**
- Use ElevenLabs or Google TTS
- Generate on-demand
- Cache generated audio
- Stream for long answers

#### 4.7 Image & PDF Upload
**Purpose:** Ask questions about biblical content in images/PDFs

**Upload Options:**
1. **Take Photo:** Camera capture
2. **Choose from Gallery:** Image picker
3. **Browse Files:** PDF selector

**Supported Formats:**
- Images: JPG, PNG (max 5MB)
- PDF: Max 10 pages, 10MB

**Use Cases:**
- Photo of Bible page
- Screenshot of verse
- Sermon notes (handwritten/typed)
- Christian book page
- Study guide page

**Upload Flow:**
1. User taps upload icon
2. Selects image/PDF
3. Preview shows with "Analyzing..." message
4. Input field: "Ask a question about this content"
5. User types question
6. Sends question + image/PDF
7. AI analyzes and responds

**AI Analysis:**
- OCR to extract text
- Identify biblical references
- Understand context
- Answer based on extracted content + Bible

**AI Response Format:**
```
I can see [description of content].

Based on this material:
[What the uploaded content says]

What the Bible says:
[Biblical answer with references]

Analysis:
[Comparison, interpretation, biblical alignment]
```

#### 4.8 Chat History & Sessions
**Auto-Save:**
- Every conversation automatically saved
- Creates new session per conversation
- Title auto-generated from first question

**Chat History Screen:**
```
┌─────────────────────────────┐
│ Chat History     [Search🔍] │
├─────────────────────────────┤
│ 📌 Saved Chats              │
│                             │
│ [⭐] Understanding Grace    │
│      2 days ago • 8 messages│
│                             │
│ [⭐] Prayer Questions       │
│      1 week ago • 5 messages│
│                             │
│ ───────────────────────     │
│ Recent Chats                │
│                             │
│ What is love?               │
│ Today • 3 messages          │
│                             │
│ Bible study help            │
│ Yesterday • 12 messages     │
│                             │
│ Explain John 3:16           │
│ 3 days ago • 2 messages     │
└─────────────────────────────┘
```

**Chat Session Actions:**
- **Save:** Pin important conversations
- **Rename:** Edit session title
- **Delete:** Remove session
- **Resume:** Continue conversation
- **Share:** Export conversation (text/PDF)

**Search History:**
- Search by keyword
- Search in questions or answers
- Highlight matching terms
- Filter by date range

#### 4.9 AI Settings & Preferences
**Settings Options:**
```
Default Answer Mode: Simple / Detailed
Default Voice: Male 1
Auto-play Voice: ON / OFF
Language Preference: Auto-detect
Show Bible References: Inline / End of answer
Save Chat History: ON / OFF
Clear History Button
```

#### 4.10 AI Limitations & Guidelines
**Displayed to User:**
```
📌 How I Work:
• I provide answers based on the Bible
• I cite Scripture for every claim
• I distinguish Bible facts from interpretation
• I acknowledge when the Bible doesn't directly address something
• I respect different Christian denominations

❌ I Cannot:
• Make up biblical information
• Provide medical or legal advice
• Predict the future
• Interpret dreams specifically
• Replace pastoral counseling
```

**AI Prompt Engineering (Backend):**
```
You are a biblical AI assistant for Hymnora, a Christian faith app.

Rules:
1. ALWAYS cite Bible verses for claims
2. If the Bible doesn't say something, state clearly: "The Bible doesn't directly address this"
3. Distinguish between biblical text and interpretation
4. Acknowledge different Christian viewpoints when relevant
5. Keep simple answers 100-300 words, detailed 500-1500 words
6. Format Bible references as clickable: Book Chapter:Verse
7. Be respectful, humble, and Christ-centered
8. Never invent biblical content
9. Focus on Scripture, not human philosophy
10. Provide hope and encouragement through God's Word

User question: {question}
Answer mode: {simple/detailed}
```

### Technical Requirements

**AI Integration:**
- OpenAI GPT-4 or Anthropic Claude
- Streaming responses for better UX
- Token usage tracking
- Cost per query monitoring
- Rate limiting (50 queries/day per user)

**Image Processing:**
- OCR via Google Vision API or Tesseract
- PDF text extraction
- Image compression before upload
- Server-side processing

**Voice Generation:**
- ElevenLabs for premium voices
- Google TTS as fallback
- Stream audio for long responses
- Cache generated audio

**Chat Storage:**
- Store all messages
- Compress old sessions
- User privacy controls
- Delete option

**Performance:**
- Stream AI responses (word-by-word)
- Show typing indicator
- Retry failed requests
- Offline queue (send when online)

### Success Metrics
- Daily AI queries
- Average queries per user
- Answer satisfaction (optional feedback)
- Voice playback usage
- Image/PDF upload usage
- Chat history revisit rate
- Token usage and cost efficiency

---

## 5. CHRISTIAN BOOKS TAB - Digital Library (PREMIUM)

### Purpose
Premium eBook-style reader for Christian books with categories, bookmarks, highlights, notes, and reading progress tracking.

### Key Features

#### 5.1 Book Library Home
**Layout:**
- Search bar at top
- Category pills (horizontal scroll)
- Continue Reading section (if books in progress)
- Featured Books section
- All Books grid

**Continue Reading:**
- Shows books with reading progress
- Book card displays:
  - Cover image
  - Title and author
  - Progress bar (X% complete)
  - "Continue" button
- Sort by most recent

**Book Grid:**
- 2 columns on mobile
- 3-4 columns on tablet
- Each book card:
  - Cover image (3:4 ratio)
  - Title (1-2 lines)
  - Author name
  - Category badge
  - Download status icon (if downloaded)

#### 5.2 Book Categories
**Default Categories:**
- Bible Study
- Christian Life
- Theology
- Devotional
- Prayer
- Apologetics
- Church History
- Evangelism
- Family & Marriage
- Youth & Young Adults
- Women's Ministry
- Men's Ministry
- Leadership
- Spiritual Growth

**Category Screen:**
- Grid of category cards
- Each card:
  - Category name
  - Icon/Image
  - Book count
  - Description (on tap)

**Category Books View:**
- Books filtered by category
- Sort options:
  - Popular
  - Newest
  - Title A-Z
  - Author A-Z

#### 5.3 Book Detail Screen
**Layout:**
```
┌─────────────────────────┐
│    [Cover Image]        │
│      (Large)            │
│                         │
│  Book Title             │
│  by Author Name         │
│                         │
│  [Category Badge]       │
│                         │
│  Description:           │
│  [Expandable text...]   │
│                         │
│  📖 Total Pages: 245    │
│  ⏱️ Est. Read: 4h 20m   │
│                         │
│  [Start Reading] (if new)│
│  [Continue (65%)] (if started)│
│  [⬇ Download] [Share]  │
│                         │
│  Table of Contents      │
│  ▼ Chapters             │
│     1. Introduction     │
│     2. Chapter One      │
│     ...                 │
│                         │
│  Similar Books          │
│  [Book] [Book] [Book]   │
└─────────────────────────┘
```

**Book Information:**
- Cover image (high resolution)
- Title (large, bold)
- Author name
- Publisher (optional)
- Category badge
- Description (expandable)
- Total pages
- Estimated reading time
- Publication year (optional)

**Actions:**
- Start Reading (primary button)
- Continue Reading (if progress exists)
- Download for Offline
- Share book

**Table of Contents:**
- Collapsible section
- List of chapters
- Tap chapter → Jump to that chapter
- Show page numbers

#### 5.4 Book Reader Interface
**Design Philosophy:**
- Premium eBook reader
- NOT a basic PDF viewer
- Formatted text, not images
- Adjustable typography
- Smooth page transitions

**Reader Layout:**
```
┌────────────────────────┐
│ [←] Book Title    [≡]  │ ← Header
├────────────────────────┤
│                        │
│  Chapter Title         │
│                        │
│  Book content text     │
│  flows naturally       │
│  with proper           │
│  formatting and        │
│  comfortable line      │
│  spacing.              │
│                        │
│  Paragraphs are        │
│  well spaced.          │
│                        │
│                        │
│  [More content...]     │
│                        │
├────────────────────────┤
│  Page 45 of 245  ─────●│ ← Footer
└────────────────────────┘
```

**Header (Tap to Toggle):**
- Back button
- Book title
- Chapter selector dropdown
- More menu (...)
  - Table of Contents
  - Bookmarks
  - Highlights
  - Notes
  - Reading Settings
  - About Book

**Reading Area:**
- Formatted text (not PDF images)
- Proper paragraphs
- Headings styled
- Quotes indented
- Footnotes linked

**Footer (Tap to Toggle):**
- Current page / Total pages
- Progress bar slider
- Navigate by dragging slider

**Page Navigation:**
- Swipe left: Next page
- Swipe right: Previous page
- Tap left edge: Previous
- Tap right edge: Next
- Page-turning animation

**Reading Modes:**
- Scroll mode (continuous scroll)
- Page mode (paginated)
- User preference

#### 5.5 Text Selection & Actions
**Select Text:**
- Long press to select
- Drag handles to adjust selection
- Selection highlight in ice blue

**Selection Actions:**
```
┌─────────────────────┐
│ [Highlight]         │
│ [Add Note]          │
│ [Copy]              │
│ [Share]             │
└─────────────────────┘
```

**Highlight:**
- Color picker (Yellow, Green, Blue, Pink, Purple)
- Instantly highlights text
- Stores in database with page/position

**Add Note:**
- Opens note modal
- Textarea for note content
- Attaches to selected text
- Shows note icon in margin

**Copy:**
- Copies to clipboard
- Toast: "Text copied"

**Share:**
- Share selected text + book attribution
- Format: "{Text}" - {Book Title} by {Author}

#### 5.6 Book Highlights System
**Highlight Display:**
- Highlighted text shown with background color
- Tap highlight → Edit/Delete options
- Multiple highlights per page

**Highlights List:**
```
┌────────────────────────────┐
│ Book Highlights [Filter🎨] │
├────────────────────────────┤
│ "Faith is taking the       │
│ first step..."             │
│                            │
│ Chapter 3, Page 45         │
│ [🟨 Yellow] [Edit] [Delete]│
│ ────────────────────────   │
│ "Prayer is not asking.     │
│ It is a longing..."        │
│                            │
│ Chapter 5, Page 78         │
│ [🟩 Green] [Edit] [Delete] │
└────────────────────────────┘
```

**Highlight Features:**
- View all highlights for book
- Filter by color
- Sort by page order or date
- Tap highlight → Jump to that page
- Edit highlight (change color)
- Delete highlight
- Export highlights (CSV/PDF)

#### 5.7 Book Notes System
**Create Note:**
- Can attach to selected text or standalone
- Rich text support (future)
- Page number auto-saved
- Timestamp

**Note Display:**
- Small note icon (📝) in margin
- Tap to view/edit note
- Note card slides from side

**Notes List:**
```
┌─────────────────────────┐
│ Book Notes  [Search🔍]  │
├─────────────────────────┤
│ 📝 "Great insight about  │
│     faith and works"     │
│                         │
│ Chapter 2, Page 34      │
│ 2 days ago              │
│ [Edit] [Delete]         │
│ ───────────────────     │
│ 📝 "Remember this quote"│
│                         │
│ Chapter 4, Page 56      │
│ 1 week ago              │
│ [Edit] [Delete]         │
└─────────────────────────┘
```

**Note Features:**
- View all notes for book
- Search notes by content
- Sort by page/date
- Tap note → Jump to page
- Edit note
- Delete note
- Export notes

#### 5.8 Book Bookmarks
**Create Bookmark:**
- Bookmark button in header
- Adds current page to bookmarks
- Can add optional note to bookmark

**Bookmarks List:**
```
┌─────────────────────────┐
│ Bookmarks               │
├─────────────────────────┤
│ 📑 Chapter 3: Faith     │
│    "Important section"  │
│    Page 45              │
│    [Go] [Delete]        │
│ ───────────────────     │
│ 📑 Chapter 7: Hope      │
│    Page 102             │
│    [Go] [Delete]        │
└─────────────────────────┘
```

#### 5.9 Reading Progress Tracking
**Auto-Save Progress:**
- Saves current page on exit
- Syncs across devices
- Shows progress percentage

**Reading Stats:**
- Pages read today
- Total pages read
- Books completed
- Reading time estimate
- Reading streak

**Progress Display:**
- Book detail: Progress bar
- Book card: X% complete
- Reader footer: Page X of Y

#### 5.10 Reading Settings
**Appearance Settings:**
```
┌─────────────────────────┐
│ Reading Settings        │
├─────────────────────────┤
│ Font Size:              │
│ [─●─────] 16px          │
│                         │
│ Font Family:            │
│ ● Serif (Lora)          │
│ ○ Sans-Serif (Inter)    │
│                         │
│ Line Spacing:           │
│ ○ Compact (1.4)         │
│ ● Normal (1.6)          │
│ ○ Relaxed (1.8)         │
│                         │
│ Text Alignment:         │
│ ● Left                  │
│ ○ Justified             │
│                         │
│ Background:             │
│ ● White [⚪]            │
│ ○ Sepia [🟡]            │
│ ○ Dark [⚫]             │
│                         │
│ Brightness:             │
│ [──●────] 80%           │
│                         │
│ [Reset to Default]      │
└─────────────────────────┘
```

**Settings Persistence:**
- Save per-book preferences
- Global default settings
- Instant preview when changing

#### 5.11 Offline Download
**Download Books:**
- Download button on book detail
- Shows download progress
- Downloaded icon on book card
- Access downloads even offline

**Downloads Management:**
```
┌─────────────────────────┐
│ Downloaded Books        │
├─────────────────────────┤
│ [Book Cover]            │
│ Book Title              │
│ 📥 12.5 MB             │
│ [Remove Download]       │
│ ───────────────────     │
│ [Book Cover]            │
│ Another Book            │
│ 📥 8.2 MB              │
│ [Remove Download]       │
│ ───────────────────     │
│ Total: 20.7 MB          │
│ [Remove All]            │
└─────────────────────────┘
```

**Storage Management:**
- View total storage used
- Remove individual downloads
- Remove all downloads
- Auto-delete old downloads (setting)

#### 5.12 Book Search
**Search Books:**
- Search bar at top of Books home
- Search by:
  - Book title
  - Author name
  - Category
  - Description keywords

**Advanced Filters:**
- Category
- Author
- Length (Short/Medium/Long)
- Recently Added

**Search Results:**
- Book cards matching criteria
- Highlight matching terms
- Filter and sort options

### Technical Requirements

**Book Format:**
- Store books as structured text (JSON/database)
- NOT raw PDFs (unless converting)
- Chapter/section structure
- Proper formatting preserved

**PDF Conversion:**
- Admin uploads PDF
- Backend extracts text (OCR if needed)
- Parse into chapters/sections
- Generate table of contents
- Store structured data

**Performance:**
- Lazy load book content
- Paginate long books
- Cache current chapter
- Smooth scrolling
- Fast page turning

**Sync:**
- Sync progress across devices
- Sync highlights and notes
- Conflict resolution
- Background sync

**Storage:**
- Compress book data
- Efficient highlight storage
- Optimize images

### Success Metrics
- Books downloaded
- Reading completion rate
- Average pages per session
- Highlights and notes usage
- Bookmarks usage
- Reading streak

---

## 6. PROFILE TAB - User Account & Settings

### Purpose
User account management, activity overview, subscription management, and app settings.

### Key Features

#### 6.1 Profile Header
**Display:**
```
┌──────────────────────────┐
│      [Profile Photo]     │
│        (Large circle)    │
│                          │
│     John Doe             │
│   john.doe@email.com     │
│                          │
│  [Premium ⭐] Badge      │
│  Active until Dec 2024   │
│                          │
│    [Edit Profile]        │
└──────────────────────────┘
```

**Elements:**
- Profile photo (tap to change)
- Full name
- Email or phone number
- Subscription badge
- Edit Profile button

**Subscription Badges:**
- Free: No badge or "Free Plan"
- Premium Monthly: "Premium ⭐"
- Premium Yearly: "Premium ⭐ (Yearly)"
- Family: "Family Premium 👨‍👩‍👧‍👦"
- Trial: "Premium Trial 🎉"

#### 6.2 Activity Section
**Quick Stats Cards:**
```
┌─────────────────────────┐
│ My Activity             │
├─────────────────────────┤
│ [📖] My Hymns           │
│      12 hymns      →    │
│ ─────────────────────   │
│ [❤️] Saved Hymns        │
│      45 saved      →    │
│ ─────────────────────   │
│ [📑] Bible Bookmarks    │
│      28 bookmarks  →    │
│ ─────────────────────   │
│ [🎨] Highlights         │
│      67 verses     →    │ (Premium)
│ ─────────────────────   │
│ [📝] Bible Notes        │
│      15 notes      →    │ (Premium)
│ ─────────────────────   │
│ [📚] Reading History    │
│      View stats    →    │
│ ─────────────────────   │
│ [💬] AI Chat History    │
│      23 chats      →    │ (Premium)
└─────────────────────────┘
```

**Each Activity Item:**
- Icon
- Label
- Count/Status
- Chevron (navigate)
- Premium lock if needed

#### 6.3 Subscription Management
**Current Plan Card:**
```
┌────────────────────────────┐
│ Subscription               │
├────────────────────────────┤
│ Current Plan:              │
│ ⭐ Premium Monthly          │
│                            │
│ Status: Active             │
│ Next billing: Dec 15, 2024 │
│ Amount: ₹99/month          │
│                            │
│ Auto-renew: [ON/OFF]       │
│                            │
│ [Manage Subscription]      │
└────────────────────────────┘
```

**Free User:**
```
┌────────────────────────────┐
│ Subscription               │
├────────────────────────────┤
│ Current Plan: Free         │
│                            │
│ Unlock Premium Features:   │
│ ✓ Bible Audio              │
│ ✓ Ask Bible AI             │
│ ✓ Christian Books          │
│ ✓ Highlights & Notes       │
│ ✓ And more...              │
│                            │
│ [Upgrade to Premium]       │
└────────────────────────────┘
```

**Manage Subscription:**
- View plan details
- Change plan (upgrade/downgrade)
- Update payment method
- View payment history
- Auto-renew toggle
- Cancel subscription
- Family plan management (if applicable)

#### 6.4 Settings Section
**Settings Menu:**
```
┌─────────────────────────┐
│ Settings                │
├─────────────────────────┤
│ [👤] Account            │
│ [🌐] App Language       │
│ [🎨] Appearance         │
│ [🔔] Notifications      │
│ [📖] Bible Settings     │
│ [🔊] Audio Settings     │
│ [🔒] Privacy & Security │
│ [❓] Help & Support     │
│ [ℹ️] About Hymnora      │
└─────────────────────────┘
```

**Account Settings:**
- Email/Phone
- Change password
- Linked accounts (Google)
- Delete account

**App Language:**
- English
- हिंदी (Hindi)
- অসমীয়া (Assamese)
- Auto-detect system language

**Appearance:**
- Theme (Light/Dark/System)
- Reduced motion toggle
- Font size preference

**Notifications:**
- Push notifications master toggle
- Verse of the Day (ON/OFF + time picker)
- App updates (ON/OFF)
- Email notifications (ON/OFF)

**Bible Settings:**
- Default translation
- Font size
- Reading preferences
- Chapter navigation style

**Audio Settings:**
- Preferred voice
- Default playback speed
- Download quality
- Auto-delete after X days

**Privacy & Security:**
- Privacy policy
- Terms of service
- Data management
  - Download my data
  - Delete my data
- Security
  - Change password
  - Login history
  - Active sessions

**Help & Support:**
- FAQs
- Contact support (email)
- Report a problem
- Feature requests

**About Hymnora:**
- App version
- What's new (changelog)
- About the app
- Development team
- Credits
- Social links

#### 6.5 Logout
**Logout Button:**
- Red text button at bottom
- Confirmation dialog:
  ```
  ┌────────────────────────┐
  │ Logout                 │
  ├────────────────────────┤
  │ Are you sure you want  │
  │ to logout?             │
  │                        │
  │ [Cancel] [Logout]      │
  └────────────────────────┘
  ```
- On logout:
  - Clear auth token
  - Clear sensitive data
  - Navigate to login screen

### Technical Requirements

**Data Privacy:**
- Secure password storage
- Encrypted sensitive data
- GDPR compliance
- Data export feature
- Data deletion feature

**Sync:**
- Profile sync across devices
- Settings sync
- Activity counts cached

**Performance:**
- Load profile data on tab visit
- Cache user stats
- Lazy load activity lists

### Success Metrics
- Profile completion rate
- Settings customization usage
- Premium upgrade from profile
- Support ticket resolution
- Account retention rate

---

## Cross-Cutting Features

### Premium Feature Gating
**Implementation:**
- Check user subscription status
- Show lock icon on premium features
- Intercept tap on locked feature
- Show premium upgrade screen
- Track conversion rate

**Premium Screen Design:**
```
┌───────────────────────────────┐
│        [Crown Icon]           │
│                               │
│    Hymnora Premium            │
│  "Go deeper. Listen. Learn."  │
│                               │
│ ✓ Full Hymn Library          │
│ ✓ Bible Audio                │
│ ✓ Bible Highlights & Notes   │
│ ✓ Detailed Bible Context     │
│ ✓ Ask Bible AI               │
│ ✓ Christian Books            │
│                               │
│ 🎉 7-Day Free Trial          │
│                               │
│ Monthly: ₹99/month           │
│ Yearly: ₹999/year (Save 17%)│
│ Family: ₹1499/year (6 users) │
│                               │
│   [Start Free Trial]          │
│                               │
│   [Maybe Later]               │
└───────────────────────────────┘
```

### Notifications
**Daily Verse Notification:**
- Send at user-preferred time (default 8 AM)
- Title: "Your Daily Verse"
- Body: Verse preview
- Tap → Open Verse of the Day

**App Update Notification:**
- New features available
- Important updates
- Tap → App Store or What's New screen

### Search
**Global Search:**
- Available from top bar
- Search across:
  - Bible verses
  - Hymns
  - Books (Premium)
  - AI chat history (Premium)
- Instant results
- Grouped by type

### Sharing
**Universal Share Format:**
- Generate beautiful images
- Crystal white background
- Ice blue accents
- Include content + attribution
- "- Hymnora" branding

---

## Summary

This comprehensive feature specification document covers all 6 main sections of Hymnora with detailed requirements, user flows, technical considerations, and success metrics. Each feature is designed to provide a premium, peaceful, and spiritually enriching experience while maintaining the crystal-clear design aesthetic.

**Key Principles:**
1. **Premium Quality:** Every feature polished and refined
2. **Biblical Foundation:** Scripture at the center
3. **User Privacy:** Respect user data and choices
4. **Accessibility:** Usable by all age groups
5. **Performance:** Fast, smooth, responsive
6. **Offline Support:** Core features work offline
7. **Cross-Platform:** Consistent experience across devices
