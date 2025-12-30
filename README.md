# Template Purple - Next.js Admin Dashboard

![Dashboard Preview](public/assets/brand/dashboard-brand.png)

Template admin dashboard modern dengan tema purple yang dibangun menggunakan Next.js 16, TypeScript, Redux Toolkit, dan Tailwind CSS. Template ini dirancang untuk memberikan pengalaman pengembangan yang cepat dan efisien dengan komponen UI yang siap pakai.

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Persyaratan Sistem](#-persyaratan-sistem)
- [Instalasi & Setup](#-instalasi--setup)
- [Struktur Proyek](#-struktur-proyek)
- [Cara Menjalankan](#-cara-menjalankan)
- [Arsitektur & Komponen](#-arsitektur--komponen)
- [Styling & Tema](#-styling--tema)
- [State Management](#-state-management)
- [Scripts yang Tersedia](#-scripts-yang-tersedia)
- [Deployment](#-deployment)

## ✨ Fitur Utama

- 🎨 **Tema Purple Modern** - Desain dark theme dengan skema warna purple yang elegan
- 📱 **Responsive Design** - Fully responsive untuk desktop, tablet, dan mobile
- 🔐 **Sistem Autentikasi** - Halaman login dan registrasi yang siap digunakan
- 📊 **Dashboard Layout** - Layout dashboard dengan sidebar yang dapat di-collapse
- 🧩 **Komponen UI Siap Pakai** - Kumpulan komponen UI yang dapat digunakan kembali
- 🔄 **State Management** - Redux Toolkit untuk manajemen state global
- 🎯 **TypeScript** - Full TypeScript support untuk type safety
- ⚡ **Next.js 16** - Menggunakan App Router terbaru dari Next.js
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework dengan custom theme
- 📦 **Modular Architecture** - Struktur kode yang terorganisir dan mudah di-maintain

## 🛠 Teknologi yang Digunakan

### Core Framework

- **Next.js 16.1.1** - React framework dengan App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript

### State Management

- **Redux Toolkit 2.11.2** - State management library
- **React Redux 9.2.0** - React bindings untuk Redux

### Styling

- **Tailwind CSS 4.0.0** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.23** - CSS vendor prefixing

### Icons & UI

- **Lucide React 0.562.0** - Icon library

### Development Tools

- **ESLint 9** - Code linting
- **ESLint Config Next** - Next.js ESLint configuration

## 💻 Persyaratan Sistem

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 atau **yarn** >= 1.22.0 atau **pnpm** >= 8.0.0

## 🚀 Instalasi & Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd template-purple
```

### 2. Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Environment Variables (Opsional)

Buat file `.env.local` di root project jika diperlukan:

```env
# Contoh environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Jalankan Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## 📁 Struktur Proyek

```
template-purple/
├── public/                 # Static assets
│   ├── assets/
│   │   └── brand/
│   │       └── dashboard-brand.png  # Dashboard preview image
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (auth)/         # Auth route group
│   │   │   ├── layout.tsx  # Auth layout
│   │   │   ├── signin/     # Sign in page
│   │   │   └── signup/     # Sign up page
│   │   ├── (dashboard)/    # Dashboard route group
│   │   │   ├── layout.tsx  # Dashboard layout
│   │   │   ├── page.tsx    # Dashboard home
│   │   │   ├── analytics/  # Analytics page
│   │   │   ├── settings/   # Settings page
│   │   │   └── users/      # Users page
│   │   ├── layout.tsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   └── not-found.tsx   # 404 page
│   ├── components/         # React components
│   │   ├── layout/         # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileSidebar.tsx
│   │   │   └── Navbar.tsx
│   │   ├── providers/      # Context providers
│   │   │   ├── AuthGuard.tsx         # Authentication guard
│   │   │   ├── AuthProvider.tsx     # Authentication context
│   │   │   ├── PermissionGuard.tsx  # Permission-based access control
│   │   │   ├── ReduxProvider.tsx    # Redux store provider
│   │   │   └── ThemeProvider.tsx    # Theme context provider
│   │   ├── shared/         # Shared components
│   │   │   └── PageHeader.tsx
│   │   └── ui/             # UI components
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── ConfirmDialog.tsx
│   │       ├── EmptyState.tsx
│   │       ├── ErrorState.tsx
│   │       ├── LoadingState.tsx
│   │       ├── Modal.tsx
│   │       ├── SkeletonLoader.tsx
│   │       ├── StatCard.tsx
│   │       ├── Table.tsx
│   │       └── Toast.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── usePermissions.ts
│   │   └── useTheme.ts
│   ├── lib/                # Utility functions
│   │   ├── localStorage.ts
│   │   ├── permissions.ts
│   │   └── utils.ts
│   ├── store/              # Redux store
│   │   ├── index.ts        # Store configuration
│   │   ├── hooks.ts        # Typed hooks
│   │   └── slices/         # Redux slices
│   │       ├── authSlice.ts
│   │       ├── uiSlice.ts
│   │       └── userSlice.ts
│   └── types/              # TypeScript types
│       └── index.ts
├── DESIGN_TOKENS.md        # Design system documentation
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🏃 Cara Menjalankan

### Development Mode

```bash
npm run dev
```

Menjalankan development server dengan hot-reload di [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

Membangun aplikasi untuk production. Output akan berada di folder `.next`.

### Production Server

```bash
npm run start
```

Menjalankan production server setelah build. Pastikan sudah menjalankan `npm run build` terlebih dahulu.

### Linting

```bash
npm run lint
```

Menjalankan ESLint untuk mengecek kualitas kode.

## 🏗 Arsitektur & Komponen

### Layout System

Proyek ini menggunakan **Next.js App Router** dengan route groups untuk mengorganisir layout:

#### Root Layout (`src/app/layout.tsx`)

- Menyediakan semua Context Providers (ThemeProvider, ReduxProvider, AuthProvider)
- Mengatur font Inter dari Google Fonts
- Metadata dasar untuk SEO
- Wrapper untuk seluruh aplikasi

#### Auth Layout (`src/app/(auth)/layout.tsx`)

- Layout khusus untuk halaman autentikasi
- Background gradient purple
- Centered content dengan max-width

#### Dashboard Layout (`src/app/(dashboard)/layout.tsx`)

- Layout untuk halaman dashboard
- Mengintegrasikan Sidebar, MobileSidebar, Navbar, dan Footer
- Toast notifications system
- AuthGuard untuk proteksi route
- Responsive sidebar dengan collapse functionality

### Komponen Utama

#### Layout Components

**Sidebar** (`src/components/layout/Sidebar.tsx`)

- Sidebar navigasi untuk desktop
- Dapat di-collapse/expand
- Active state highlighting
- Responsive untuk desktop (hidden di mobile)

**MobileSidebar** (`src/components/layout/MobileSidebar.tsx`)

- Sidebar untuk mobile devices
- Overlay design
- Toggle functionality

**Navbar** (`src/components/layout/Navbar.tsx`)

- Top navigation bar
- User profile menu dengan dropdown
- Notifications dengan badge indicator
- Theme toggle (light/dark mode)
- Search functionality

**Footer** (`src/components/layout/Footer.tsx`)

- Footer component untuk dashboard
- Copyright information
- Additional links (opsional)

#### UI Components

Semua komponen UI berada di `src/components/ui/`:

- **Button** - Button component dengan berbagai variant dan sizes
- **Badge** - Badge untuk status atau label dengan berbagai variant (success, warning, error, info)
- **Table** - Data table dengan sorting dan pagination support
- **Modal** - Modal dialog component dengan overlay
- **Toast** - Toast notification system dengan auto-dismiss
- **ConfirmDialog** - Confirmation dialog untuk aksi penting
- **EmptyState** - Empty state component dengan action button
- **ErrorState** - Error state component dengan retry functionality
- **LoadingState** - Loading state component dengan spinner
- **SkeletonLoader** - Loading skeleton untuk cards dan tables
- **StatCard** - Statistik card dengan trend indicator (up/down) dan icon

### Providers & Guards

#### Context Providers

**ThemeProvider** (`src/components/providers/ThemeProvider.tsx`)

- Mengelola tema aplikasi (light/dark mode)
- Persist theme preference ke localStorage
- Global theme context untuk seluruh aplikasi

**ReduxProvider** (`src/components/providers/ReduxProvider.tsx`)

- Redux store provider untuk state management
- Wrapper untuk Redux Toolkit store
- Typed hooks untuk TypeScript support

**AuthProvider** (`src/components/providers/AuthProvider.tsx`)

- Authentication context provider
- Mengelola state autentikasi global
- Helper functions untuk auth operations

#### Route Guards

**AuthGuard** (`src/components/providers/AuthGuard.tsx`)

- Proteksi route untuk halaman yang memerlukan autentikasi
- Redirect ke signin jika belum login
- Wrapper untuk protected routes

**PermissionGuard** (`src/components/providers/PermissionGuard.tsx`)

- Permission-based access control
- Restrict access berdasarkan user permissions
- Conditional rendering berdasarkan role

### Custom Hooks

**useTheme** (`src/hooks/useTheme.ts`)

- Hook untuk mengakses dan mengubah tema
- Toggle light/dark mode
- Get current theme state

**usePermissions** (`src/hooks/usePermissions.ts`)

- Hook untuk mengecek user permissions
- Helper untuk permission-based rendering
- Role-based access control utilities

### Pages

#### Auth Pages

- `/signin` - Halaman login dengan form validation
- `/signup` - Halaman registrasi dengan form validation

#### Dashboard Pages

- `/` - Dashboard utama dengan statistik cards dan recent activity
- `/users` - Manajemen users dengan table dan CRUD operations
- `/analytics` - Analytics & reports dengan charts dan metrics
- `/settings` - Pengaturan aplikasi dan user preferences

## 🎨 Styling & Tema

### Tailwind Configuration

Proyek ini menggunakan **Tailwind CSS 4** dengan custom theme purple. Konfigurasi tema dapat ditemukan di `tailwind.config.js`:

#### Color Palette

```javascript
colors: {
  background: {
    DEFAULT: "#0B0A17",      // Dark background utama
    secondary: "#120F2E",    // Background sekunder
  },
  surface: "#2D1E5F",        // Surface color
  primary: "#5B31D6",         // Primary purple
  accent: "#8B5CF6",          // Accent purple
  text: {
    primary: "#FFFFFF",       // Text utama
    secondary: "#D1D5DB",     // Text sekunder
    muted: "#6B7280",         // Text muted
  },
}
```

#### Custom Utilities

- **Gradient Purple** - Gradient background purple
- **Gradient Purple Soft** - Gradient background purple dengan opacity
- **Text Gradient** - Text dengan gradient effect
- **Glow Shadow** - Shadow dengan glow effect

#### Custom Animations

- **Shimmer** - Shimmer loading animation
- **Slide In** - Slide in animation

### Global Styles

File `src/app/globals.css` berisi:

- Custom scrollbar styling
- Global reset styles
- Custom utility classes
- Layout fixes untuk sidebar

## 🔄 State Management

Proyek ini menggunakan **Redux Toolkit** untuk state management dengan struktur yang terorganisir:

### Store Configuration

Store dikonfigurasi di `src/store/index.ts` dengan tiga slice utama:

- `auth` - Authentication state
- `ui` - UI state (sidebar, modals, toasts)
- `user` - User data state

### Redux Slices

#### Auth Slice (`src/store/slices/authSlice.ts`)

Mengelola state autentikasi:

- `isAuthenticated` - Status autentikasi
- `user` - Data user yang login
- `loading` - Loading state

Actions:

- `setUser` - Set user data dan authenticated state
- `logout` - Logout user
- `setLoading` - Set loading state

#### UI Slice (`src/store/slices/uiSlice.ts`)

Mengelola state UI:

- `sidebarCollapsed` - Status collapse sidebar
- `modal` - Modal state
- `toasts` - Toast notifications

#### User Slice (`src/store/slices/userSlice.ts`)

Mengelola data users (jika diperlukan)

### Typed Hooks

File `src/store/hooks.ts` menyediakan typed hooks:

- `useAppDispatch` - Typed dispatch hook
- `useAppSelector` - Typed selector hook

### Usage Example

```typescript
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUser } from "@/store/slices/authSlice";

// Di dalam component
const dispatch = useAppDispatch();
const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

// Dispatch action
dispatch(setUser({ id: "1", name: "John", email: "john@example.com" }));
```

## 📜 Scripts yang Tersedia

| Script          | Deskripsi                       |
| --------------- | ------------------------------- |
| `npm run dev`   | Menjalankan development server  |
| `npm run build` | Build aplikasi untuk production |
| `npm run start` | Menjalankan production server   |
| `npm run lint`  | Menjalankan ESLint              |

## 🚢 Deployment

### Vercel (Recommended)

Cara termudah untuk deploy adalah menggunakan [Vercel Platform](https://vercel.com):

1. Push code ke GitHub/GitLab/Bitbucket
2. Import project di Vercel
3. Vercel akan otomatis detect Next.js dan configure build settings
4. Deploy!

### Build untuk Production

```bash
npm run build
```

Build output akan berada di folder `.next`. Pastikan untuk:

1. Set environment variables di platform deployment
2. Configure production database/API endpoints
3. Set up proper domain dan SSL

### Environment Variables

Pastikan untuk set environment variables berikut di platform deployment:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
# Tambahkan environment variables lainnya sesuai kebutuhan
```

### Docker (Opsional)

Jika ingin menggunakan Docker, buat `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 TypeScript Types

Semua TypeScript types didefinisikan di `src/types/index.ts`:

- `User` - User interface
- `NavigationItem` - Navigation item interface
- `StatCardData` - Stat card data interface
- `TableColumn<T>` - Table column interface
- `Toast` - Toast notification interface
- `ModalState` - Modal state interface

## 🔧 Customization

### Mengubah Tema Warna

Edit file `tailwind.config.js` untuk mengubah color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#YOUR_COLOR",
      // ... colors lainnya
    }
  }
}
```

Untuk referensi lengkap design tokens, lihat file `DESIGN_TOKENS.md`.

### Menambah Halaman Baru

1. Buat folder baru di `src/app/(dashboard)/`
2. Buat file `page.tsx` di dalam folder tersebut
3. Tambahkan navigation item di `Sidebar.tsx` jika diperlukan
4. Gunakan `PageHeader` component untuk konsistensi layout

### Menambah Redux Slice

1. Buat file baru di `src/store/slices/`
2. Export reducer dari slice menggunakan `createSlice` dari Redux Toolkit
3. Import dan tambahkan ke store di `src/store/index.ts`
4. Gunakan typed hooks dari `src/store/hooks.ts`

### Menambah Provider Baru

1. Buat file provider di `src/components/providers/`
2. Wrap dengan Context.Provider
3. Tambahkan ke Root Layout (`src/app/layout.tsx`)
4. Buat custom hook untuk mengakses context (opsional)

### Menambah Komponen UI Baru

1. Buat file component di `src/components/ui/`
2. Gunakan design tokens dari `DESIGN_TOKENS.md`
3. Export component dengan TypeScript types
4. Tambahkan ke dokumentasi jika diperlukan

## 📚 Resources

### Dokumentasi Eksternal

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

### Dokumentasi Internal

- **DESIGN_TOKENS.md** - Referensi lengkap design system, color palette, spacing, typography, dan component patterns
- **README.md** - Dokumentasi proyek ini

### Best Practices

- Gunakan TypeScript untuk semua file baru
- Ikuti struktur folder yang sudah ada
- Gunakan design tokens dari `DESIGN_TOKENS.md` untuk konsistensi
- Test komponen sebelum commit
- Gunakan ESLint untuk menjaga kualitas kode

## 📄 License

Proyek ini adalah template yang dapat digunakan secara bebas untuk proyek pribadi maupun komersial.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat issue atau pull request jika ingin berkontribusi.

---

**Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS**
