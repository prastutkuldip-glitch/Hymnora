# HYMNORA - Admin Panel Architecture & Features

## Overview

The Hymnora Admin Panel is a secure web-based dashboard for managing the entire Hymnora ecosystem. Built with Next.js 14, it provides comprehensive tools for content management, user moderation, analytics, and system administration.

**Access:** Admin panel is ONLY for the app owner and authorized administrators. Regular users have NO access.

**URL:** `https://admin.hymnora.app`

**Tech Stack:**
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- UI Library: Shadcn/ui + Tailwind CSS
- Charts: Recharts
- Authentication: NextAuth.js with 2FA
- Database: PostgreSQL (shared with mobile app)

---

## Authentication & Security

### 1. Admin Authentication System

#### Login Flow
```
┌──────────────────────────┐
│   Admin Login            │
├──────────────────────────┤
│   Email:                 │
│   [_______________]      │
│                          │
│   Password:              │
│   [_______________]      │
│                          │
│   [Remember Me]          │
│                          │
│   [Login]                │
│                          │
│   Forgot password?       │
└──────────────────────────┘
        ↓
┌──────────────────────────┐
│   Two-Factor Auth        │
├──────────────────────────┤
│   Enter 6-digit code     │
│   from your authenticator│
│                          │
│   [___] [___] [___]      │
│   [___] [___] [___]      │
│                          │
│   [Verify]               │
│                          │
│   Didn't receive code?   │
└──────────────────────────┘
        ↓
    Dashboard
```

#### Security Features
1. **Email + Password + 2FA (Required)**
   - Strong password requirements
   - Google Authenticator / Authy support
   - Backup codes provided

2. **Session Management**
   - 1-hour session timeout
   - Refresh token rotation
   - Single session per admin (optional)
   - Force logout on suspicious activity

3. **IP Whitelisting (Optional)**
   - Restrict access to specific IPs
   - VPN detection
   - Geo-location tracking

4. **Audit Logging**
   - Every action logged
   - Who, what, when, where
   - Immutable audit trail
   - Export logs

5. **Role-Based Access Control**
   - Super Admin (full access)
   - Admin (most features)
   - Moderator (content moderation only)
   - Viewer (read-only analytics)

---

## Admin Panel Structure

### Main Navigation

```
┌─────────────────────────────────────────────┐
│  HYMNORA Admin   [Search]  [Alerts]  [User] │
├─────────────────────────────────────────────┤
│                                             │
│  📊 Dashboard                               │
│  👥 Users                                   │
│  🎵 Hymns                                   │
│  📖 Bible                                   │
│  📚 Books                                   │
│  🤖 AI Assistant                            │
│  💳 Subscriptions                           │
│  🚨 Reports & Moderation                    │
│  🔔 Notifications                           │
│  📈 Analytics                               │
│  ⚙️ Settings                                │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 1. Dashboard

### Purpose
High-level overview of key metrics, recent activity, and quick actions.

### Layout

```
┌──────────────────────────────────────────────────────────┐
│  Dashboard                                    [Refresh]   │
├──────────────────────────────────────────────────────────┤
│  OVERVIEW STATS (Cards Row)                              │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ 12,450  │ │  3,245  │ │  2,890  │ │ ₹45,230 │      │
│  │ Users   │ │ Premium │ │ DAU     │ │ Revenue │      │
│  │ +12%    │ │ +5%     │ │ +8%     │ │ +15%    │      │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
│                                                          │
│  ┌──────────────────────┐ ┌──────────────────────┐     │
│  │ USER GROWTH CHART    │ │ REVENUE CHART        │     │
│  │                      │ │                      │     │
│  │  [Line Chart]        │ │  [Bar Chart]         │     │
│  │                      │ │                      │     │
│  └──────────────────────┘ └──────────────────────┘     │
│                                                          │
│  ┌──────────────────────┐ ┌──────────────────────┐     │
│  │ QUICK ACTIONS        │ │ RECENT ACTIVITY      │     │
│  │                      │ │                      │     │
│  │ • Add Hymn           │ │ • User signup        │     │
│  │ • Add Book           │ │ • New hymn created   │     │
│  │ • Send Notification  │ │ • Payment received   │     │
│  │ • View Reports       │ │ • Report submitted   │     │
│  │                      │ │ • [More...]          │     │
│  └──────────────────────┘ └──────────────────────┘     │
│                                                          │
│  ┌───────────────────────────────────────────────┐      │
│  │ ALERTS & WARNINGS                             │      │
│  │                                               │      │
│  │ ⚠️ 5 pending reports - Review needed         │      │
│  │ ⚠️ 2 failed payments - Follow up required    │      │
│  │ ✅ Backup completed successfully             │      │
│  │                                               │      │
│  └───────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

### Key Metrics Cards

**Total Users**
- Count of all registered users
- Percentage change (last 30 days)
- Sparkline trend

**Premium Users**
- Active premium subscribers
- Percentage of total users
- Growth trend

**Daily Active Users (DAU)**
- Users active in last 24 hours
- 7-day average
- Trend indicator

**Monthly Recurring Revenue**
- Current MRR
- Growth percentage
- Year-over-year comparison

**Additional Metrics:**
- Bible verses read today
- Hymns viewed today
- AI queries today
- New hymns created today

### Charts

**User Growth Chart**
- Line chart
- Last 30/90/365 days
- Filter: All users / Premium / Free
- Y-axis: User count
- X-axis: Date

**Revenue Chart**
- Bar chart
- Monthly revenue
- Compare to previous period
- Breakdown by plan type

**Content Usage Chart**
- Pie chart or bar chart
- Bible usage
- Hymns usage
- Books usage
- AI usage

### Quick Actions
- Add Official Hymn
- Upload Book
- Send Notification
- View Pending Reports
- View Failed Payments
- Export Data

### Recent Activity Feed
- Real-time updates (last 50 events)
- Event types:
  - New user registration
  - Premium subscription
  - Hymn created
  - Payment received
  - Content report
  - Failed payment
- Timestamp and details
- Click to view more

### Alerts Section
- Pending reports count
- Failed payments
- System errors
- Low storage warnings
- Security alerts
- Backup status

---

## 2. Users Management

### Purpose
Manage user accounts, subscriptions, and activity.

### Users List

```
┌──────────────────────────────────────────────────────────┐
│  Users                           [Export] [+ Add User]   │
├──────────────────────────────────────────────────────────┤
│  [Search users...] [Filters ▼] [Sort ▼]                 │
│                                                          │
│  Filters: All | Free | Premium | Trial | Suspended      │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Name          Email            Plan      Status    │ │
│  ├────────────────────────────────────────────────────┤ │
│  │ John Doe      john@email.com   Premium   Active   │ │
│  │ Jane Smith    jane@email.com   Free      Active   │ │
│  │ Mike Johnson  mike@email.com   Trial     Active   │ │
│  │ Sarah Brown   sarah@email.com  Premium   Suspended│ │
│  │ ...                                                │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Showing 1-25 of 12,450 users    [< 1 2 3 ... 498 >]   │
└──────────────────────────────────────────────────────────┘
```

### Table Columns
- Profile Photo (thumbnail)
- Full Name
- Email / Phone
- Plan Type (Free/Premium/Trial/Family)
- Status (Active/Suspended/Banned)
- Joined Date
- Last Login
- Actions (View/Edit/Suspend/Ban)

### Filters
- Plan: All / Free / Premium / Trial / Family
- Status: All / Active / Suspended / Banned
- Date Range: Last 7/30/90 days, Custom
- Search: Name, Email, Phone

### Sort Options
- Newest first
- Oldest first
- Name A-Z
- Name Z-A
- Last active

### Bulk Actions
- Export selected users (CSV)
- Send notification to selected
- Suspend selected
- Delete selected (confirmation required)

### User Detail View

```
┌──────────────────────────────────────────────────┐
│  User Details                          [Edit]    │
├──────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────┐   │
│  │ PROFILE INFO                             │   │
│  │                                          │   │
│  │ [Photo]  John Doe                        │   │
│  │          john.doe@email.com              │   │
│  │          +91-9876543210                  │   │
│  │                                          │   │
│  │ Joined: Jan 15, 2024                     │   │
│  │ Last Login: 2 hours ago                  │   │
│  │ Status: Active                           │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ SUBSCRIPTION                             │   │
│  │                                          │   │
│  │ Plan: Premium Monthly                    │   │
│  │ Status: Active                           │   │
│  │ Started: Jan 20, 2024                    │   │
│  │ Next billing: Feb 20, 2024               │   │
│  │ Amount: ₹99/month                        │   │
│  │ Auto-renew: ON                           │   │
│  │                                          │   │
│  │ [Cancel Subscription]  [Extend Trial]    │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ ACTIVITY STATS                           │   │
│  │                                          │   │
│  │ Bible verses read: 1,245                 │   │
│  │ Hymns created: 8                         │   │
│  │ AI queries: 67                           │   │
│  │ Books read: 3                            │   │
│  │ Days active: 45                          │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ PAYMENT HISTORY                          │   │
│  │                                          │   │
│  │ Jan 20, 2024  ₹99   Completed           │   │
│  │ Dec 20, 2023  ₹99   Completed           │   │
│  │ Nov 20, 2023  ₹99   Failed (Retry)      │   │
│  │                                          │   │
│  │ [View All Payments]                      │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ CONTENT CREATED                          │   │
│  │                                          │   │
│  │ Hymns: 8 (2 public, 6 private)          │   │
│  │ Comments: 12                             │   │
│  │ Reports filed: 0                         │   │
│  │ Reports against: 0                       │   │
│  │                                          │   │
│  │ [View Content]                           │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ ADMIN ACTIONS                            │   │
│  │                                          │   │
│  │ [Suspend Account]                        │   │
│  │ [Ban User]                               │   │
│  │ [Reset Password]                         │   │
│  │ [Send Email]                             │   │
│  │ [Delete Account]                         │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ ACTIVITY LOG (Last 10)                   │   │
│  │                                          │   │
│  │ 2h ago - Logged in from Mumbai, India    │   │
│  │ 5h ago - Created hymn "Amazing Grace"    │   │
│  │ 1d ago - Subscribed to Premium           │   │
│  │ ...                                      │   │
│  │                                          │   │
│  │ [View Full Log]                          │   │
│  └──────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

### User Actions

**Suspend Account**
- Temporarily block access
- User cannot login
- Subscription remains active
- Can reactivate anytime
- Reason required

**Ban User**
- Permanently block access
- Cancel subscription
- Hide all user content
- Cannot reactivate easily
- Reason required

**Reset Password**
- Send password reset email
- Force password change on next login

**Send Email**
- Compose custom message
- Template options available
- Preview before sending

**Delete Account**
- Permanent deletion
- Confirmation required (type "DELETE")
- All user data removed
- Cannot be undone

### Export Users
- Export format: CSV, Excel, JSON
- Select fields to export
- Apply current filters
- Email download link when ready

---

## 3. Hymns Management

### Purpose
Manage official hymns, categories, and moderate user-created hymns.

### Hymns Dashboard

```
┌──────────────────────────────────────────────────────────┐
│  Hymns                       [+ Add Hymn] [Categories]   │
├──────────────────────────────────────────────────────────┤
│  Tabs: Official Hymns | User Hymns | Categories          │
│                                                          │
│  OFFICIAL HYMNS                                          │
│  [Search...] [Filter by Category ▼] [Sort ▼]            │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ #    Title              Category    Language  Views│ │
│  ├────────────────────────────────────────────────────┤ │
│  │ 001  Amazing Grace      Traditional  English  12.5K│ │
│  │ 002  How Great Thou Art Worship      English  10.2K│ │
│  │ 003  जय जय येशू        Worship      Hindi     8.7K│ │
│  │ ...                                                │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Showing 1-25 of 1,245 hymns      [< 1 2 3 ... 50 >]   │
└──────────────────────────────────────────────────────────┘
```

### Official Hymns Management

**Add Official Hymn Form:**
```
┌──────────────────────────────┐
│  Add Official Hymn           │
├──────────────────────────────┤
│  Hymn Number:                │
│  [_______________]           │
│                              │
│  Title:                      │
│  [_______________]           │
│                              │
│  Language:                   │
│  [English ▼]                 │
│                              │
│  Categories:                 │
│  ☑ Worship                   │
│  ☐ Traditional               │
│  ☐ Christmas                 │
│  ...                         │
│                              │
│  Lyrics:                     │
│  [                        ]  │
│  [      Large Textarea    ]  │
│  [                        ]  │
│                              │
│  [Preview] [Save Hymn]       │
└──────────────────────────────┘
```

**Edit Hymn:**
- Same form as add, pre-filled
- Update button
- Delete option (with confirmation)
- View history of changes

**Bulk Import:**
- Upload CSV/Excel file
- Template provided
- Map columns
- Preview before import
- Error handling for duplicates

### User Hymns Management

**User Hymns List:**
- All user-created hymns
- Filter: Public / Private / Reported
- Search by title, user, language
- Moderate reported hymns

**User Hymn Actions:**
- View hymn details
- View creator info
- Hide from public (if reported)
- Delete (if violates guidelines)
- Feature (promote to discovery)

### Hymn Categories

**Categories List:**
```
┌──────────────────────────────────────────────┐
│  Hymn Categories            [+ Add Category] │
├──────────────────────────────────────────────┤
│  Name              Hymns    Status    Order  │
│  ────────────────────────────────────────── │
│  Worship           450      Active    1      │
│  Traditional       320      Active    2      │
│  Christmas         85       Active    3      │
│  Easter            65       Active    4      │
│  ...                                         │
└──────────────────────────────────────────────┘
```

**Add/Edit Category:**
- Name (English, Hindi, Assamese)
- Description
- Icon/Image upload
- Display order
- Active/Inactive status

**Category Actions:**
- Reorder (drag and drop)
- Edit details
- Delete (if no hymns assigned)
- View hymns in category

---

## 4. Bible Management

### Purpose
Manage Bible translations, verses, and Verse of the Day.

### Bible Translations

```
┌──────────────────────────────────────────────┐
│  Bible Translations         [+ Add Translation]│
├──────────────────────────────────────────────┤
│  Translation      Language  Verses  Status   │
│  ──────────────────────────────────────────  │
│  KJV              English   31,102  Active   │
│  NIV              English   31,173  Active   │
│  Hindi Bible      Hindi     31,102  Active   │
│  Assamese Bible   Assamese  31,102  Active   │
│  ...                                         │
└──────────────────────────────────────────────┘
```

**Add Translation:**
- Name and abbreviation
- Language
- Description
- Bulk import verses (CSV/JSON)
- Validation and integrity checks

**Manage Verses:**
- Edit individual verses (typo corrections)
- Search verses
- Export translation
- Re-import (update)

### Verse of the Day Management

```
┌──────────────────────────────────────────────┐
│  Verse of the Day              [Schedule]    │
├──────────────────────────────────────────────┤
│  CALENDAR VIEW                               │
│                                              │
│  January 2024                                │
│  ┌───┬───┬───┬───┬───┬───┬───┐             │
│  │ S │ M │ T │ W │ T │ F │ S │             │
│  ├───┼───┼───┼───┼───┼───┼───┤             │
│  │   │ 1✓│ 2✓│ 3✓│ 4✓│ 5✓│ 6✓│             │
│  │ 7✓│ 8✓│ 9✓│10✓│11✓│12✓│13✓│             │
│  │14✓│15 │16 │17 │18 │19 │20 │             │
│  │21 │22 │23 │24 │25 │26 │27 │             │
│  │28 │29 │30 │31 │   │   │   │             │
│  └───┴───┴───┴───┴───┴───┴───┘             │
│                                              │
│  ✓ = Scheduled   [Blank] = Not scheduled    │
│                                              │
│  [Auto-Schedule Next 30 Days]                │
└──────────────────────────────────────────────┘
```

**Schedule Verse:**
- Select date
- Choose translation
- Pick book, chapter, verse
- Preview
- Save

**Auto-Schedule:**
- AI-powered verse selection
- Distributes verses across Old/New Testament
- Avoids repetition
- Seasonal themes (Christmas, Easter)
- Schedule for next 30/90/365 days

**Current Verse:**
- View today's verse
- Override if needed
- Push notification status
- Engagement metrics

---

## 5. Books Management

### Purpose
Upload and manage Christian books library.

### Books Library

```
┌──────────────────────────────────────────────┐
│  Christian Books           [+ Upload Book]   │
├──────────────────────────────────────────────┤
│  [Search...] [Filter by Category ▼] [Sort ▼]│
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ [Cover] Title         Author  Category│   │
│  ├──────────────────────────────────────┤   │
│  │ [📖]    Mere Christianity             │   │
│  │         C.S. Lewis    Apologetics    │   │
│  │                                       │   │
│  │ [📖]    Knowing God                   │   │
│  │         J.I. Packer   Theology       │   │
│  │                                       │   │
│  │ [📖]    Prayer                        │   │
│  │         Timothy Keller Prayer        │   │
│  │ ...                                   │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

### Upload Book Workflow

**Step 1: Upload PDF**
```
┌──────────────────────────────┐
│  Upload Book - Step 1        │
├──────────────────────────────┤
│  Upload PDF File             │
│  [Drag & Drop or Click]      │
│                              │
│  Max size: 50MB              │
│  Format: PDF only            │
│                              │
│  [Selected: book.pdf (12MB)]│
│                              │
│  [Next]                      │
└──────────────────────────────┘
```

**Step 2: Book Details**
```
┌──────────────────────────────┐
│  Upload Book - Step 2        │
├──────────────────────────────┤
│  Title:                      │
│  [_______________]           │
│                              │
│  Author:                     │
│  [_______________]           │
│                              │
│  Category:                   │
│  [Select ▼]                  │
│                              │
│  Description:                │
│  [____________]              │
│                              │
│  Cover Image:                │
│  [Upload Image]              │
│                              │
│  Language:                   │
│  [English ▼]                 │
│                              │
│  [Back] [Next]               │
└──────────────────────────────┘
```

**Step 3: Extract Chapters**
```
┌──────────────────────────────┐
│  Upload Book - Step 3        │
├──────────────────────────────┤
│  PDF Processing...           │
│  [████████░░] 80%            │
│                              │
│  Extracting text...          │
│  Detecting chapters...       │
│  Generating TOC...           │
│                              │
│  [Processing...]             │
└──────────────────────────────┘
```

**Step 4: Review & Add Chapters**
```
┌──────────────────────────────┐
│  Upload Book - Step 4        │
├──────────────────────────────┤
│  Chapters Detected:          │
│                              │
│  ┌──────────────────────┐   │
│  │ Ch #  Title    Pages │   │
│  ├──────────────────────┤   │
│  │ 1  Introduction  1-12│   │
│  │ 2  Faith       13-28 │   │
│  │ 3  Hope        29-45 │   │
│  │ ...                  │   │
│  └──────────────────────┘   │
│                              │
│  [+ Add Chapter Manually]    │
│  [Edit Chapter]              │
│                              │
│  [Back] [Finish]             │
└──────────────────────────────┘
```

**Step 5: Publish**
```
┌──────────────────────────────┐
│  Book Uploaded Successfully! │
├──────────────────────────────┤
│  ✅ Book added to library    │
│                              │
│  Title: Mere Christianity    │
│  Author: C.S. Lewis          │
│  Chapters: 12                │
│  Pages: 245                  │
│                              │
│  [View Book] [Upload Another]│
└──────────────────────────────┘
```

### Edit Book
- Update book details
- Edit cover image
- Add/remove/edit chapters
- Re-upload PDF
- Delete book (confirmation required)

### Book Categories
- Similar to Hymn Categories
- Add/Edit/Delete categories
- Assign books to categories

### Book Analytics
- Total downloads
- Reading progress (avg completion %)
- Most popular books
- User ratings (future)

---

## 6. AI Assistant Management

### Purpose
Monitor AI usage, costs, and quality.

### AI Dashboard

```
┌──────────────────────────────────────────────┐
│  AI Assistant Analytics                      │
├──────────────────────────────────────────────┤
│  USAGE STATS (Today)                         │
│  ┌────────┐ ┌────────┐ ┌────────┐          │
│  │ 1,245  │ │ 850    │ │ 45,230 │          │
│  │ Queries│ │ Users  │ │ Tokens │          │
│  └────────┘ └────────┘ └────────┘          │
│                                              │
│  COST ANALYSIS                               │
│  ┌──────────────────────────────────────┐   │
│  │ Today: $12.45                        │   │
│  │ This Month: $345.60                  │   │
│  │ Avg per query: $0.28                 │   │
│  │                                       │   │
│  │ [View Detailed Breakdown]            │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  POPULAR TOPICS                              │
│  1. Prayer (18%)                             │
│  2. Love (15%)                               │
│  3. Faith (12%)                              │
│  4. Salvation (10%)                          │
│  5. Bible verses explained (8%)              │
│  ...                                         │
└──────────────────────────────────────────────┘
```

### Query Logs

```
┌──────────────────────────────────────────────┐
│  AI Query Logs                  [Export]     │
├──────────────────────────────────────────────┤
│  [Search...] [Filter ▼] [Date Range ▼]      │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Time    User      Query        Tokens│   │
│  ├──────────────────────────────────────┤   │
│  │ 10:45am John D.   What is love?  850│   │
│  │ 10:42am Jane S.   Explain John... 920│   │
│  │ 10:38am Mike J.   Prayer guide  1150│   │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  [View Query Details]                        │
└──────────────────────────────────────────────┘
```

### Query Detail View
- Full question asked
- Full AI response
- Bible references cited
- Tokens used
- Cost calculation
- Response time
- User feedback (if any)
- Flag inappropriate (for review)

### AI Settings
- API Key management (OpenAI/Claude)
- Model selection (GPT-4, Claude 3.5, etc.)
- Temperature/Creativity settings
- Max tokens per query
- Rate limits per user
- Cost alerts (email when exceeds threshold)

### Response Quality Monitoring
- Sample random queries
- Review AI responses
- Check biblical accuracy
- Identify problematic patterns
- Improve prompts

---

## 7. Subscriptions & Payments

### Purpose
Manage subscriptions, payments, and revenue.

### Subscriptions Overview

```
┌──────────────────────────────────────────────┐
│  Subscriptions & Revenue                     │
├──────────────────────────────────────────────┤
│  OVERVIEW                                    │
│  ┌────────┐ ┌────────┐ ┌────────┐          │
│  │ 3,245  │ │ 2,890  │ │ 320    │          │
│  │ Active │ │ Monthly│ │ Yearly │          │
│  └────────┘ └────────┘ └────────┘          │
│                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐          │
│  │ 35     │ │ 145    │ │₹45,230 │          │
│  │ Family │ │ Trial  │ │ MRR    │          │
│  └────────┘ └────────┘ └────────┘          │
│                                              │
│  REVENUE CHART (Last 12 Months)              │
│  ┌──────────────────────────────────────┐   │
│  │ [Bar Chart]                          │   │
│  │                                       │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

### Active Subscriptions List

```
┌──────────────────────────────────────────────┐
│  Active Subscriptions          [Export]      │
├──────────────────────────────────────────────┤
│  [Search...] [Filter ▼] [Sort ▼]            │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ User      Plan      Next Billing  Amt│   │
│  ├──────────────────────────────────────┤   │
│  │ John Doe  Monthly   Feb 20, 2024  ₹99│   │
│  │ Jane S.   Yearly    Dec 15, 2024  ₹999│  │
│  │ Mike J.   Family    Mar 1, 2024  ₹1499│  │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

### Payment History

```
┌──────────────────────────────────────────────┐
│  Payment History                [Export]     │
├──────────────────────────────────────────────┤
│  [Search...] [Filter ▼] [Date Range ▼]      │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Date      User    Amount  Status     │   │
│  ├──────────────────────────────────────┤   │
│  │ Jan 20    John D.  ₹99   Completed   │   │
│  │ Jan 20    Jane S.  ₹99   Completed   │   │
│  │ Jan 19    Mike J.  ₹99   Failed      │   │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Total: ₹45,230  Success: 98.5%  Failed: 1.5%│
└──────────────────────────────────────────────┘
```

### Failed Payments

```
┌──────────────────────────────────────────────┐
│  Failed Payments                             │
├──────────────────────────────────────────────┤
│  Requires attention: 12                      │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ User      Date     Amount  Reason    │   │
│  ├──────────────────────────────────────┤   │
│  │ John Doe  Jan 19   ₹99  Card expired│   │
│  │ Jane S.   Jan 18   ₹99  Insufficient│   │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Actions:                                    │
│  • Send payment reminder email               │
│  • Retry payment                             │
│  • Cancel subscription                       │
└──────────────────────────────────────────────┘
```

### Family Plans Management

```
┌──────────────────────────────────────────────┐
│  Family Plans                                │
├──────────────────────────────────────────────┤
│  Active family plans: 35                     │
│  Total members: 178 (avg 5.1 per plan)       │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Owner     Members  Next Billing      │   │
│  ├──────────────────────────────────────┤   │
│  │ John Doe  6/6      Feb 20, 2024      │   │
│  │ Jane S.   4/6      Mar 15, 2024      │   │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

### Subscription Actions
- View subscription details
- Cancel subscription (with reason)
- Extend trial period
- Apply discount/coupon
- Refund payment
- Change plan manually

### Revenue Reports
- Daily/Weekly/Monthly revenue
- Revenue by plan type
- Churn rate
- Lifetime value (LTV)
- Conversion funnel
- Export to Excel/CSV

---

## 8. Reports & Moderation

### Purpose
Handle user reports and moderate content.

### Reports Dashboard

```
┌──────────────────────────────────────────────┐
│  Content Reports                             │
├──────────────────────────────────────────────┤
│  PENDING REPORTS: 5                          │
│  [View All Pending]                          │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Content    Reporter  Reason  Date    │   │
│  ├──────────────────────────────────────┤   │
│  │ Hymn #1234 User A    Spam    Jan 20  │   │
│  │ Comment    User B    Offensive Jan 19│   │
│  │ Hymn #5678 User C    Copyright Jan 18│   │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  REPORT STATS                                │
│  Total reports: 145                          │
│  Pending: 5                                  │
│  Reviewed: 120                               │
│  Action taken: 85                            │
│  Dismissed: 35                               │
└──────────────────────────────────────────────┘
```

### Report Detail View

```
┌──────────────────────────────────────────────┐
│  Report Details                              │
├──────────────────────────────────────────────┤
│  Report ID: #12345                           │
│  Status: Pending                             │
│  Submitted: Jan 20, 2024 10:45 AM            │
│                                              │
│  REPORTER INFO                               │
│  User: John Doe (@johndoe)                   │
│  Email: john@email.com                       │
│                                              │
│  REPORTED CONTENT                            │
│  Type: Hymn                                  │
│  Title: "Sample Hymn"                        │
│  Creator: Jane Smith                         │
│  Created: Jan 15, 2024                       │
│                                              │
│  [View Full Content]                         │
│                                              │
│  REPORT REASON                               │
│  Category: Inappropriate Content             │
│  Details: "This hymn contains offensive      │
│  language and does not align with Christian  │
│  values..."                                  │
│                                              │
│  ADMIN NOTES                                 │
│  [_________________________]                 │
│                                              │
│  ACTIONS                                     │
│  [Dismiss Report]                            │
│  [Hide Content]                              │
│  [Delete Content]                            │
│  [Warn User]                                 │
│  [Suspend User]                              │
│  [Ban User]                                  │
│                                              │
│  [Mark as Reviewed]                          │
└──────────────────────────────────────────────┘
```

### Report Actions

**Dismiss Report**
- Report is unfounded
- No action needed
- Reason required
- Notify reporter (optional)

**Hide Content**
- Content hidden from public
- Creator can still see
- Can be unhidden later
- Reason sent to creator

**Delete Content**
- Permanently remove content
- Cannot be undone
- Reason sent to creator
- Notification to creator

**Warn User**
- Send warning message
- Keep track of warnings
- 3 warnings → Automatic suspension

**Suspend User**
- Temporarily block access
- Duration: 7/30/90 days
- Reason sent to user
- Can appeal

**Ban User**
- Permanently block access
- All content hidden
- Cannot create new account with same email
- Reason sent to user

### Moderation History
- All actions logged
- Who took action
- When
- What action
- Reason given
- Export logs

### Auto-Moderation (Future)
- AI-powered content filtering
- Flagwords detection
- Spam detection
- Duplicate content
- Auto-hide until review

---

## 9. Notifications Management

### Purpose
Send notifications to users.

### Send Notification

```
┌──────────────────────────────────────────────┐
│  Send Notification                           │
├──────────────────────────────────────────────┤
│  Notification Type:                          │
│  ○ Verse of the Day (Automatic)              │
│  ● App Update                                │
│  ○ System Message                            │
│                                              │
│  Target Audience:                            │
│  ● All Users                                 │
│  ○ Free Users Only                           │
│  ○ Premium Users Only                        │
│  ○ Specific User (Enter ID)                  │
│                                              │
│  Title:                                      │
│  [_________________________]                 │
│                                              │
│  Message:                                    │
│  [_________________________]                 │
│  [_________________________]                 │
│                                              │
│  Action (Optional):                          │
│  ○ None                                      │
│  ○ Open URL: [___________]                   │
│  ○ Open Screen: [Select ▼]                   │
│                                              │
│  Schedule:                                   │
│  ● Send Now                                  │
│  ○ Schedule for later                        │
│    Date: [Jan 20, 2024]                      │
│    Time: [10:00 AM]                          │
│                                              │
│  [Preview] [Send Notification]               │
└──────────────────────────────────────────────┘
```

### Notification Templates
- Welcome message
- Trial ending reminder
- Payment failed
- New feature announcement
- Seasonal greetings (Christmas, Easter)
- Reading streak achievement

### Notification History

```
┌──────────────────────────────────────────────┐
│  Notification History          [Export]      │
├──────────────────────────────────────────────┤
│  [Filter ▼] [Date Range ▼]                  │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ Date    Title       Recipients Status│   │
│  ├──────────────────────────────────────┤   │
│  │ Jan 20  New Feature 12,450     Sent  │   │
│  │ Jan 19  Daily Verse 12,430     Sent  │   │
│  │ Jan 18  Update      5,200      Sent  │   │
│  │ Jan 17  (Scheduled) 12,450  Pending  │   │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  [View Notification Details]                 │
└──────────────────────────────────────────────┘
```

### Notification Analytics
- Sent count
- Delivered count
- Opened count
- Click-through rate
- Conversion rate (if linked to action)

### Verse of the Day Settings
- Auto-send enabled/disabled
- Send time (default 8:00 AM user's timezone)
- Notification title template
- Notification body template

---

## 10. Analytics & Reports

### Purpose
Comprehensive analytics and insights.

### Analytics Dashboard

```
┌──────────────────────────────────────────────┐
│  Analytics                                   │
├──────────────────────────────────────────────┤
│  Date Range: [Last 30 days ▼]  [Custom]     │
│                                              │
│  Tabs: Users | Content | Revenue | Engagement│
└──────────────────────────────────────────────┘
```

### User Analytics

**Metrics:**
- Total users (all-time)
- New users (period)
- Active users (DAU/MAU)
- User retention (cohort analysis)
- Churn rate
- User demographics (if available)

**Charts:**
- User growth over time (line chart)
- User acquisition sources (pie chart)
- Active users trend (line chart)
- User distribution by plan (pie chart)

### Content Analytics

**Bible Usage:**
- Total verses read
- Most read books
- Most read chapters
- Translation preferences
- Reading time per session
- Bookmarks created
- Highlights created (Premium)
- Notes created (Premium)

**Hymn Usage:**
- Total hymn views
- Most viewed hymns
- User-created hymns count
- Public hymns engagement (likes, comments)
- Category distribution
- Language distribution

**AI Usage:**
- Total queries
- Active AI users
- Popular topics
- Average tokens per query
- Total cost
- Cost per user

**Books Usage:**
- Total books downloaded
- Most read books
- Average completion rate
- Highlights created
- Notes created
- Reading time

**Charts:**
- Content usage over time
- Content type distribution
- Feature adoption rate

### Revenue Analytics

**Metrics:**
- Total revenue (all-time)
- MRR (Monthly Recurring Revenue)
- ARR (Annual Recurring Revenue)
- Revenue growth rate
- Revenue by plan type
- Average revenue per user (ARPU)
- Customer lifetime value (LTV)

**Conversion Metrics:**
- Free to Premium conversion rate
- Trial to Paid conversion rate
- Upgrade rate
- Downgrade rate
- Churn rate

**Charts:**
- Revenue trend (line chart)
- Revenue by plan (stacked bar chart)
- Conversion funnel
- Cohort revenue analysis

### Engagement Analytics

**Metrics:**
- Session duration
- Sessions per user
- Feature usage distribution
- Retention rates (Day 1, 7, 30)
- Push notification open rate
- Verse of the day engagement

**User Journey:**
- Most common user flows
- Feature discovery rate
- Drop-off points
- Popular entry points

### Export Reports
- Export any chart/table as CSV, Excel, or PDF
- Schedule automated reports (daily/weekly/monthly)
- Email reports to stakeholders
- Custom report builder

---

## 11. Settings

### Purpose
Admin panel configuration and system settings.

### Admin Users Management

```
┌──────────────────────────────────────────────┐
│  Admin Users                  [+ Add Admin]  │
├──────────────────────────────────────────────┤
│  ┌──────────────────────────────────────┐   │
│  │ Name        Email        Role  Status│   │
│  ├──────────────────────────────────────┤   │
│  │ Admin User  admin@hymnora  Super Active│  │
│  │ John Doe    john@hymnora   Admin Active│  │
│  │ Jane Smith  jane@hymnora   Mod   Active│  │
│  │ ...                                  │   │
│  └──────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

**Roles:**
- **Super Admin:** Full access to everything
- **Admin:** All features except admin user management
- **Moderator:** Content moderation and reports only
- **Viewer:** Read-only access to analytics

**Add Admin:**
- Email address
- Full name
- Role selection
- Send invitation email
- Set temporary password
- Force 2FA setup on first login

### App Configuration

**General Settings:**
- App name and logo
- Contact email
- Support email
- Privacy policy URL
- Terms of service URL

**Maintenance Mode:**
- Enable/Disable
- Maintenance message
- Scheduled maintenance
- Allow admin access during maintenance

**Feature Flags:**
- Enable/Disable features
- Beta testing features
- A/B testing support
- Rollout percentage

**API Keys:**
- OpenAI API key (for AI assistant)
- ElevenLabs API key (for voice)
- Razorpay/Stripe keys (for payments)
- Firebase keys (for notifications)
- AWS S3 credentials (for storage)

**Rate Limiting:**
- API requests per minute
- AI queries per day per user
- Hymn creation per day per user
- Login attempts before lockout

### Payment Configuration

**Razorpay Settings:**
- API Key and Secret
- Webhook URL
- Test/Live mode toggle

**Stripe Settings (International):**
- API Key and Secret
- Webhook URL
- Test/Live mode toggle

**Pricing Plans:**
- Edit plan prices
- Add/remove plans
- Promotional pricing
- Introductory offers
- Coupon codes management

### Security Settings

**2FA Management:**
- Enforce 2FA for all admins
- Backup codes
- Reset 2FA for admin

**Session Settings:**
- Session timeout duration
- Remember me duration
- Force logout on password change

**IP Whitelisting:**
- Add allowed IPs
- Remove IPs
- Enable/Disable

**Audit Logs:**
- View all admin actions
- Filter by admin, action type, date
- Export logs
- Retention period

### Backup & Recovery

**Automatic Backups:**
- Daily database backup
- Weekly full backup
- Retention: 30 days
- Storage: AWS S3

**Manual Backup:**
- Trigger backup now
- Download backup
- Restore from backup (with confirmation)

**Backup Status:**
- Last backup: Jan 20, 2024 03:00 AM
- Next backup: Jan 21, 2024 03:00 AM
- Status: Success ✅
- Size: 1.2 GB

---

## Technical Implementation

### Technology Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Shadcn/ui components
- Tailwind CSS
- Recharts for analytics
- React Hook Form + Zod validation
- TanStack Table for data tables
- NextAuth.js for authentication

**Backend API:**
- Shared with mobile app
- Node.js + Express/NestJS
- PostgreSQL database
- Redis for caching
- JWT authentication

**Security:**
- HTTPS only (SSL/TLS)
- 2FA required (TOTP)
- Rate limiting
- CORS protection
- SQL injection prevention
- XSS protection
- CSRF tokens

**Deployment:**
- Vercel / AWS Amplify / Netlify
- CDN distribution
- Environment variables for secrets
- CI/CD with GitHub Actions

### API Integration
- All CRUD operations via API
- Real-time updates (websockets optional)
- Pagination for large datasets
- Search and filtering
- Bulk operations
- Export functionality

### Performance
- Server-side rendering (SSR)
- Static generation where possible
- Lazy loading components
- Virtualized lists for large tables
- Debounced search
- Optimistic UI updates
- Efficient database queries with indexes

### Responsive Design
- Desktop-first design
- Tablet support
- Mobile support (basic, not primary)
- Minimum width: 1024px recommended

---

## Admin Panel Success Metrics

**Usability:**
- Admin task completion time
- Number of clicks to complete task
- Admin user satisfaction
- Training time for new admins

**Performance:**
- Page load time < 2 seconds
- API response time < 500ms
- Search results < 1 second
- Export generation time

**Security:**
- Zero security breaches
- 100% 2FA adoption
- Regular security audits
- Audit log completeness

**Business Impact:**
- Reduced moderation response time
- Increased content upload efficiency
- Faster issue resolution
- Better data-driven decisions

---

## Admin Panel Roadmap

### Phase 1 (MVP - Months 1-3)
✓ Dashboard overview
✓ User management
✓ Content management (Hymns, Books)
✓ Basic reports
✓ Notifications

### Phase 2 (Months 4-6)
✓ Advanced analytics
✓ AI monitoring
✓ Subscription management
✓ Revenue reports
✓ Moderation tools

### Phase 3 (Months 7-9)
- Automated reports
- Custom dashboards
- Role-based permissions (granular)
- Audit logs
- A/B testing tools

### Phase 4 (Months 10-12)
- Advanced AI insights
- Predictive analytics
- Automated moderation
- Multi-language admin panel
- White-label support

---

## Summary

The Hymnora Admin Panel provides comprehensive tools for managing the entire platform. With a focus on security, usability, and actionable insights, it empowers administrators to efficiently manage users, content, subscriptions, and monitor the health of the application.

**Key Principles:**
1. **Security First:** 2FA, audit logs, role-based access
2. **Data-Driven:** Comprehensive analytics and reports
3. **Efficiency:** Bulk operations, quick actions, automation
4. **User-Friendly:** Clean UI, intuitive navigation, helpful tooltips
5. **Scalable:** Handles growth from hundreds to millions of users
