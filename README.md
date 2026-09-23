# HYMNORA

**"Faith. Scripture. Worship."**

A premium Christian faith application combining Bible reading, hymns, Bible audio, Christian books, and a Bible-based AI assistant.

---

## 🌟 Overview

Hymnora is an all-in-one Christian mobile application designed to deepen your faith journey. With a beautiful crystal-white glassmorphism design, Hymnora provides a peaceful, modern, and premium experience.

### Key Features

- 📖 **Bible Reader** - Read Scripture in multiple translations with bookmarks, highlights, and notes
- 🎵 **Hymn Library** - Access official hymns and create your own personal hymn collection
- 🔊 **Bible Audio** (Premium) - Listen to Scripture anywhere with AI-generated natural voices
- 🤖 **Ask Bible AI** (Premium) - Get biblical answers to your questions
- 📚 **Christian Books** (Premium) - Digital library of Christian literature
- ⭐ **Daily Verse** - Start each day with an inspiring Scripture

---

## 🏗️ Architecture

### Mobile App
- **Framework:** React Native with Expo
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Navigation:** React Navigation
- **UI:** Custom glassmorphism design system

### Backend API
- **Framework:** Node.js + Express
- **Language:** TypeScript
- **Database:** PostgreSQL + Redis
- **ORM:** Prisma
- **Authentication:** JWT + OAuth2

### Admin Panel
- **Framework:** Next.js 14
- **Language:** TypeScript
- **UI:** Shadcn/ui + Tailwind CSS
- **Authentication:** NextAuth.js with 2FA

---

## 📦 Project Structure

```
hymnora/
├── mobile-app/          # React Native mobile application
├── backend/             # Node.js API server
├── admin-panel/         # Next.js admin dashboard
├── shared/              # Shared types and utilities
├── scripts/             # Database seeding and migration scripts
└── docs/                # Complete documentation
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Expo CLI
- Android Studio or Xcode

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/hymnora.git
cd hymnora
```

2. **Set up the backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npx prisma migrate deploy
npm run seed
npm run dev
```

3. **Set up the mobile app**
```bash
cd mobile-app
npm install
cp .env.example .env
# Edit .env with your configuration
expo start
```

4. **Set up the admin panel**
```bash
cd admin-panel
npm install
cp .env.local.example .env.local
# Edit .env.local
npm run dev
```

### Using Docker

```bash
docker-compose up -d
```

---

## 📱 Mobile App Features

### Free Features
- ✅ Complete Bible reading
- ✅ Basic hymn library
- ✅ Create and save personal hymns
- ✅ Bible bookmarks
- ✅ Daily verse notifications
- ✅ Search functionality

### Premium Features
- 🔒 Bible Audio (AI-generated voices)
- 🔒 Bible Highlights & Notes
- 🔒 Detailed Bible Context
- 🔒 Visual Bible Explanations
- 🔒 Ask Bible AI (unlimited queries)
- 🔒 AI Voice Output
- 🔒 Christian Books Library
- 🔒 Advanced Bible features

### Subscription Plans
- **Monthly Premium:** ₹99/month
- **Yearly Premium:** ₹999/year (Save 17%)
- **Family Plan:** ₹1,499/year (Up to 6 members)
- **7-Day Free Trial** for first-time users

---

## 🎨 Design Philosophy

Hymnora embodies a unique **crystal-clear aesthetic** combining:

- **Pure White & Ice Blue Color Palette**
- **Glassmorphism Design System**
- **3D Glass Icon Bubbles**
- **Peaceful, Modern Interface**
- **Premium Apple-Quality Polish**

The visual language speaks of crystal clarity, spiritual purity, and divine peace — like looking through pristine glass toward heaven.

---

## 🛠️ Technology Stack

### Mobile App
- React Native 0.73
- Expo SDK 50
- TypeScript 5.3
- Redux Toolkit
- React Navigation 6
- React Native Reanimated 3
- Axios

### Backend
- Node.js 18+
- Express.js
- TypeScript 5.3
- Prisma ORM
- PostgreSQL 14
- Redis 7
- JWT Authentication
- OpenAI API
- ElevenLabs API
- Razorpay/Stripe

### Admin Panel
- Next.js 14
- React 18
- TypeScript 5.3
- Shadcn/ui
- Tailwind CSS
- NextAuth.js
- Recharts

---

## 📖 Documentation

- [Architecture](./ARCHITECTURE.md) - System architecture and technical decisions
- [Design System](./DESIGN_SYSTEM.md) - Complete design guidelines
- [Screen Hierarchy](./SCREEN_HIERARCHY.md) - All screens and navigation
- [Features](./FEATURES.md) - Detailed feature specifications
- [Admin Panel](./ADMIN_PANEL.md) - Admin dashboard documentation
- [Project Setup](./PROJECT_SETUP.md) - Setup and deployment guide

---

## 🧪 Testing

### Mobile App
```bash
npm test                # Unit tests
npm run test:e2e        # End-to-end tests
npm run test:coverage   # Test coverage
```

### Backend
```bash
npm test                # Unit tests
npm run test:integration # Integration tests
npm run test:api        # API tests
```

### Admin Panel
```bash
npm test                # Unit tests
npm run test:e2e        # E2E tests with Playwright
```

---

## 🚢 Deployment

### Mobile App
```bash
# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios

# Submit to stores
eas submit --platform all
```

### Backend
- Deploy to AWS/GCP/DigitalOcean
- Docker container deployment
- CI/CD with GitHub Actions

### Admin Panel
- Deploy to Vercel/Netlify
- Environment-specific builds
- Automatic deployments on merge

---

## 📊 Key Metrics & KPIs

### User Metrics
- Monthly Active Users (MAU)
- Daily Active Users (DAU)
- User Retention (30-day): Target 60%
- Free to Premium Conversion: Target 5-10%

### Engagement Metrics
- Average Session Duration: Target 10+ minutes
- Bible Reading Frequency: Target 3+ times/week
- Hymn Views per Session: Target 5+

### Revenue Metrics
- Monthly Recurring Revenue (MRR)
- Annual Recurring Revenue (ARR)
- Churn Rate: Target <5%

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

---

## 🔒 Security

Security is a top priority for Hymnora. We implement:

- ✅ JWT authentication with refresh tokens
- ✅ Password hashing with bcrypt
- ✅ Input validation and sanitization
- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF tokens
- ✅ Rate limiting
- ✅ HTTPS only in production
- ✅ 2FA for admin panel
- ✅ Regular security audits

### Reporting Security Issues

If you discover a security vulnerability, please email security@hymnora.app. Do not create a public GitHub issue.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👥 Team

### Development Team
- **Product Designer** - UI/UX Design
- **Mobile Developers** - React Native Development
- **Backend Developers** - API Development
- **Frontend Developer** - Admin Panel
- **QA Engineer** - Testing & Quality Assurance

### Support Team
- **Product Manager** - Product Strategy
- **DevOps Engineer** - Infrastructure
- **Content Manager** - Bible & Books Content
- **Customer Support** - User Assistance

### Advisors
- **Biblical Scholar** - Content Accuracy
- **Legal Advisor** - Compliance & Privacy

---

## 🌐 Links

- **Website:** [https://hymnora.app](https://hymnora.app)
- **API Documentation:** [https://api.hymnora.app/docs](https://api.hymnora.app/docs)
- **Support:** [support@hymnora.app](mailto:support@hymnora.app)
- **Twitter:** [@HymnoraApp](https://twitter.com/HymnoraApp)
- **Instagram:** [@hymnora_app](https://instagram.com/hymnora_app)

---

## 🙏 Acknowledgments

- Thank you to all the open-source projects that made Hymnora possible
- Bible translations provided by various Bible societies
- Hymn content from public domain sources
- Icons from [Lucide Icons](https://lucide.dev)
- UI inspiration from premium app designs

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes in each version.

---

## 🗺️ Roadmap

### Phase 1 (MVP - Months 1-3) ✅
- Core Bible reader
- Hymn library
- User authentication
- Basic subscription system

### Phase 2 (Months 4-6) 🚧
- Bible Audio (AI-generated)
- Ask Bible AI
- Christian Books
- Advanced Bible features
- Family plans

### Phase 3 (Months 7-9) 📅
- More Bible translations (10+ languages)
- Bible study plans
- Community features (limited)
- Sermon notes integration

### Phase 4 (Months 10-12) 🔮
- Offline-first architecture
- Widget support (iOS/Android)
- Apple Watch / Wear OS app
- TV app (Apple TV, Fire TV)
- Web version (PWA)

### Phase 5 (Year 2+) 💡
- Live Bible study rooms
- Collaborative study groups
- Pastor/church admin tools
- Custom church content
- API for third-party integrations

---

## 💬 Support

Need help? We're here for you!

- 📧 **Email:** support@hymnora.app
- 💬 **Discord:** [Join our community](https://discord.gg/hymnora)
- 📚 **Documentation:** [docs.hymnora.app](https://docs.hymnora.app)
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/yourusername/hymnora/issues)

---

## ⭐ Show Your Support

If you find Hymnora helpful, please consider:

- ⭐ Starring this repository
- 🐦 Sharing on social media
- 📝 Writing a review
- 💬 Telling your church community
- 🙏 Praying for the project

---

**Made with ❤️ and faith to glorify God and help believers grow in their walk with Christ.**

---

**Last Updated:** September 23, 2026  
**Version:** 1.0.0  
**Status:** In Active Development
