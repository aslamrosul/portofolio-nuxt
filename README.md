# 🚀 Portfolio Nuxt.js

Portfolio website yang modern dan responsif dengan sistem admin dashboard untuk mengelola konten. Dibangun dengan **Nuxt 4**, **Vue 3**, **Prisma**, dan **PostgreSQL (Supabase)**.

## ✨ Fitur Utama

- 🎨 **Portfolio Display** - Tampilan portofio profesional dengan desain dark theme modern
- 🔐 **Admin Dashboard** - Sistem login untuk mengelola konten portfolio secara real-time
- 💾 **Database Integration** - Prisma ORM dengan PostgreSQL untuk penyimpanan data yang aman
- 🔄 **API REST** - API endpoints untuk mengambil dan memperbarui data portfolio
- 📱 **Fully Responsive** - Optimized untuk desktop, tablet, dan mobile
- ⚡ **Performance** - Built dengan Nuxt 4 untuk loading yang cepat
- 🎭 **Animasi Smooth** - Fade animations dan transisi halus untuk UX yang baik

## 🔧 Tech Stack

- **Frontend**: [Nuxt 4](https://nuxt.com) + [Vue 3](https://vuejs.org)
- **Backend**: Nuxt Server Routes
- **Database**: [Prisma](https://www.prisma.io) + PostgreSQL
- **Hosting Database**: [Supabase](https://supabase.com)
- **Styling**: CSS Custom Properties (Dark Theme)
- **Package Manager**: npm/pnpm/yarn/bun

## 📋 Struktur Konten

Portfolio terdiri dari beberapa section:
- **Hero** - Intro dengan nama, role, dan deskripsi singkat
- **About** - Biografi lengkap dengan foto profil
- **Experience** - Riwayat pendidikan dan pengalaman kerja
- **Projects** - Proyek featured dan other projects
- **Contact** - Section untuk hubungi penulis
- **Social Links** - Link ke social media

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/aslamrosul/portofolio-nuxt.git
cd portofolio-nuxt
```

### 2. Install Dependencies

```bash
npm install
# atau gunakan pnpm, yarn, bun
```

### 3. Setup Database

Lihat [SETUP.md](./SETUP.md) untuk instruksi detail setup Supabase dan Prisma.

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema ke database
npm run prisma:push

# (Opsional) Seed database dengan data awal
npm run prisma:seed
```

### 4. Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### 5. (Opsional) Prisma Studio

Untuk melihat dan mengedit data database secara visual:

```bash
npm run prisma:studio
```

## 📁 Project Structure

```
├── app/
│   ├── app.vue                 # Root component
│   ├── components/             # Vue components
│   │   ├── Portfolio*.vue      # Public portfolio components
│   │   └── Admin*.vue          # Admin dashboard components
│   ├── composables/            # Vue composables
│   │   ├── usePortfolio.ts     # Portfolio data management
│   │   └── useFadeAnimation.ts # Animation composable
│   └── pages/                  # Page routes
│       ├── index.vue           # Public portfolio page
│       └── admin/
│           ├── login.vue       # Admin login page
│           └── dashboard.vue   # Admin dashboard page
├── server/
│   ├── api/
│   │   ├── auth.post.ts        # Authentication endpoint
│   │   ├── portfolio.get.ts    # Get portfolio data
│   │   └── portfolio.post.ts   # Update portfolio data
│   └── utils/
│       └── prisma.ts           # Prisma client setup
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Database seeding script
├── data/
│   └── portfolio.json          # Sample portfolio data
├── public/                     # Static files
├── nuxt.config.ts              # Nuxt configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies

```

## 🔌 API Endpoints

### Get Portfolio Data
```bash
GET /api/portfolio
```

Response: Mengembalikan semua data portfolio (hero, about, experience, projects, contact, socials)

### Update Portfolio Data
```bash
POST /api/portfolio
Authorization: Bearer <token>
```

Request body: Portfolio data yang ingin diupdate

### Authentication
```bash
POST /api/auth
```

Request body untuk login dan mendapatkan token autentikasi

## 📦 Available Scripts

```bash
# Development
npm run dev        # Start dev server

# Building
npm run build      # Build untuk production
npm run generate   # Generate static site
npm run preview    # Preview production build

# Database
npm run prisma:generate   # Generate Prisma client
npm run prisma:migrate    # Create database migration
npm run prisma:push       # Push schema ke database
npm run prisma:seed       # Seed database dengan data awal
npm run prisma:studio     # Open Prisma Studio UI
```

## 🔐 Environment Variables

Buat file `.env` di root project:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database"

# (Opsional) Admin credentials & JWT secret
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
JWT_SECRET=your-secret-key
```

## 📱 Features Detail

### Admin Dashboard
- Login system untuk keamanan
- Edit hero section (intro, name, roles, description)
- Manage about section dengan foto profil
- Add/edit/delete experience entries
- Manage featured dan other projects
- Update contact information
- Edit social media links

### Public Portfolio
- Responsive design untuk semua ukuran screen
- Smooth animations saat scroll
- Social media links yang interactive
- Contact section untuk komunikasi
- Dark theme yang nyaman di mata

## 🎨 Customization

### Theme Colors

Edit CSS variables di `app/app.vue`:

```css
:root {
  --bg-dark: #0a192f;
  --bg-light: #112240;
  --text-lightest: #ccd6f6;
  --text-light: #a8b2d1;
  --text-dark: #8892b0;
  --accent: #64ffda;
  --accent-dark: #64ffda2a;
}
```

### Font

Ubah font di CSS variables atau di component styles sesuai preferensi Anda.

## 📚 Documentation

Untuk setup lebih detail, lihat [SETUP.md](./SETUP.md)

## 🤝 Contributing

Contributions, issues, dan feature requests adalah welcome! 

## 📝 License

Proyek ini open source dan tersedia untuk penggunaan dan modifikasi.

## 👨‍💻 Author

**Aslam Rosul Ahmad**
- GitHub: [@aslamrosul](https://github.com/aslamrosul)
- Portfolio: [Visit](http://localhost:3000)

---

Dibuat dengan ❤️ menggunakan Nuxt 4 & Vue 3

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
