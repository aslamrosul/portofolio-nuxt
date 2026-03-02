# Setup Portfolio Nuxt.js dengan Prisma & Supabase

## 1. Setup Database Supabase

1. Buka [Supabase](https://supabase.com) dan buat project baru
2. Setelah project dibuat, buka **Settings** > **Database**
3. Copy **Connection String** (pilih yang mode: Transaction)
4. Paste ke file `.env`:

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/postgres"
```

## 2. Generate Prisma Client & Migrate Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema ke database
npm run prisma:push
```

## 3. Seed Database dengan Data Awal

```bash
npm run prisma:seed
```

## 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

## 5. (Opsional) Buka Prisma Studio

Untuk melihat dan edit data di database:

```bash
npm run prisma:studio
```

## API Endpoints

- `GET /api/portfolio` - Ambil semua data portfolio
- `POST /api/portfolio` - Update data portfolio


## Admin Dashboard

### Login ke Admin

1. Buka `http://localhost:3000/admin/login`
2. Login dengan kredensial default:
   

### Ganti Password Admin

Edit file `server/api/auth.post.ts` 

### Fitur Admin Dashboard

- Edit Hero Section (intro, nama, roles, deskripsi)
- Edit About Section (teks, foto profil)
- Kelola Experience (tambah, edit, hapus)
- Kelola Featured Projects (tambah, edit, hapus)
- Kelola Other Projects (tambah, edit, hapus)
- Edit Contact Info
- Edit Social Media Links
- Settings (CV URL, accent color)

Semua perubahan akan langsung tersimpan ke database Supabase.
