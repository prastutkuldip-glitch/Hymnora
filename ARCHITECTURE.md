# HYMNORA - Technical Architecture Document

## Application Overview

**Name:** Hymnora  
**Tagline:** "Faith. Scripture. Worship."  
**Type:** Premium Christian Faith Mobile Application  
**Platform:** Cross-platform (React Native/Flutter)

---

## Technology Stack

### Frontend (Mobile App)
- **Framework:** React Native with Expo
- **Language:** TypeScript
- **UI Library:** React Native Paper (customized for glassmorphism)
- **Navigation:** React Navigation v6
- **State Management:** Redux Toolkit + RTK Query
- **Forms:** React Hook Form + Zod validation
- **Animations:** React Native Reanimated 3 + Moti
- **Icons:** Custom 3D glassmorphism icons + React Native Vector Icons
- **Audio:** React Native Track Player
- **PDF/Books:** React Native PDF Renderer (custom)
- **Local Storage:** AsyncStorage + SQLite (offline Bible content)
- **Push Notifications:** Firebase Cloud Messaging (FCM)

### Backend (API Server)
- **Framework:** Node.js + Express.js / NestJS
- **Language:** TypeScript
- **Database:** PostgreSQL (primary) + Redis (cache)
- **ORM:** Prisma / TypeORM
- **File Storage:** AWS S3 / Google Cloud Storage
- **AI Integration:** OpenAI API / Anthropic Claude API
- **Audio Generation:** ElevenLabs / Google Text-to-Speech
- **Authentication:** JWT + OAuth2.0 (Google, Email, Phone)
- **Payment:** Razorpay / Stripe (for India + International)
- **Real-time:** Socket.io (for live updates)

### Admin Panel
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Library:** Shadcn/ui + Tailwind CSS
- **Charts:** Recharts / Chart.js
- **Authentication:** NextAuth.js with 2FA

### DevOps & Infrastructure
- **Hosting:** AWS / Google Cloud / DigitalOcean
- **CDN:** CloudFront / Cloudflare
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry (errors) + Mixpanel (analytics)
- **API Documentation:** Swagger / OpenAPI

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    HYMNORA ECOSYSTEM                         │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐         ┌──────────────────┐
│   Mobile App     │◄───────►│   Admin Panel    │
│  (React Native)  │         │   (Next.js)      │
└────────┬─────────┘         └────────┬─────────┘
         │                            │
         │                            │
         ▼                            ▼
┌─────────────────────────────────────────────┐
│           REST API / GraphQL                │
│         (Node.js + Express/NestJS)          │
└───────────────┬─────────────────────────────┘
                │
       ┌────────┴────────┐
       │                 │
       ▼                 ▼
┌─────────────┐   ┌─────────────┐
│ PostgreSQL  │   │    Redis    │
│  Database   │   │   Cache     │
└─────────────┘   └─────────────┘
       │
       ├─────► AWS S3 (PDFs, Audio, Images)
       ├─────► OpenAI API (Bible AI Assistant)
       ├─────► ElevenLabs (Audio Generation)
       ├─────► Razorpay/Stripe (Payments)
       └─────► FCM (Push Notifications)
```

---

## Database Schema

### User Management

```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20) UNIQUE,
  google_id VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  full_name VARCHAR(255) NOT NULL,
  profile_photo_url TEXT,
  is_guest BOOLEAN DEFAULT false,
  account_status ENUM('active', 'suspended', 'banned') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP
);

-- Subscription Table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan_type ENUM('free', 'monthly', 'yearly', 'family') NOT NULL,
  status ENUM('trial', 'active', 'expired', 'cancelled') DEFAULT 'active',
  trial_used BOOLEAN DEFAULT false,
  trial_ends_at TIMESTAMP,
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  auto_renew BOOLEAN DEFAULT true,
  payment_method VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Family Plan Members
CREATE TABLE family_plan_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_owner_id UUID REFERENCES users(id) ON DELETE CASCADE,
  member_user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  invite_code VARCHAR(50) UNIQUE,
  status ENUM('pending', 'active', 'removed') DEFAULT 'pending',
  joined_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(family_owner_id, member_user_id)
);

-- Payment History
CREATE TABLE payment_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES subscriptions(id),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'INR',
  payment_method VARCHAR(50),
  payment_status ENUM('pending', 'completed', 'failed', 'refunded'),
  transaction_id VARCHAR(255) UNIQUE,
  receipt_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Bible System

```sql
-- Bible Translations
CREATE TABLE bible_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  abbreviation VARCHAR(20) NOT NULL,
  language VARCHAR(50) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bible Books
CREATE TABLE bible_books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  translation_id UUID REFERENCES bible_translations(id),
  book_name VARCHAR(100) NOT NULL,
  book_number INTEGER NOT NULL,
  testament ENUM('old', 'new') NOT NULL,
  total_chapters INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bible Verses
CREATE TABLE bible_verses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id UUID REFERENCES bible_books(id),
  translation_id UUID REFERENCES bible_translations(id),
  chapter INTEGER NOT NULL,
  verse INTEGER NOT NULL,
  text TEXT NOT NULL,
  audio_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_book_chapter_verse (book_id, chapter, verse)
);

-- User Bible Bookmarks
CREATE TABLE bible_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  translation_id UUID REFERENCES bible_translations(id),
  book_id UUID REFERENCES bible_books(id),
  chapter INTEGER NOT NULL,
  verse INTEGER NOT NULL,
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_bookmarks (user_id, created_at)
);

-- User Bible Highlights (PREMIUM)
CREATE TABLE bible_highlights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  translation_id UUID REFERENCES bible_translations(id),
  book_id UUID REFERENCES bible_books(id),
  chapter INTEGER NOT NULL,
  verse INTEGER NOT NULL,
  color VARCHAR(20) DEFAULT 'yellow',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_highlights (user_id)
);

-- User Bible Notes (PREMIUM)
CREATE TABLE bible_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  translation_id UUID REFERENCES bible_translations(id),
  book_id UUID REFERENCES bible_books(id),
  chapter INTEGER NOT NULL,
  verse INTEGER NOT NULL,
  note TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_notes (user_id)
);

-- Bible Reading History
CREATE TABLE bible_reading_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  translation_id UUID REFERENCES bible_translations(id),
  book_id UUID REFERENCES bible_books(id),
  chapter INTEGER NOT NULL,
  last_read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_reading (user_id, last_read_at)
);

-- Verse of the Day
CREATE TABLE verse_of_the_day (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  translation_id UUID REFERENCES bible_translations(id),
  book_id UUID REFERENCES bible_books(id),
  chapter INTEGER NOT NULL,
  verse INTEGER NOT NULL,
  date DATE UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Hymn System

```sql
-- Hymn Categories (Admin Created)
CREATE TABLE hymn_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en VARCHAR(255) NOT NULL,
  name_hi VARCHAR(255),
  name_as VARCHAR(255),
  description TEXT,
  icon_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Hymns (Official + User Created)
CREATE TABLE hymns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hymn_number VARCHAR(50),
  title VARCHAR(255) NOT NULL,
  lyrics TEXT NOT NULL,
  language VARCHAR(50) NOT NULL,
  category_id UUID REFERENCES hymn_categories(id),
  is_official BOOLEAN DEFAULT false,
  created_by_user_id UUID REFERENCES users(id),
  visibility ENUM('private', 'public') DEFAULT 'private',
  likes_count INTEGER DEFAULT 0,
  favorites_count INTEGER DEFAULT 0,
  shares_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_official_hymns (is_official, category_id),
  INDEX idx_user_hymns (created_by_user_id, visibility)
);

-- User Hymn Favorites
CREATE TABLE user_hymn_favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  hymn_id UUID REFERENCES hymns(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, hymn_id)
);

-- User Hymn Likes
CREATE TABLE user_hymn_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  hymn_id UUID REFERENCES hymns(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, hymn_id)
);

-- Hymn Comments (For Public Hymns)
CREATE TABLE hymn_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  hymn_id UUID REFERENCES hymns(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  is_hidden BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_hymn_comments (hymn_id, created_at)
);
```

### AI Assistant System (PREMIUM)

```sql
-- AI Chat Sessions
CREATE TABLE ai_chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255),
  is_saved BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_sessions (user_id, created_at)
);

-- AI Chat Messages
CREATE TABLE ai_chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES ai_chat_sessions(id) ON DELETE CASCADE,
  role ENUM('user', 'assistant') NOT NULL,
  content TEXT NOT NULL,
  message_type ENUM('text', 'image', 'pdf') DEFAULT 'text',
  file_url TEXT,
  answer_mode ENUM('simple', 'detailed'),
  bible_references JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_session_messages (session_id, created_at)
);

-- AI Usage Tracking
CREATE TABLE ai_usage_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  session_id UUID REFERENCES ai_chat_sessions(id),
  tokens_used INTEGER,
  cost_incurred DECIMAL(10, 4),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_usage (user_id, created_at)
);
```

### Christian Books System (PREMIUM)

```sql
-- Book Categories
CREATE TABLE book_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_en VARCHAR(255) NOT NULL,
  name_hi VARCHAR(255),
  name_as VARCHAR(255),
  description TEXT,
  icon_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Books
CREATE TABLE books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  pdf_url TEXT NOT NULL,
  category_id UUID REFERENCES book_categories(id),
  total_pages INTEGER,
  language VARCHAR(50) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Book Chapters
CREATE TABLE book_chapters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id UUID REFERENCES books(id) ON DELETE CASCADE,
  chapter_number INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  start_page INTEGER NOT NULL,
  end_page INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Book Progress
CREATE TABLE user_book_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  book_id UUID REFERENCES books(id) ON DELETE CASCADE,
  current_page INTEGER DEFAULT 1,
  total_pages INTEGER NOT NULL,
  progress_percentage DECIMAL(5, 2) DEFAULT 0.00,
  last_read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, book_id),
  INDEX idx_user_reading_progress (user_id, last_read_at)
);

-- User Book Bookmarks
CREATE TABLE user_book_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  book_id UUID REFERENCES books(id) ON DELETE CASCADE,
  page_number INTEGER NOT NULL,
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_book_bookmarks (user_id, book_id)
);

-- User Book Highlights
CREATE TABLE user_book_highlights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  book_id UUID REFERENCES books(id) ON DELETE CASCADE,
  page_number INTEGER NOT NULL,
  text_content TEXT NOT NULL,
  color VARCHAR(20) DEFAULT 'yellow',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_book_highlights (user_id, book_id)
);

-- User Book Notes
CREATE TABLE user_book_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  book_id UUID REFERENCES books(id) ON DELETE CASCADE,
  page_number INTEGER NOT NULL,
  note TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_book_notes (user_id, book_id)
);
```

### Admin & Moderation

```sql
-- Admin Users
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  role ENUM('super_admin', 'admin', 'moderator') DEFAULT 'admin',
  two_factor_secret VARCHAR(255),
  two_factor_enabled BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Content Reports
CREATE TABLE content_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reported_by_user_id UUID REFERENCES users(id),
  content_type ENUM('hymn', 'comment', 'other') NOT NULL,
  content_id UUID NOT NULL,
  reason TEXT NOT NULL,
  status ENUM('pending', 'reviewed', 'action_taken', 'dismissed') DEFAULT 'pending',
  admin_notes TEXT,
  reviewed_by_admin_id UUID REFERENCES admin_users(id),
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_pending_reports (status, created_at)
);

-- System Notifications
CREATE TABLE system_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  notification_type ENUM('verse_of_day', 'app_update', 'system') NOT NULL,
  target_audience ENUM('all', 'free', 'premium') DEFAULT 'all',
  scheduled_at TIMESTAMP,
  sent_at TIMESTAMP,
  status ENUM('scheduled', 'sent', 'failed') DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Notifications
CREATE TABLE user_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  system_notification_id UUID REFERENCES system_notifications(id),
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_user_notifications (user_id, is_read, created_at)
);

-- App Analytics
CREATE TABLE app_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  event_type VARCHAR(100) NOT NULL,
  event_data JSONB,
  platform VARCHAR(20),
  app_version VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_analytics (event_type, created_at)
);
```

### Settings & Preferences

```sql
-- User Preferences
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE UNIQUE,
  app_language ENUM('en', 'hi', 'as') DEFAULT 'en',
  default_bible_translation_id UUID REFERENCES bible_translations(id),
  font_size ENUM('small', 'medium', 'large', 'extra_large') DEFAULT 'medium',
  audio_voice ENUM('male_1', 'male_2', 'female_1', 'female_2') DEFAULT 'male_1',
  audio_speed DECIMAL(2, 1) DEFAULT 1.0,
  notification_verse_of_day BOOLEAN DEFAULT true,
  notification_app_updates BOOLEAN DEFAULT true,
  reduced_motion BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## API Endpoints Structure

### Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/google
POST   /api/auth/phone/send-otp
POST   /api/auth/phone/verify-otp
POST   /api/auth/guest
POST   /api/auth/logout
POST   /api/auth/refresh-token
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

### User Profile
```
GET    /api/user/profile
PUT    /api/user/profile
PUT    /api/user/profile/photo
GET    /api/user/preferences
PUT    /api/user/preferences
DELETE /api/user/account
```

### Bible
```
GET    /api/bible/translations
GET    /api/bible/books/:translationId
GET    /api/bible/chapters/:bookId
GET    /api/bible/verses/:bookId/:chapter
GET    /api/bible/verse/:verseId
GET    /api/bible/search?q=query
GET    /api/bible/verse-of-day
POST   /api/bible/bookmarks
GET    /api/bible/bookmarks
DELETE /api/bible/bookmarks/:id
POST   /api/bible/highlights (PREMIUM)
GET    /api/bible/highlights (PREMIUM)
DELETE /api/bible/highlights/:id (PREMIUM)
POST   /api/bible/notes (PREMIUM)
GET    /api/bible/notes (PREMIUM)
PUT    /api/bible/notes/:id (PREMIUM)
DELETE /api/bible/notes/:id (PREMIUM)
GET    /api/bible/reading-history
POST   /api/bible/reading-history
GET    /api/bible/context/:verseId (PREMIUM)
```

### Bible Audio (PREMIUM)
```
GET    /api/bible/audio/verse/:verseId
GET    /api/bible/audio/chapter/:bookId/:chapter
GET    /api/bible/audio/book/:bookId
POST   /api/bible/audio/download
```

### Hymns
```
GET    /api/hymns/categories
GET    /api/hymns/official
GET    /api/hymns/official/:categoryId
GET    /api/hymns/:id
GET    /api/hymns/search?q=query
POST   /api/hymns/user (Create user hymn)
GET    /api/hymns/user (My hymns)
PUT    /api/hymns/user/:id
DELETE /api/hymns/user/:id
GET    /api/hymns/public (Public user hymns)
POST   /api/hymns/:id/like
DELETE /api/hymns/:id/like
POST   /api/hymns/:id/favorite
DELETE /api/hymns/:id/favorite
GET    /api/hymns/:id/comments
POST   /api/hymns/:id/comments
DELETE /api/hymns/comments/:id
POST   /api/hymns/:id/share
```

### AI Assistant (PREMIUM)
```
POST   /api/ai/chat
GET    /api/ai/sessions
GET    /api/ai/sessions/:id
POST   /api/ai/sessions/:id/save
DELETE /api/ai/sessions/:id
POST   /api/ai/upload-image
POST   /api/ai/upload-pdf
POST   /api/ai/voice-output
GET    /api/ai/voices
```

### Christian Books (PREMIUM)
```
GET    /api/books/categories
GET    /api/books
GET    /api/books/:id
GET    /api/books/:id/chapters
GET    /api/books/:id/read
POST   /api/books/:id/progress
GET    /api/books/:id/progress
POST   /api/books/:id/bookmarks
GET    /api/books/:id/bookmarks
DELETE /api/books/bookmarks/:id
POST   /api/books/:id/highlights
GET    /api/books/:id/highlights
DELETE /api/books/highlights/:id
POST   /api/books/:id/notes
GET    /api/books/:id/notes
PUT    /api/books/notes/:id
DELETE /api/books/notes/:id
```

### Subscriptions & Payments
```
GET    /api/subscriptions/plans
POST   /api/subscriptions/trial
POST   /api/subscriptions/subscribe
GET    /api/subscriptions/current
PUT    /api/subscriptions/auto-renew
POST   /api/subscriptions/cancel
POST   /api/subscriptions/payment-method
GET    /api/subscriptions/payment-history
POST   /api/subscriptions/family/invite
POST   /api/subscriptions/family/accept/:inviteCode
DELETE /api/subscriptions/family/member/:memberId
GET    /api/subscriptions/family/members
```

### Notifications
```
GET    /api/notifications
PUT    /api/notifications/:id/read
PUT    /api/notifications/read-all
DELETE /api/notifications/:id
POST   /api/notifications/token (FCM token)
```

### Reports
```
POST   /api/reports/content
```

---

## Admin API Endpoints

### Admin Authentication
```
POST   /api/admin/auth/login
POST   /api/admin/auth/2fa/setup
POST   /api/admin/auth/2fa/verify
POST   /api/admin/auth/logout
```

### Admin Dashboard
```
GET    /api/admin/dashboard/stats
GET    /api/admin/dashboard/analytics
```

### Admin Users
```
GET    /api/admin/users
GET    /api/admin/users/:id
PUT    /api/admin/users/:id/suspend
PUT    /api/admin/users/:id/ban
PUT    /api/admin/users/:id/activate
```

### Admin Hymns
```
POST   /api/admin/hymns/categories
PUT    /api/admin/hymns/categories/:id
DELETE /api/admin/hymns/categories/:id
POST   /api/admin/hymns/official
PUT    /api/admin/hymns/official/:id
DELETE /api/admin/hymns/official/:id
GET    /api/admin/hymns/user-submissions
```

### Admin Books
```
POST   /api/admin/books/categories
PUT    /api/admin/books/categories/:id
DELETE /api/admin/books/categories/:id
POST   /api/admin/books
PUT    /api/admin/books/:id
DELETE /api/admin/books/:id
POST   /api/admin/books/:id/chapters
PUT    /api/admin/books/chapters/:id
DELETE /api/admin/books/chapters/:id
```

### Admin Reports & Moderation
```
GET    /api/admin/reports
GET    /api/admin/reports/:id
PUT    /api/admin/reports/:id/review
PUT    /api/admin/reports/:id/action
```

### Admin Notifications
```
POST   /api/admin/notifications/send
GET    /api/admin/notifications/history
```

### Admin Analytics
```
GET    /api/admin/analytics/users
GET    /api/admin/analytics/subscriptions
GET    /api/admin/analytics/content
GET    /api/admin/analytics/revenue
```

---

## Security Architecture

### Authentication Flow
1. **User Registration/Login**
   - Password hashing: bcrypt (cost factor: 12)
   - JWT tokens: Access token (15 min) + Refresh token (7 days)
   - OAuth2.0: Google Sign-In
   - Phone: OTP via Twilio/Firebase

2. **Token Management**
   - Access tokens stored in memory (React Native)
   - Refresh tokens in secure storage (expo-secure-store)
   - Token rotation on refresh
   - Blacklist for logged out tokens (Redis)

3. **Admin Authentication**
   - Separate admin authentication system
   - 2FA required (TOTP via Google Authenticator)
   - Session timeout: 1 hour
   - IP whitelisting (optional)

### Authorization
- Role-based access control (RBAC)
- Subscription-based feature gating
- API rate limiting (Redis)
- Family plan member isolation

### Data Security
- Encrypted database connections (SSL/TLS)
- Encrypted file storage (AWS S3 server-side encryption)
- HTTPS only (TLS 1.3)
- API key management (environment variables)
- Input validation (Zod schemas)
- SQL injection prevention (Parameterized queries)
- XSS protection (Content Security Policy)

---

## Performance Optimization

### Mobile App
1. **Lazy Loading**
   - Code splitting by route
   - On-demand feature loading
   - Image lazy loading

2. **Caching Strategy**
   - Bible content: SQLite local database
   - Images: React Native Fast Image
   - API responses: RTK Query cache (5 min TTL)
   - User preferences: AsyncStorage

3. **Offline Support**
   - Downloaded Bible translations
   - Downloaded audio chapters
   - Downloaded books
   - Offline reading history sync

4. **Optimization**
   - FlatList virtualization
   - Memoization (React.memo, useMemo)
   - Reanimated for 60fps animations
   - Hermes JS engine

### Backend
1. **Database Optimization**
   - Proper indexing
   - Query optimization
   - Connection pooling
   - Read replicas

2. **Caching**
   - Redis for frequently accessed data
   - Cache invalidation strategy
   - CDN for static assets

3. **API Optimization**
   - Response compression (gzip)
   - Pagination (cursor-based)
   - GraphQL for flexible queries (optional)
   - Rate limiting

---

## Deployment Architecture

### Mobile App
```
Development → Staging → Production

Expo EAS Build:
- iOS: App Store (TestFlight → Production)
- Android: Play Store (Internal Testing → Production)

Version Management:
- Semantic versioning (X.Y.Z)
- Over-the-air updates (Expo Updates)
- Forced update mechanism
```

### Backend API
```
Development → Staging → Production

Infrastructure:
- AWS EC2 / ECS (Docker containers)
- Auto-scaling groups
- Load balancer (ALB)
- Health checks

Database:
- AWS RDS PostgreSQL (Multi-AZ)
- Automated backups (daily)
- Read replicas (for scaling)

Storage:
- AWS S3 (PDFs, audio, images)
- CloudFront CDN

Monitoring:
- CloudWatch (infrastructure)
- Sentry (error tracking)
- Mixpanel (analytics)
```

### Admin Panel
```
Development → Staging → Production

Hosting:
- Vercel / AWS Amplify / Netlify
- Edge functions
- CDN distribution

Environment Variables:
- Secure secrets management
- Environment-specific configs
```

---

## Development Workflow

### Git Workflow
```
main (production)
├── staging
└── develop
    ├── feature/bible-reader
    ├── feature/hymn-system
    ├── feature/ai-assistant
    └── bugfix/audio-playback
```

### CI/CD Pipeline
```
1. Code Push → GitHub
2. Run Tests (Jest, Cypress)
3. Linting & Type Checking
4. Build (Expo EAS / Docker)
5. Deploy to Staging
6. Manual QA Testing
7. Deploy to Production
8. Monitor & Rollback (if needed)
```

---

## Testing Strategy

### Mobile App
- Unit Tests: Jest
- Component Tests: React Native Testing Library
- E2E Tests: Detox
- Coverage Target: 80%+

### Backend API
- Unit Tests: Jest
- Integration Tests: Supertest
- API Tests: Postman/Newman
- Coverage Target: 85%+

### Admin Panel
- Unit Tests: Jest
- Component Tests: Testing Library
- E2E Tests: Playwright
- Coverage Target: 75%+

---

## Scalability Considerations

### Current Scale (Year 1)
- Expected Users: 10,000 - 50,000
- Daily Active Users: 2,000 - 10,000
- API Requests: 1M - 5M/day
- Storage: 100GB - 500GB

### Growth Scale (Year 3)
- Expected Users: 100,000 - 500,000
- Daily Active Users: 20,000 - 100,000
- API Requests: 10M - 50M/day
- Storage: 1TB - 5TB

### Scaling Strategy
1. **Horizontal Scaling**
   - Load balancer distribution
   - Microservices architecture (future)
   - Database sharding (if needed)

2. **Vertical Scaling**
   - Increase server resources
   - Database performance tuning
   - Redis cluster

3. **Cost Optimization**
   - S3 lifecycle policies
   - CloudFront caching
   - Reserved instances
   - Spot instances for non-critical workloads

---

## Compliance & Legal

### Data Privacy
- GDPR compliance (EU users)
- Privacy policy
- Data deletion requests
- User data export

### Content
- User-generated content moderation
- Copyright compliance
- Terms of Service
- Community guidelines

### Payments
- PCI DSS compliance (via Razorpay/Stripe)
- Tax compliance (GST, international)
- Refund policy
- Subscription terms

---

## Monitoring & Maintenance

### Application Monitoring
- Error tracking: Sentry
- Performance: New Relic / DataDog
- Analytics: Mixpanel / Amplitude
- Uptime: Pingdom / UptimeRobot

### Alerts
- Server downtime
- High error rates
- Payment failures
- Database performance issues
- Security incidents

### Maintenance Windows
- Scheduled: Sunday 2AM - 4AM IST
- Emergency: As needed with notifications

---

## Future Enhancements (Roadmap)

### Phase 1 (MVP - Months 1-3)
✓ Core Bible reader
✓ Hymn library
✓ User authentication
✓ Basic subscription system
✓ Admin panel

### Phase 2 (Months 4-6)
✓ Bible Audio (AI-generated)
✓ Ask Bible AI
✓ Christian Books
✓ Advanced Bible features
✓ Family plans

### Phase 3 (Months 7-9)
- More Bible translations (10+ languages)
- Bible study plans
- Community features (limited)
- Sermon notes integration
- Church finder

### Phase 4 (Months 10-12)
- Offline-first architecture
- Widget support (iOS/Android)
- Apple Watch / Wear OS app
- TV app (Apple TV, Fire TV)
- Web version (PWA)

### Phase 5 (Year 2+)
- Live Bible study rooms
- Collaborative study groups
- Pastor/church admin tools
- Custom church content
- API for third-party integrations

---

## Estimated Development Timeline

### Total Duration: 6-9 months (MVP to Production)

**Month 1-2: Foundation**
- Architecture setup
- Design system implementation
- Authentication system
- Database setup
- Admin panel foundation

**Month 3-4: Core Features**
- Bible reader system
- Hymn library system
- User profile & settings
- Subscription system (basic)

**Month 5-6: Premium Features**
- Bible Audio integration
- AI Assistant integration
- Christian Books reader
- Payment integration
- Family plans

**Month 7-8: Polish & Testing**
- UI/UX refinement
- Performance optimization
- Bug fixes
- Security audit
- Beta testing

**Month 9: Launch Preparation**
- App Store submission
- Play Store submission
- Marketing materials
- Documentation
- Launch

---

## Team Requirements

### Development Team
- **Mobile Developers:** 2 (React Native + TypeScript)
- **Backend Developers:** 2 (Node.js + PostgreSQL)
- **Frontend Developer:** 1 (Next.js for Admin Panel)
- **UI/UX Designer:** 1 (Figma + Design System)
- **QA Engineer:** 1 (Testing + Automation)

### Support Team
- **Product Manager:** 1
- **DevOps Engineer:** 1 (Part-time)
- **Content Manager:** 1 (Bible content + Books)
- **Customer Support:** 1-2 (Post-launch)

### External Services
- **AI Engineer/Consultant:** For AI integration
- **Audio Engineer:** For voice generation setup
- **Biblical Scholar/Advisor:** For content accuracy
- **Legal Advisor:** For compliance

---

## Budget Estimation (Monthly - Production)

### Infrastructure
- **Server Hosting:** $200-500/month (AWS/GCP)
- **Database:** $100-300/month (RDS PostgreSQL)
- **Storage:** $50-200/month (S3 + CDN)
- **Redis Cache:** $50-100/month

### Third-Party Services
- **OpenAI API:** $500-2000/month (AI Assistant)
- **ElevenLabs:** $200-500/month (Audio generation)
- **Razorpay/Stripe:** 2-3% transaction fees
- **Firebase:** $50-100/month (Push notifications)
- **Sentry:** $50-100/month (Error tracking)
- **Mixpanel:** $50-100/month (Analytics)

### Domain & SSL
- **Domain:** $15/year
- **SSL Certificates:** Free (Let's Encrypt)

### Marketing (Post-Launch)
- **App Store Optimization:** $200-500/month
- **Digital Marketing:** $500-2000/month
- **Content Creation:** $300-1000/month

**Total Monthly Cost (Estimated):** $2,500 - $7,500/month

---

## Success Metrics (KPIs)

### User Metrics
- **User Acquisition:** 1,000+ users/month
- **Daily Active Users (DAU):** 30% of total users
- **Monthly Active Users (MAU):** 70% of total users
- **User Retention:** 60% (30-day retention)

### Engagement Metrics
- **Average Session Duration:** 10+ minutes
- **Bible Reading Frequency:** 3+ times/week
- **Hymn Views:** 5+ per session
- **AI Queries:** 2+ per week (premium users)

### Revenue Metrics
- **Free to Premium Conversion:** 5-10%
- **Trial to Paid Conversion:** 30-40%
- **Monthly Recurring Revenue (MRR):** Growing
- **Churn Rate:** <5% monthly

### Technical Metrics
- **App Crash Rate:** <0.1%
- **API Response Time:** <200ms (p95)
- **App Load Time:** <3 seconds
- **Uptime:** 99.9%+

---

This architecture document provides the complete technical foundation for building HYMNORA. The next step is to design the visual identity and create the detailed UI/UX specifications for each screen.
