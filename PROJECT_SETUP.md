# HYMNORA - Project Setup Guide

## Project Structure Overview

This document outlines the complete folder structure and setup instructions for the Hymnora mobile application.

---

## Directory Structure

```
hymnora/
├── docs/                          # Documentation
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── FEATURES.md
│   ├── SCREEN_HIERARCHY.md
│   ├── ADMIN_PANEL.md
│   └── PROJECT_SETUP.md
│
├── mobile-app/                    # React Native Mobile App
│   ├── .expo/
│   ├── assets/                    # Images, fonts, icons
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── splash.png
│   ├── src/
│   │   ├── api/                   # API client and services
│   │   │   ├── client.ts
│   │   │   ├── auth.ts
│   │   │   ├── bible.ts
│   │   │   ├── hymns.ts
│   │   │   ├── ai.ts
│   │   │   ├── books.ts
│   │   │   └── subscriptions.ts
│   │   ├── components/            # Reusable components
│   │   │   ├── atoms/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Icon.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Avatar.tsx
│   │   │   │   └── Spinner.tsx
│   │   │   ├── molecules/
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   ├── IconButton.tsx
│   │   │   │   ├── CardHeader.tsx
│   │   │   │   └── InputField.tsx
│   │   │   └── organisms/
│   │   │       ├── BottomNav.tsx
│   │   │       ├── BottomSheet.tsx
│   │   │       ├── Modal.tsx
│   │   │       ├── FeatureCard.tsx
│   │   │       ├── HymnCard.tsx
│   │   │       └── BookCard.tsx
│   │   ├── constants/             # Constants and config
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   ├── spacing.ts
│   │   │   └── config.ts
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useBible.ts
│   │   │   ├── useHymns.ts
│   │   │   ├── useSubscription.ts
│   │   │   └── useTheme.ts
│   │   ├── navigation/            # Navigation setup
│   │   │   ├── RootNavigator.tsx
│   │   │   ├── AuthNavigator.tsx
│   │   │   ├── MainNavigator.tsx
│   │   │   └── types.ts
│   │   ├── screens/               # All app screens
│   │   │   ├── Auth/
│   │   │   │   ├── LoginScreen.tsx
│   │   │   │   ├── SignUpScreen.tsx
│   │   │   │   └── OnboardingScreen.tsx
│   │   │   ├── Home/
│   │   │   │   └── HomeScreen.tsx
│   │   │   ├── Bible/
│   │   │   │   ├── BibleHomeScreen.tsx
│   │   │   │   ├── BibleReaderScreen.tsx
│   │   │   │   ├── BibleSearchScreen.tsx
│   │   │   │   └── VerseContextScreen.tsx
│   │   │   ├── Hymns/
│   │   │   │   ├── HymnsHomeScreen.tsx
│   │   │   │   ├── HymnDetailScreen.tsx
│   │   │   │   ├── CreateHymnScreen.tsx
│   │   │   │   └── MyHymnsScreen.tsx
│   │   │   ├── AI/
│   │   │   │   ├── AIChatScreen.tsx
│   │   │   │   └── AIHistoryScreen.tsx
│   │   │   ├── Books/
│   │   │   │   ├── BooksHomeScreen.tsx
│   │   │   │   ├── BookDetailScreen.tsx
│   │   │   │   └── BookReaderScreen.tsx
│   │   │   └── Profile/
│   │   │       ├── ProfileScreen.tsx
│   │   │       ├── SettingsScreen.tsx
│   │   │       └── SubscriptionScreen.tsx
│   │   ├── services/              # Business logic services
│   │   │   ├── storage.ts
│   │   │   ├── audio.ts
│   │   │   ├── notifications.ts
│   │   │   └── analytics.ts
│   │   ├── store/                 # Redux store
│   │   │   ├── index.ts
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── bibleSlice.ts
│   │   │   │   ├── hymnsSlice.ts
│   │   │   │   └── userSlice.ts
│   │   │   └── api/
│   │   │       └── apiSlice.ts
│   │   ├── types/                 # TypeScript types
│   │   │   ├── auth.ts
│   │   │   ├── bible.ts
│   │   │   ├── hymns.ts
│   │   │   ├── ai.ts
│   │   │   └── navigation.ts
│   │   └── utils/                 # Utility functions
│   │       ├── date.ts
│   │       ├── format.ts
│   │       ├── validation.ts
│   │       └── helpers.ts
│   ├── App.tsx                    # Root component
│   ├── app.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── babel.config.js
│   └── .env.example
│
├── backend/                       # Node.js Backend API
│   ├── src/
│   │   ├── config/                # Configuration
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── aws.ts
│   │   ├── controllers/           # Route controllers
│   │   │   ├── auth.controller.ts
│   │   │   ├── bible.controller.ts
│   │   │   ├── hymns.controller.ts
│   │   │   ├── ai.controller.ts
│   │   │   ├── books.controller.ts
│   │   │   └── subscriptions.controller.ts
│   │   ├── middlewares/           # Express middlewares
│   │   │   ├── auth.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   ├── rateLimit.middleware.ts
│   │   │   └── error.middleware.ts
│   │   ├── models/                # Database models (Prisma)
│   │   │   └── schema.prisma
│   │   ├── routes/                # API routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── bible.routes.ts
│   │   │   ├── hymns.routes.ts
│   │   │   ├── ai.routes.ts
│   │   │   ├── books.routes.ts
│   │   │   └── index.ts
│   │   ├── services/              # Business logic
│   │   │   ├── auth.service.ts
│   │   │   ├── bible.service.ts
│   │   │   ├── hymns.service.ts
│   │   │   ├── ai.service.ts
│   │   │   ├── email.service.ts
│   │   │   └── payment.service.ts
│   │   ├── utils/                 # Utility functions
│   │   │   ├── jwt.ts
│   │   │   ├── hash.ts
│   │   │   └── logger.ts
│   │   ├── validators/            # Input validation schemas
│   │   │   ├── auth.validator.ts
│   │   │   ├── bible.validator.ts
│   │   │   └── hymns.validator.ts
│   │   ├── types/                 # TypeScript types
│   │   │   └── index.ts
│   │   └── index.ts               # Entry point
│   ├── prisma/
│   │   ├── schema.prisma
│   │   ├── migrations/
│   │   └── seed.ts
│   ├── tests/                     # Test files
│   │   ├── unit/
│   │   └── integration/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── Dockerfile
│
├── admin-panel/                   # Next.js Admin Panel
│   ├── app/                       # Next.js 14 App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── layout.tsx
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   ├── users/
│   │   │   ├── hymns/
│   │   │   ├── bible/
│   │   │   ├── books/
│   │   │   ├── ai/
│   │   │   ├── subscriptions/
│   │   │   ├── reports/
│   │   │   ├── notifications/
│   │   │   ├── analytics/
│   │   │   ├── settings/
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   └── auth/
│   │   └── layout.tsx
│   ├── components/                # React components
│   │   ├── ui/                    # Shadcn components
│   │   ├── charts/
│   │   └── layout/
│   ├── lib/                       # Utilities
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   ├── public/                    # Static assets
│   ├── styles/
│   │   └── globals.css
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── next.config.js
│   └── .env.local.example
│
├── shared/                        # Shared code/types
│   ├── types/
│   │   ├── user.ts
│   │   ├── bible.ts
│   │   ├── hymns.ts
│   │   └── api.ts
│   └── constants/
│       └── config.ts
│
├── scripts/                       # Utility scripts
│   ├── seed-bible.ts
│   ├── migrate-data.ts
│   └── generate-audio.ts
│
├── .github/                       # GitHub configuration
│   └── workflows/
│       ├── mobile-ci.yml
│       ├── backend-ci.yml
│       └── admin-ci.yml
│
├── .gitignore
├── README.md
└── docker-compose.yml             # For local development
```

---

## Setup Instructions

### Prerequisites

```bash
# Required software
- Node.js 18+ and npm/yarn
- Git
- PostgreSQL 14+
- Redis 7+
- Expo CLI
- Android Studio (for Android) or Xcode (for iOS)
```

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/hymnora.git
cd hymnora
```

### 2. Mobile App Setup

```bash
cd mobile-app

# Install dependencies
npm install

# Install Expo CLI globally
npm install -g expo-cli

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Start development server
expo start
```

**Required Environment Variables (.env):**
```env
API_BASE_URL=http://localhost:3000/api
OPENAI_API_KEY=your_openai_key
RAZORPAY_KEY=your_razorpay_key
FIREBASE_API_KEY=your_firebase_key
```

### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Seed database
npm run seed

# Start development server
npm run dev
```

**Required Environment Variables (.env):**
```env
DATABASE_URL=postgresql://user:password@localhost:5432/hymnora
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_refresh_secret

# External APIs
OPENAI_API_KEY=your_openai_key
ELEVENLABS_API_KEY=your_elevenlabs_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
STRIPE_SECRET_KEY=your_stripe_key

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_BUCKET_NAME=hymnora-assets
AWS_REGION=us-east-1

# Email (SendGrid)
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=noreply@hymnora.app

# Firebase
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
```

### 4. Admin Panel Setup

```bash
cd admin-panel

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit .env.local
nano .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

**Required Environment Variables (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret
```

### 5. Database Setup

```bash
# Start PostgreSQL
sudo service postgresql start

# Create database
createdb hymnora

# Start Redis
sudo service redis start
```

### 6. Docker Setup (Alternative)

```bash
# Start all services
docker-compose up -d

# Mobile app
# Backend API: http://localhost:3000
# Admin Panel: http://localhost:3001
# PostgreSQL: localhost:5432
# Redis: localhost:6379
```

---

## Package Dependencies

### Mobile App (React Native)

```json
{
  "dependencies": {
    "expo": "~50.0.0",
    "react": "18.2.0",
    "react-native": "0.73.0",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native-stack": "^6.9.17",
    "@reduxjs/toolkit": "^2.0.1",
    "react-redux": "^9.0.4",
    "axios": "^1.6.2",
    "@react-native-async-storage/async-storage": "^1.21.0",
    "expo-secure-store": "~12.8.1",
    "expo-font": "~11.10.2",
    "expo-linear-gradient": "~12.7.2",
    "expo-blur": "~12.9.2",
    "react-native-reanimated": "~3.6.1",
    "react-native-gesture-handler": "~2.14.0",
    "react-native-track-player": "^4.0.1",
    "react-native-pdf": "^6.7.3",
    "expo-notifications": "~0.27.6",
    "expo-image-picker": "~14.7.1",
    "expo-document-picker": "~11.10.1",
    "react-native-fast-image": "^8.6.3",
    "zod": "^3.22.4",
    "date-fns": "^3.0.6"
  },
  "devDependencies": {
    "@babel/core": "^7.23.6",
    "@types/react": "~18.2.45",
    "typescript": "^5.3.3",
    "eslint": "^8.56.0",
    "prettier": "^3.1.1"
  }
}
```

### Backend API (Node.js)

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^5.3.3",
    "@prisma/client": "^5.7.1",
    "prisma": "^5.7.1",
    "bcrypt": "^5.1.1",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.22.4",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5",
    "redis": "^4.6.11",
    "axios": "^1.6.2",
    "openai": "^4.20.1",
    "aws-sdk": "^2.1515.0",
    "@sendgrid/mail": "^8.1.0",
    "razorpay": "^2.9.2",
    "stripe": "^14.7.0",
    "firebase-admin": "^11.11.1",
    "winston": "^3.11.0",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.6",
    "@types/bcrypt": "^5.0.2",
    "@types/jsonwebtoken": "^9.0.5",
    "@types/cors": "^2.8.17",
    "nodemon": "^3.0.2",
    "ts-node": "^10.9.2",
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
}
```

### Admin Panel (Next.js)

```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.3",
    "next-auth": "^4.24.5",
    "@tanstack/react-table": "^8.10.7",
    "recharts": "^2.10.3",
    "axios": "^1.6.2",
    "zod": "^3.22.4",
    "react-hook-form": "^7.49.2",
    "@hookform/resolvers": "^3.3.2",
    "tailwindcss": "^3.3.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.298.0",
    "date-fns": "^3.0.6"
  },
  "devDependencies": {
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4",
    "prettier": "^3.1.1"
  }
}
```

---

## Development Workflow

### Git Branching Strategy

```
main            # Production branch
├── staging     # Staging branch
└── develop     # Development branch
    ├── feature/bible-reader
    ├── feature/hymn-system
    └── bugfix/auth-issue
```

### Commit Convention

```
feat: Add Bible audio player
fix: Resolve login redirect issue
docs: Update API documentation
style: Format code with Prettier
refactor: Simplify hymn search logic
test: Add unit tests for auth service
chore: Update dependencies
```

### Code Review Process

1. Create feature branch
2. Develop feature
3. Write tests
4. Create pull request
5. Code review by team
6. Merge to develop
7. Test on staging
8. Merge to main (production)

---

## Testing Strategy

### Mobile App Testing

```bash
# Unit tests
npm test

# E2E tests (Detox)
npm run test:e2e

# Test coverage
npm run test:coverage
```

### Backend Testing

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# API tests
npm run test:api
```

### Admin Panel Testing

```bash
# Unit tests
npm test

# Component tests
npm run test:components

# E2E tests (Playwright)
npm run test:e2e
```

---

## Deployment

### Mobile App Deployment

```bash
# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios

# Submit to stores
eas submit --platform all
```

### Backend Deployment

```bash
# Build Docker image
docker build -t hymnora-backend .

# Deploy to AWS/GCP
# (Use CI/CD pipeline)
```

### Admin Panel Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to your hosting
npm run start
```

---

## Monitoring & Maintenance

### Error Tracking
- Sentry for error monitoring
- CloudWatch for server logs
- Mixpanel for analytics

### Performance Monitoring
- Lighthouse for web performance
- React Native Performance for mobile
- New Relic for backend

### Backups
- Daily database backups
- Weekly full backups
- 30-day retention
- Stored in AWS S3

---

## Security Checklist

- [ ] All API endpoints have authentication
- [ ] Input validation on all forms
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS protection
- [ ] CSRF tokens
- [ ] Rate limiting on APIs
- [ ] HTTPS only in production
- [ ] Environment variables for secrets
- [ ] 2FA for admin panel
- [ ] Regular security audits
- [ ] Dependency vulnerability scans

---

## Next Steps

1. ✅ Set up local development environment
2. ✅ Initialize database and seed data
3. ✅ Configure environment variables
4. ✅ Set up CI/CD pipelines
5. ⏳ Begin feature development
6. ⏳ Write tests for core features
7. ⏳ Deploy to staging environment
8. ⏳ Conduct thorough testing
9. ⏳ Deploy to production
10. ⏳ Monitor and iterate

---

## Support & Documentation

- Technical Documentation: `/docs`
- API Documentation: `http://api.hymnora.app/docs`
- Admin Guide: `/docs/ADMIN_PANEL.md`
- Contributing Guide: `/CONTRIBUTING.md`
- Code of Conduct: `/CODE_OF_CONDUCT.md`

---

**Last Updated:** September 23, 2026  
**Version:** 1.0.0  
**Status:** In Development
