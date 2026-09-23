# HYMNORA - Complete Screen Hierarchy & Navigation Flow

## Navigation Architecture

### App Structure Overview

```
HYMNORA
├── Onboarding Flow (First Launch)
├── Authentication Flow
├── Main App (Authenticated)
│   ├── Bottom Navigation (6 Tabs)
│   │   ├── Home
│   │   ├── Bible
│   │   ├── Hymns
│   │   ├── AI (Premium)
│   │   ├── Books (Premium)
│   │   └── Profile
│   └── Cross-Cutting Features
│       ├── Search
│       ├── Notifications
│       └── Settings
└── Admin Panel (Web)
```

---

## Complete Screen Map

### 1. ONBOARDING FLOW (First Launch Only)

```
Launch Screen
└── Splash Screen (Hymnora Logo + Crystal Cross)
    └── Onboarding Carousel
        ├── Screen 1: Welcome to Hymnora
        ├── Screen 2: Read the Word
        ├── Screen 3: Worship Through Hymns
        ├── Screen 4: Listen Anywhere
        ├── Screen 5: Understand Scripture
        ├── Screen 6: Ask Bible AI
        └── Screen 7: Get Started
            ├── Create Account
            ├── Sign In
            └── Continue as Guest
```

#### Screen Details:

**Splash Screen**
- Duration: 2 seconds
- Hymnora logo with crystal cross symbol
- Smooth fade transition to onboarding

**Onboarding Screens (1-6)**
- Full-screen 3D crystal illustrations
- Minimal text (heading + subheading)
- Smooth horizontal swipe transitions
- Skip button (top-right)
- Progress dots at bottom
- "Next" button

**Get Started Screen (7)**
- Large "Welcome to Hymnora" heading
- Three action buttons:
  - Sign up with Google (glass button with Google icon)
  - Sign up with Email (glass button)
  - Sign up with Phone (glass button)
  - Divider line
  - "Continue as Guest" (text button)
  - "Already have an account? Sign In" (text link)

---

### 2. AUTHENTICATION FLOW

```
Authentication
├── Sign Up
│   ├── Email Sign Up
│   │   ├── Enter Email
│   │   ├── Enter Password
│   │   ├── Enter Full Name
│   │   └── Success → Premium Trial Offer
│   ├── Phone Sign Up
│   │   ├── Enter Phone Number
│   │   ├── Enter OTP
│   │   ├── Enter Full Name
│   │   └── Success → Premium Trial Offer
│   └── Google Sign Up
│       └── Success → Premium Trial Offer
├── Sign In
│   ├── Email Sign In
│   │   ├── Enter Email
│   │   ├── Enter Password
│   │   └── Success → Home
│   ├── Phone Sign In
│   │   ├── Enter Phone Number
│   │   ├── Enter OTP
│   │   └── Success → Home
│   └── Google Sign In
│       └── Success → Home
├── Forgot Password
│   ├── Enter Email
│   ├── Check Email
│   ├── Reset Password
│   └── Success → Sign In
└── Premium Trial Offer (First-time users only)
    ├── Accept Trial (7 days free)
    └── Skip → Home
```

#### Screen Details:

**Email Sign Up Flow**
- Screen 1: Email input + "Continue" button
- Screen 2: Password input + confirmation + "Continue"
- Screen 3: Full name input + profile photo (optional) + "Create Account"
- Loading state
- Success → Premium Trial Offer

**Phone Sign Up Flow**
- Screen 1: Phone number with country code picker + "Send OTP"
- Screen 2: OTP input (6 digits) + "Verify" + "Resend OTP"
- Screen 3: Full name + profile photo (optional) + "Create Account"
- Success → Premium Trial Offer

**Google Sign Up**
- Google OAuth flow
- Auto-populate name and photo
- Success → Premium Trial Offer

**Premium Trial Offer Screen**
- Crystal card design
- "7 Days Free Premium Trial" heading
- List of premium benefits with checkmarks
- Large "Start Free Trial" button (ice blue gradient)
- "Skip for now" text button
- "No credit card required" caption

---

### 3. HOME TAB

```
Home Dashboard
├── Header Section
│   ├── Hymnora Logo
│   ├── Greeting (Good morning, [Name])
│   ├── Profile Avatar (tap → Profile)
│   └── Notification Bell (tap → Notifications)
├── Continue Bible Reading Card
│   └── Tap → Bible Reader (last position)
├── Verse of the Day Card
│   ├── Verse Text Display
│   ├── Reference
│   ├── Actions Row
│   │   ├── Listen (Premium)
│   │   ├── Bookmark
│   │   ├── Favorite
│   │   ├── Share
│   │   └── Context (Premium)
│   └── Tap Card → Open in Bible Reader
├── Quick Access Section
│   ├── Hymns Card → Hymns Tab
│   ├── Bible Audio Card (Premium) → Audio Player
│   ├── Books Card (Premium) → Books Tab
│   └── Ask AI Card (Premium) → AI Tab
├── Recent Hymns Section
│   ├── Section Header ("Recently Opened Hymns")
│   └── Horizontal Scroll List
│       └── Hymn Cards (tap → Hymn Detail)
├── Favorites & Saved Section
│   ├── Saved Hymns → My Hymns
│   ├── Bible Bookmarks → Bible Bookmarks
│   └── Bible Notes (Premium) → Notes List
└── Settings Quick Link
```

#### Screen Details:

**Home Dashboard**
- Scroll view with vertical sections
- Pull-to-refresh functionality
- Background: Pure white with subtle ice-blue gradient
- All cards use glassmorphism design
- Generous spacing between sections (24px)

**Verse of the Day Card**
- Large premium card (full width, rounded 20px)
- Verse text in Lora serif font (18px)
- Reference in smaller text below
- Action icons row at bottom
- Premium actions show lock icon if not subscribed
- Tap anywhere on card → Opens verse in Bible reader with context

**Quick Access Cards**
- 2x2 grid layout
- Square cards with icons and labels
- Each card shows:
  - 3D glass icon bubble
  - Feature name
  - Short description
  - Premium badge (if applicable)

---

### 4. BIBLE TAB

```
Bible
├── Bible Reader Home
│   ├── Header (Back, Share, Settings)
│   ├── Translation Selector
│   │   └── Tap → Select Translation Screen
│   ├── Continue Reading Card
│   ├── Bible Books Grid
│   │   ├── Old Testament Section
│   │   └── New Testament Section
│   ├── Search Button (floating)
│   └── Reading History (Premium)
├── Select Translation Screen
│   ├── Language Selection
│   └── Translation List (per language)
├── Book Selection Screen
│   ├── Book Grid (Genesis, Exodus, etc.)
│   └── Search Books
├── Chapter Selection Screen
│   ├── Book Name Header
│   ├── Chapter Grid (1, 2, 3, ...)
│   └── Quick Jump Input
├── Bible Reader Screen
│   ├── Header
│   │   ├── Back Button
│   │   ├── Book & Chapter Title
│   │   ├── Search Button
│   │   └── More Menu (•••)
│   ├── Chapter Content
│   │   ├── Verse-by-verse Display
│   │   ├── Verse Numbers (tap to select)
│   │   ├── Highlighted Verses (Premium)
│   │   ├── Bookmarked Verses
│   │   └── Notes Indicators (Premium)
│   ├── Navigation Controls
│   │   ├── Previous Chapter (swipe right)
│   │   ├── Next Chapter (swipe left)
│   │   └── Chapter Selector Button
│   ├── Floating Action Button
│   │   └── Listen (Premium)
│   └── Verse Actions (on verse tap)
│       ├── Verse Action Bottom Sheet
│       │   ├── Bookmark
│       │   ├── Favorite
│       │   ├── Highlight (Premium)
│       │   ├── Add Note (Premium)
│       │   ├── Copy
│       │   ├── Share
│       │   ├── Listen (Premium)
│       │   └── View Context (Premium)
│       └── Verse Context Screen (Premium)
│           ├── Historical Context
│           ├── Cultural Context
│           ├── Literary Context
│           ├── Related Passages
│           └── Visual Explanations
├── Bible Search Screen
│   ├── Search Input
│   ├── Recent Searches
│   ├── Filters (Testament, Book)
│   └── Search Results
│       └── Result Item → Bible Reader (verse highlighted)
├── Bible Bookmarks Screen
│   ├── All Bookmarks List
│   ├── Filter by Book
│   ├── Sort Options
│   └── Bookmark Item → Bible Reader
├── Bible Highlights Screen (Premium)
│   ├── All Highlights List
│   ├── Filter by Color
│   ├── Filter by Book
│   └── Highlight Item → Bible Reader
├── Bible Notes Screen (Premium)
│   ├── All Notes List
│   ├── Search Notes
│   ├── Filter by Book
│   └── Note Item → Bible Reader
├── Reading History Screen (Premium)
│   ├── Recently Read Chapters
│   ├── Reading Streak
│   └── History Item → Bible Reader
└── Bible Settings Screen
    ├── Default Translation
    ├── Font Size
    ├── Font Family
    ├── Line Spacing
    ├── Text Alignment
    └── Theme (Light/Dark/Sepia)
```

#### Screen Details:

**Bible Reader Home**
- Clean, minimal interface
- Large "Select Translation" button at top
- "Continue Reading" card if history exists
- Scrollable grid of all 66 books
- Books organized by Testament
- Each book card shows: Name, Chapters count, Testament

**Select Translation**
- First: Select UI language (English, Hindi, Assamese)
- Then: Select Bible translation for that language
- List of available translations with descriptions
- Radio button selection
- "Save" button

**Bible Reader**
- Full-screen reading experience
- Minimalist header (can be hidden on scroll)
- Verse-by-verse layout with numbers
- Tap verse → Show selection highlight + action sheet
- Swipe left/right for chapter navigation
- Background color based on reading settings
- Serif font (Lora) for Bible text
- Line spacing for comfortable reading

**Verse Action Bottom Sheet**
- Slides up from bottom
- Shows verse reference at top
- Grid of action buttons (2 columns)
- Each action has icon + label
- Premium actions show lock icon
- "Close" button at bottom

**Verse Context Screen (Premium)**
- Full-screen modal
- Tabs for different context types
- Rich formatted content
- Related Bible passages (clickable)
- Visual explanations where applicable
- "Close" button to return to reader

---

### 5. HYMNS TAB

```
Hymns
├── Hymns Home
│   ├── Header (Search, Filter)
│   ├── Search Bar
│   ├── Category Carousel
│   │   ├── All Hymns
│   │   ├── Category 1
│   │   ├── Category 2
│   │   └── ...
│   ├── Official Hymns Section
│   │   ├── Featured Hymns
│   │   └── All Official Hymns
│   ├── My Hymns Section
│   │   ├── My Created Hymns
│   │   └── Add New Hymn Button
│   └── Public Hymns Section
│       └── User-created Public Hymns
├── Hymn Search Screen
│   ├── Search Input
│   ├── Search Filters
│   │   ├── Language
│   │   ├── Category
│   │   ├── Type (Official/My/Public)
│   │   └── Hymn Number
│   ├── Recent Searches
│   └── Search Results
│       └── Hymn Cards
├── Hymn Categories Screen
│   ├── All Categories Grid
│   └── Category Card → Hymns in Category
├── Category Hymns Screen
│   ├── Category Header
│   ├── Hymns List/Grid
│   └── Hymn Card → Hymn Detail
├── Hymn Detail Screen
│   ├── Header
│   │   ├── Back Button
│   │   ├── Share Button
│   │   └── More Menu (•••)
│   ├── Hymn Title
│   ├── Hymn Number
│   ├── Language Badge
│   ├── Category Badge (if official)
│   ├── Lyrics Content
│   │   └── Scrollable, readable format
│   ├── Actions Row (if user owns hymn)
│   │   ├── Edit
│   │   └── Delete
│   ├── Social Actions (if public hymn)
│   │   ├── Like Count + Like Button
│   │   ├── Favorite Button
│   │   ├── Share Button
│   │   └── Comment Count
│   ├── Comments Section (if public)
│   │   ├── Comment List
│   │   └── Add Comment Input
│   └── Similar Hymns Section
├── My Hymns Screen
│   ├── Header (Add New Hymn)
│   ├── My Hymns List
│   ├── Filter (All/Private/Public)
│   └── Hymn Card → Hymn Detail / Edit
├── Create Hymn Screen
│   ├── Form Fields
│   │   ├── Hymn Name *
│   │   ├── Hymn Number
│   │   ├── Lyrics * (Textarea)
│   │   ├── Language * (Dropdown)
│   │   └── Visibility (Private/Public)
│   ├── Preview Button
│   └── Save Button
├── Edit Hymn Screen
│   ├── Same as Create Hymn
│   ├── Pre-filled with existing data
│   ├── Update Button
│   └── Delete Button
├── Public Hymns Screen
│   ├── Filter & Sort Options
│   ├── Trending Hymns
│   ├── Recent Hymns
│   └── Hymn Card → Hymn Detail
└── Favorites Hymns Screen
    ├── All Favorited Hymns
    ├── Filter Options
    └── Hymn Card → Hymn Detail
```

#### Screen Details:

**Hymns Home**
- Search bar at top (always visible)
- Horizontal scrollable category pills
- "Official Hymns" section first (priority)
- "My Hymns" section with "+" button
- "Public Hymns" section below
- Each section shows 5-10 items + "See All" button
- Floating "Add Hymn" button (bottom-right)

**Hymn Detail Screen**
- Clean reading interface
- Hymn title in large bold text
- Hymn number and language as badges
- Lyrics in readable serif font (Lora)
- Proper line breaks and verse structure
- Action buttons at bottom
- If user owns: Edit and Delete buttons
- If public: Like, Favorite, Share buttons
- Comments section for public hymns

**Create/Edit Hymn Screen**
- Form with glassmorphism inputs
- Required fields marked with *
- Hymn Name: Text input
- Hymn Number: Text input (optional)
- Lyrics: Large textarea with line break support
- Language: Dropdown (English, Hindi, Assamese, etc.)
- Visibility: Toggle switch (Private/Public)
- Info text: "Private hymns are only visible to you"
- Preview button shows formatted preview
- Save/Update button (primary button)

**Hymn Search**
- Instant search as you type
- Search by: Name, Number, Lyrics, Language
- Advanced filters in dropdown
- Results grouped by: Official, My Hymns, Public
- Empty state: "No hymns found"

---

### 6. AI TAB (PREMIUM ONLY)

```
Ask Bible AI
├── AI Chat Home
│   ├── Header (Chat History, Settings)
│   ├── Welcome Message (first time)
│   ├── Suggested Questions
│   │   ├── "What does the Bible say about..."
│   │   ├── "Explain the meaning of..."
│   │   └── Quick topic buttons
│   ├── Chat Interface
│   │   ├── Message List
│   │   │   ├── User Messages
│   │   │   └── AI Messages
│   │   │       ├── Text Content
│   │   │       ├── Bible References (clickable)
│   │   │       └── Voice Playback Button
│   │   └── Input Section
│   │       ├── Message Input
│   │       ├── Image Upload Button
│   │       ├── PDF Upload Button
│   │       └── Send Button
│   ├── Answer Mode Selector
│   │   ├── Simple Answer
│   │   └── Detailed Answer
│   └── Voice Settings
│       ├── Voice Selection (Male 1/2, Female 1/2)
│       ├── Language Selection
│       └── Speed Control
├── AI Chat History Screen
│   ├── Search Chats
│   ├── Saved Chats Section
│   ├── Recent Chats Section
│   └── Chat Item → Resume Chat
├── AI Settings Screen
│   ├── Default Answer Mode
│   ├── Default Voice
│   ├── Auto-play Voice Answers
│   ├── Language Preference
│   └── Clear Chat History
├── Image/PDF Upload Screen
│   ├── Camera Option
│   ├── Gallery Option
│   ├── File Browser
│   ├── Preview
│   └── Ask Question Input
└── AI Premium Locked Screen (Free Users)
    ├── Feature Showcase
    ├── Benefits List
    ├── Upgrade to Premium Button
    └── Back Button
```

#### Screen Details:

**AI Chat Home**
- Chat-like interface (WhatsApp style)
- Messages in conversation bubbles
- User messages: Right-aligned, ice blue background
- AI messages: Left-aligned, white glass background
- Bible references in AI messages are blue and clickable
- Tap Bible reference → Opens Bible reader at that verse
- Voice playback button on each AI message
- Input bar at bottom with attachment options
- Mode selector above input (Simple/Detailed toggle)

**AI Message with Bible References**
- Formatted text with inline Bible references
- Example: "According to John 3:16, God loved..."
- "John 3:16" is a clickable pill
- Tap → Bottom sheet preview of verse
- "Open in Bible" button in preview

**Voice Playback**
- Small speaker icon on AI messages
- Tap → Play voice version of answer
- Mini audio player shows:
  - Play/Pause
  - Progress bar
  - Speed control (0.75x, 1x, 1.25x, 1.5x)
  - Current time / Total time

**Image/PDF Upload**
- User can upload Bible page, sermon notes, etc.
- Shows preview of uploaded image/PDF
- Input field: "Ask a question about this content"
- AI analyzes and responds based on content
- Response distinguishes between:
  - What the material says
  - What the Bible says
  - Interpretation/commentary

**Suggested Questions**
- Pill-shaped buttons with common questions
- "What does the Bible say about love?"
- "Explain John 3:16"
- "Who was Paul?"
- "Tell me about prayer"
- Tap → Automatically sends question

---

### 7. BOOKS TAB (PREMIUM ONLY)

```
Christian Books
├── Books Home
│   ├── Header (Search, Filter)
│   ├── Search Bar
│   ├── Category Carousel
│   │   ├── All Books
│   │   ├── Bible Study
│   │   ├── Christian Life
│   │   ├── Prayer
│   │   └── ...
│   ├── Continue Reading Section
│   │   └── Book Cards with Progress
│   ├── Featured Books Section
│   │   └── Curated Books
│   └── All Books Section
│       └── Book Grid
├── Book Categories Screen
│   ├── All Categories Grid
│   └── Category Card → Books in Category
├── Category Books Screen
│   ├── Category Header
│   ├── Books Grid
│   └── Book Card → Book Detail
├── Book Search Screen
│   ├── Search Input
│   ├── Filters (Category, Author)
│   ├── Recent Searches
│   └── Search Results
├── Book Detail Screen
│   ├── Book Cover Image
│   ├── Title & Author
│   ├── Category Badge
│   ├── Description
│   ├── Table of Contents
│   │   └── Chapter List
│   ├── Reading Progress (if started)
│   ├── Action Buttons
│   │   ├── Start Reading / Continue Reading
│   │   ├── Download for Offline
│   │   └── Share
│   └── Similar Books Section
├── Book Reader Screen
│   ├── Header
│   │   ├── Back Button
│   │   ├── Book Title
│   │   ├── Chapter Selector
│   │   ├── Bookmark Button
│   │   └── More Menu (•••)
│   ├── Reading Content
│   │   ├── Chapter Title
│   │   ├── Book Text
│   │   ├── Highlighted Sections
│   │   ├── Bookmarks
│   │   └── Notes Indicators
│   ├── Navigation
│   │   ├── Previous Page (swipe right)
│   │   ├── Next Page (swipe left)
│   │   ├── Page Number
│   │   └── Progress Bar
│   ├── Floating Menu
│   │   └── Reading Settings
│   └── Text Selection Actions
│       ├── Highlight
│       ├── Add Note
│       ├── Copy
│       └── Share
├── Chapter Selection Screen
│   ├── Book Info Header
│   ├── Table of Contents
│   └── Chapter Item → Jump to Chapter
├── Book Reading Settings Screen
│   ├── Font Size
│   ├── Font Family
│   ├── Line Spacing
│   ├── Text Alignment
│   ├── Page Color (White/Sepia/Dark)
│   └── Brightness
├── Book Bookmarks Screen
│   ├── All Bookmarks List
│   ├── Filter by Book
│   └── Bookmark Item → Book Reader
├── Book Highlights Screen
│   ├── All Highlights List
│   ├── Filter by Book/Color
│   └── Highlight Item → Book Reader
├── Book Notes Screen
│   ├── All Notes List
│   ├── Search Notes
│   ├── Filter by Book
│   └── Note Item → Book Reader
└── Books Premium Locked Screen (Free Users)
    ├── Feature Showcase
    ├── Sample Book Covers
    ├── Benefits List
    ├── Upgrade to Premium Button
    └── Back Button
```

#### Screen Details:

**Books Home**
- Grid layout for book covers
- Book cards show:
  - Cover image
  - Title
  - Author
  - Progress bar (if started)
  - Category badge
- "Continue Reading" section at top if user has started books
- Search bar always visible at top
- Category pills for filtering

**Book Detail**
- Large book cover image at top
- Title in large bold text
- Author name below
- Category badge
- Description (expandable if long)
- Table of Contents (collapsible)
- Reading progress if started
- Large "Start Reading" or "Continue Reading" button
- Download button for offline access

**Book Reader**
- Premium book reading interface (NOT basic PDF viewer)
- Looks like an elegant eBook reader
- Page-turning animation (swipe left/right)
- Adjustable font and layout settings
- Tap center → Show/hide controls
- Tap/hold text → Select text → Action menu
- Page number and progress at bottom
- Smooth scrolling or page-turning mode

**Reading Settings**
- Overlay modal from bottom
- Font size slider (small to extra large)
- Font family options (Serif, Sans-serif)
- Line spacing options
- Background color swatches (White, Sepia, Dark)
- Brightness slider
- "Apply" button

---

### 8. PROFILE TAB

```
Profile
├── Profile Home
│   ├── Profile Header
│   │   ├── Profile Photo
│   │   ├── Full Name
│   │   ├── Email/Phone
│   │   └── Edit Profile Button
│   ├── Subscription Section
│   │   ├── Current Plan Badge
│   │   ├── Plan Details
│   │   └── Manage Subscription Button
│   ├── Activity Section
│   │   ├── My Hymns
│   │   ├── Saved Hymns
│   │   ├── Bible Bookmarks
│   │   ├── Bible Highlights (Premium)
│   │   ├── Bible Notes (Premium)
│   │   ├── Reading History
│   │   └── AI Chat History (Premium)
│   ├── Settings Section
│   │   ├── Account Settings
│   │   ├── App Settings
│   │   ├── Notifications
│   │   └── Privacy & Security
│   └── About Section
│       ├── About Hymnora
│       ├── Help & Support
│       ├── Terms of Service
│       ├── Privacy Policy
│       └── Logout
├── Edit Profile Screen
│   ├── Change Photo
│   ├── Full Name
│   ├── Email (if email login)
│   ├── Phone (if phone login)
│   ├── Change Password
│   └── Save Changes Button
├── My Hymns Screen
│   └── (Same as Hymns Tab → My Hymns)
├── Saved Hymns Screen
│   └── All Favorited Hymns
├── Bible Bookmarks Screen
│   └── (Same as Bible Tab → Bookmarks)
├── Bible Highlights Screen (Premium)
│   └── (Same as Bible Tab → Highlights)
├── Bible Notes Screen (Premium)
│   └── (Same as Bible Tab → Notes)
├── Reading History Screen
│   ├── Bible Reading History
│   ├── Books Reading History (Premium)
│   └── Stats (Days read, verses read, etc.)
├── AI Chat History Screen (Premium)
│   └── (Same as AI Tab → Chat History)
├── Subscription Management Screen
│   ├── Current Plan Details
│   │   ├── Plan Type (Free/Monthly/Yearly/Family)
│   │   ├── Status (Active/Trial/Expired)
│   │   ├── Start Date
│   │   ├── Next Billing Date
│   │   └── Amount
│   ├── Change Plan Section
│   │   ├── View All Plans Button
│   │   └── Upgrade/Downgrade Options
│   ├── Payment Method
│   │   ├── Current Payment Method
│   │   └── Update Payment Method
│   ├── Auto-Renew Toggle
│   ├── Payment History Button
│   ├── Cancel Subscription Button
│   └── Family Plan Management (if applicable)
│       ├── Current Members
│       ├── Add Member Button
│       └── Remove Member Options
├── Premium Plans Screen
│   ├── Plan Comparison
│   │   ├── Free Plan
│   │   ├── Monthly Premium
│   │   ├── Yearly Premium (Best Value)
│   │   └── Family Plan (Up to 6 members)
│   ├── Feature Comparison Table
│   ├── Select Plan Buttons
│   └── 7-Day Trial Badge (if not used)
├── Payment Screen
│   ├── Plan Summary
│   ├── Payment Method Selection
│   │   ├── UPI
│   │   ├── Card
│   │   └── Net Banking
│   ├── Payment Details Form
│   ├── Auto-Renew Checkbox
│   ├── Terms Acceptance
│   └── Complete Payment Button
├── Payment Success Screen
│   ├── Success Animation
│   ├── "Welcome to Premium!" message
│   ├── Premium Benefits List
│   └── Start Exploring Button → Home
├── Family Plan Management Screen
│   ├── Current Members List
│   │   ├── Owner (you)
│   │   └── Members (1-5)
│   ├── Available Slots (X/6)
│   ├── Add Member Options
│   │   ├── Share Invite Link
│   │   └── Share Invite Code
│   └── Member Actions
│       └── Remove Member Button
├── Payment History Screen
│   ├── All Transactions List
│   ├── Transaction Details
│   │   ├── Date
│   │   ├── Amount
│   │   ├── Payment Method
│   │   ├── Status
│   │   └── Receipt Button
│   └── Download Receipt
├── Account Settings Screen
│   ├── Email/Phone
│   ├── Change Password
│   ├── Linked Accounts
│   │   └── Google (if linked)
│   ├── Delete Account
│   └── Save Changes
├── App Settings Screen
│   ├── App Language
│   │   ├── English
│   │   ├── हिंदी (Hindi)
│   │   └── অসমীয়া (Assamese)
│   ├── Default Bible Translation
│   ├── Font Size
│   ├── Reading Preferences
│   └── Reduced Motion
├── Notification Settings Screen
│   ├── Push Notifications Master Toggle
│   ├── Verse of the Day
│   │   ├── Toggle
│   │   └── Time Picker
│   ├── App Updates
│   │   └── Toggle
│   └── Email Notifications
│       └── Toggle
├── Privacy & Security Screen
│   ├── Privacy Policy
│   ├── Terms of Service
│   ├── Data Management
│   │   ├── Download My Data
│   │   └── Delete My Data
│   └── Security
│       ├── Change Password
│       └── Login History
├── Help & Support Screen
│   ├── FAQs
│   ├── Contact Support
│   │   ├── Email Support
│   │   └── In-App Chat (future)
│   ├── Report a Problem
│   └── App Version Info
└── About Hymnora Screen
    ├── App Logo
    ├── Version Number
    ├── About Text
    ├── Development Team
    ├── Credits
    └── Social Links
```

#### Screen Details:

**Profile Home**
- User info at top with large profile photo
- Subscription badge (Free/Premium/Trial)
- Grid of activity cards
- List of settings options
- Logout button at bottom

**Subscription Management**
- Current plan shown in premium card
- If Free: Large "Upgrade to Premium" button
- If Premium: Show billing details and next charge
- Auto-renew toggle with confirmation
- "Cancel Subscription" button (red, at bottom)
- Family plan section (if family plan owner)

**Premium Plans Screen**
- Three/Four columns:
  - Monthly: ₹XXX/month
  - Yearly: ₹XXX/year (Save XX%)
  - Family: ₹XXX/year (Up to 6 members)
- Feature comparison with checkmarks
- "Best Value" badge on yearly
- First-time subscriber discount highlighted
- 7-day trial badge if not used
- Select button for each plan

**Payment Screen**
- Razorpay/Stripe integration
- Clean payment form
- Secure payment badges
- Auto-renew checkbox (checked by default)
- Terms and conditions link
- "Secure Payment" reassurance text

---

### 9. CROSS-CUTTING SCREENS

```
Cross-Cutting Features
├── Global Search Screen
│   ├── Search Input
│   ├── Search Scope Tabs
│   │   ├── All
│   │   ├── Bible
│   │   ├── Hymns
│   │   ├── Books (Premium)
│   │   └── AI History (Premium)
│   ├── Recent Searches
│   ├── Search Results
│   │   ├── Grouped by Type
│   │   └── Result Item → Respective Screen
│   └── Empty State
├── Notifications Screen
│   ├── Notification List
│   │   ├── Verse of the Day
│   │   ├── App Updates
│   │   └── System Notifications
│   ├── Notification Item Details
│   ├── Mark as Read
│   ├── Clear All
│   └── Empty State ("No notifications")
├── Bible Audio Player (Premium)
│   ├── Full-Screen Player
│   │   ├── Book/Chapter/Verse Info
│   │   ├── Audio Progress Bar
│   │   ├── Playback Controls
│   │   │   ├── Rewind 10s
│   │   │   ├── Play/Pause
│   │   │   ├── Forward 10s
│   │   │   └── Speed Control
│   │   ├── Chapter Navigation
│   │   │   ├── Previous Chapter
│   │   │   └── Next Chapter
│   │   ├── Download Button
│   │   └── Close Button
│   └── Mini Player (Bottom Bar)
│       ├── Verse Reference
│       ├── Play/Pause
│       ├── Progress Bar
│       └── Expand Button
├── Share Screen (Native Share Sheet)
│   ├── Share Options
│   │   ├── WhatsApp
│   │   ├── Facebook
│   │   ├── Twitter
│   │   ├── Instagram
│   │   ├── Email
│   │   ├── SMS
│   │   └── Copy Link
│   └── Custom Share Message
└── Error Screens
    ├── No Internet Connection
    │   ├── Illustration
    │   ├── Message
    │   └── Retry Button
    ├── Premium Required
    │   ├── Lock Icon
    │   ├── Feature Explanation
    │   ├── Benefits List
    │   └── Upgrade to Premium Button
    └── Something Went Wrong
        ├── Illustration
        ├── Error Message
        ├── Retry Button
        └── Go Back Button
```

#### Screen Details:

**Global Search**
- Available from any tab (top bar search icon)
- Tabs to filter search scope
- Instant results as you type
- Results grouped by category
- Each result shows preview + "Open" button

**Bible Audio Player**
- Full-screen overlay when expanded
- Shows current verse/chapter being played
- Large play/pause button
- Waveform visualization (optional)
- Speed control: 0.75x, 1x, 1.25x, 1.5x, 2x
- Download chapter for offline
- Background playback support
- Lock screen controls
- Mini player persistent at bottom when minimized

**Notifications**
- Simple list of notifications
- Unread shown in bold
- Tap to open related content
- Swipe to delete
- "Mark all as read" button
- Notification preferences link

---

### 10. ADMIN PANEL (WEB)

```
Admin Panel (Next.js Web App)
├── Admin Login
│   ├── Email Input
│   ├── Password Input
│   ├── 2FA Code Input
│   └── Login Button
├── Admin Dashboard
│   ├── Overview Stats
│   │   ├── Total Users
│   │   ├── Active Users (DAU/MAU)
│   │   ├── Premium Users
│   │   ├── Free Users
│   │   ├── Total Revenue
│   │   └── Active Subscriptions
│   ├── Quick Actions
│   │   ├── Add Hymn
│   │   ├── Add Book
│   │   ├── Send Notification
│   │   └── View Reports
│   ├── Recent Activity
│   ├── Alerts & Warnings
│   └── Analytics Charts
│       ├── User Growth
│       ├── Revenue Trend
│       └── Content Usage
├── Users Management
│   ├── User List
│   │   ├── Search & Filters
│   │   ├── User Table
│   │   │   ├── Name
│   │   │   ├── Email/Phone
│   │   │   ├── Plan
│   │   │   ├── Status
│   │   │   ├── Joined Date
│   │   │   └── Actions
│   │   └── Pagination
│   └── User Details
│       ├── User Info
│       ├── Subscription Details
│       ├── Activity Log
│       ├── Content Created (Hymns)
│       └── Actions
│           ├── Suspend User
│           ├── Ban User
│           ├── Activate User
│           └── Reset Password
├── Hymns Management
│   ├── Official Hymns
│   │   ├── Hymn List
│   │   ├── Add New Hymn
│   │   ├── Edit Hymn
│   │   ├── Delete Hymn
│   │   └── Bulk Import
│   ├── Categories
│   │   ├── Category List
│   │   ├── Add Category
│   │   ├── Edit Category
│   │   └── Delete Category
│   └── User Hymns
│       ├── User-Created Hymns List
│       ├── Filter (Public/Private)
│       └── Moderation Actions
├── Books Management
│   ├── Books Library
│   │   ├── Book List
│   │   ├── Add New Book
│   │   │   ├── Upload PDF
│   │   │   ├── Book Details Form
│   │   │   ├── Cover Upload
│   │   │   └── Add Chapters
│   │   ├── Edit Book
│   │   ├── Delete Book
│   │   └── Book Preview
│   └── Book Categories
│       ├── Category List
│       ├── Add Category
│       ├── Edit Category
│       └── Delete Category
├── Bible Management
│   ├── Translations
│   │   ├── Translation List
│   │   ├── Add Translation
│   │   ├── Edit Translation
│   │   └── Manage Verses
│   └── Verse of the Day
│       ├── Schedule Verse
│       ├── Calendar View
│       └── Auto-Schedule Feature
├── AI Management
│   ├── AI Usage Stats
│   │   ├── Total Queries
│   │   ├── Active Users
│   │   ├── Token Usage
│   │   └── Cost Analysis
│   ├── Query Logs
│   ├── Response Quality Monitoring
│   └── AI Settings
│       ├── API Configuration
│       └── Response Templates
├── Subscriptions & Payments
│   ├── Subscription Overview
│   │   ├── Active Subscriptions
│   │   ├── Trial Users
│   │   ├── Cancelled Subscriptions
│   │   └── Revenue Charts
│   ├── Payment History
│   │   ├── All Transactions
│   │   ├── Search & Filters
│   │   └── Export to CSV
│   ├── Failed Payments
│   │   ├── Failed Transaction List
│   │   └── Retry Actions
│   └── Family Plans
│       ├── Active Family Plans
│       └── Member Management
├── Reports & Moderation
│   ├── Content Reports
│   │   ├── Pending Reports
│   │   ├── Reviewed Reports
│   │   └── Report Details
│   │       ├── Reporter Info
│   │       ├── Reported Content
│   │       ├── Reason
│   │       └── Actions
│   │           ├── Hide Content
│   │           ├── Delete Content
│   │           ├── Warn User
│   │           ├── Suspend User
│   │           └── Dismiss Report
│   └── Moderation History
├── Notifications Management
│   ├── Send Notification
│   │   ├── Notification Type
│   │   ├── Target Audience (All/Free/Premium)
│   │   ├── Title & Message
│   │   ├── Schedule Options
│   │   └── Send Now / Schedule
│   ├── Notification History
│   │   ├── Sent Notifications
│   │   ├── Scheduled Notifications
│   │   └── Notification Stats
│   └── Verse of the Day Settings
│       ├── Auto-send Time
│       └── Enable/Disable
├── Analytics & Reports
│   ├── User Analytics
│   │   ├── User Growth Chart
│   │   ├── Active Users (DAU/MAU)
│   │   ├── User Retention
│   │   └── Demographics
│   ├── Content Analytics
│   │   ├── Bible Usage
│   │   │   ├── Most Read Books
│   │   │   ├── Most Read Chapters
│   │   │   └── Translation Preferences
│   │   ├── Hymn Usage
│   │   │   ├── Most Viewed Hymns
│   │   │   ├── User-Created Hymns Count
│   │   │   └── Category Distribution
│   │   ├── AI Usage
│   │   │   ├── Query Volume
│   │   │   ├── Popular Topics
│   │   │   └── Cost Analysis
│   │   └── Books Usage
│   │       ├── Most Read Books
│   │       └── Reading Completion Rate
│   ├── Revenue Analytics
│   │   ├── Revenue Chart (Monthly/Yearly)
│   │   ├── Revenue by Plan
│   │   ├── Conversion Rates
│   │   └── Churn Analysis
│   └── Export Reports
│       ├── User Report (CSV)
│       ├── Revenue Report (CSV)
│       └── Content Report (CSV)
└── Settings
    ├── Admin Users
    │   ├── Admin List
    │   ├── Add Admin
    │   ├── Edit Admin
    │   └── Role Management
    ├── App Configuration
    │   ├── App Version
    │   ├── Maintenance Mode
    │   ├── API Keys
    │   └── Feature Flags
    ├── Payment Configuration
    │   ├── Razorpay Settings
    │   ├── Stripe Settings
    │   └── Pricing Plans
    └── Security
        ├── 2FA Settings
        ├── Session Management
        └── Audit Logs
```

---

## Navigation Patterns

### Bottom Navigation Rules
1. Always visible on main tabs (Home, Bible, Hymns, AI, Books, Profile)
2. Hidden when:
   - Keyboard is open
   - Full-screen reader (Bible/Books)
   - Modal overlays
   - Player full-screen
3. Active tab:
   - Ice blue background
   - Icon color changes to ice blue
   - Slight elevation
   - Label becomes bold

### Back Navigation
- Android: Hardware back button
- iOS: Swipe from left edge
- Both: Back arrow in header

### Deep Linking Support
```
hymnora://home
hymnora://bible/{translation}/{book}/{chapter}
hymnora://hymn/{hymnId}
hymnora://ai/chat
hymnora://books/{bookId}
hymnora://profile
hymnora://premium/upgrade
```

### Search Accessibility
- Global search icon in header of all main tabs
- Opens dedicated search screen
- Context-aware (pre-filters based on current tab)

### Premium Feature Gating
- Free users see premium features with lock icon
- Tap locked feature → Premium upgrade screen
- Premium upgrade screen shows benefits
- "Upgrade Now" button → Plans screen → Payment

---

## Screen Transitions

### Navigation Animations
- Tab switch: Cross-fade (200ms)
- Push screen: Slide from right (300ms)
- Pop screen: Slide to right (300ms)
- Modal: Slide up from bottom (400ms)
- Bottom sheet: Slide up (300ms)

### Gesture Support
- Swipe right: Go back (in navigable screens)
- Swipe left/right: Chapter/page navigation (in readers)
- Pull down: Refresh (in lists)
- Long press: Context menu

---

## Empty States

### Home Tab
- First time: Welcome message + suggested actions
- No bookmarks: "Start reading to see your progress"

### Bible
- No bookmarks: Illustration + "Bookmark verses you love"
- No highlights: "Highlight important verses" (Premium)
- No notes: "Add notes to remember insights" (Premium)

### Hymns
- No saved hymns: "Save your favorite hymns"
- No created hymns: "Create your first hymn"
- No public hymns: "Be the first to share"

### AI (Premium)
- No chat history: Welcome message + suggested questions
- Empty session: Greeting + topic buttons

### Books (Premium)
- No started books: Browse books + "Start your first book"
- No bookmarks: "Bookmark pages you want to revisit"

### Profile
- No activity: "Start exploring Hymnora"

---

## Loading States

### Initial App Load
- Splash screen (2 seconds)
- Load user data
- Load preferences
- Navigate to appropriate screen

### Screen Loading
- Skeleton loaders for lists
- Shimmer effect for cards
- Spinner for buttons
- Progress bar for downloads

### Offline Behavior
- Cached content available
- "You're offline" banner
- Retry button for failed requests
- Queue actions for when online

---

This comprehensive screen hierarchy provides the complete navigation structure and user flow for HYMNORA, ensuring a premium, intuitive, and peaceful user experience.
