# Titus Maunu — Portfolio Website

A high-performance personal portfolio built with **Next.js 16 (App Router)** and **Tailwind CSS v4**, featuring a modern **Frutiger Aero / Glassmorphic Daylight** aesthetic with an interactive **Daylight ☀️ / Midnight 🌙** theme toggle.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v20+ recommended)
- npm, pnpm, or bun

### Commands
```bash
# Install dependencies
npm install

# Start local development server (runs on http://localhost:3000)
npm run dev

# Create an optimized production build
npm run build

# Start the production server
npm run start
```

---

## 📝 How to Edit Website Content

All portfolio content is organized cleanly in simple TypeScript arrays and components in the [`app/`](file:///home/tmaunu/Projects/Website_v2/app) and [`components/`](file:///home/tmaunu/Projects/Website_v2/components) folders.

### 1. Work History / Experience (`app/page.tsx` & `components/ExperienceCard.tsx`)
Find the `EXPERIENCES` array in [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx):

```ts
const EXPERIENCES: Experience[] = [
  {
    id: "mavtech",                                    // Unique ID
    role: "Customer Service & IT Support",             // Job title
    company: "UNO MavTech",                           // Company / Org
    location: "Omaha, NE",                            // City, State
    period: "Dec 2025 – Present",                     // Date range
    current: true,                                    // Displays green "Active" badge
    description: "Frontline technical support...",    // Role overview
    highlights: [                                     // Key bullet points
      "Field and resolve direct tech support inquiries...",
      "Diagnose hardware faults and campus network services...",
    ],
    tags: ["IT Support", "Network Diagnostics"],      // Tags shown at the bottom
    emoji: "🎧",                                       // Role icon
    accent: "#0284c7",                                // Border & dot accent color
    url: "https://example.com",                       // Optional external link
  },
  // Add new positions by copying this block!
];
```

---

### 2. Projects (`app/page.tsx`)
Find the `PROJECTS` array in [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx):

```ts
const PROJECTS: Project[] = [
  {
    id: "magspoof",                                    // Unique ID
    title: "MagSpoof FlipperZero Module",              // Card title
    description: "Custom magnetic-stripe emulation...", // Short summary
    tags: ["Hardware Design", "PCB Layout"],           // Tags shown on card
    emoji: "💳",                                        // Card icon
    gradientFrom: "#38bdf8",                            // Banner gradient start
    gradientTo: "#1d4ed8",                              // Banner gradient end
    accentColor: "#0284c7",                             // Accent color for bullets
    githubUrl: "https://github.com/The-Best-Titus/repo",// Optional (omit for "Private Repo")
    highlights: [                                       // Bullet points
      "Multi-layer PCB designed in KiCad",
      "Hand-wound coils tuned to resonant frequency",
    ],
  },
];
```

---

### 3. Profile Photo & Bio (`app/page.tsx` & `public/`)
- **Profile Photo**: Drop your photo into [`public/Titus.jpg`](file:///home/tmaunu/Projects/Website_v2/public/Titus.jpg) (also symlinked as `public/Titus.png`). The site displays it prominently right on the front page (Hero section) inside a dedicated `titus_maunu.jpg` Vista showcase window (native 3:4 portrait aspect ratio) with specular gloss sheen and live status badge, as well as in the About section.
- **Bio Story**: Search for `titus_maunu.profile` in [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx) to modify your background and bio text.
- **Availability Status**:
  - In [`components/Navbar.tsx`](file:///home/tmaunu/Projects/Website_v2/components/Navbar.tsx): Search for `Available · Summer 2027`.
  - In [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx): Search for `Seeking Summer 2027 EE Internships` and `Open to Opportunities`.

---

### 4. Work History & Education (`app/page.tsx`)
In the `experience` section of [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx):
- **Work History & Education Tint**: Styled with a warm sunset amber/orange Aero glass tint to contrast with the cyan/blue sections.
- **Education Window (`education.nfo`)**: Update your university, degree, expected graduation date, high school, and resume button.

---

### 5. Skills & Progress Bars (`app/page.tsx`)
Find the `SKILLS` array in [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx):

```ts
const SKILLS = [
  { name: "KiCad / PCB Layout", pct: 85, color: "#0284c7" },
  { name: "Embedded C / C++",   pct: 88, color: "#16a34a" },
  { name: "Python",             pct: 78, color: "#ea580c" },
  { name: "Linux & Shell",      pct: 82, color: "#0284c7" },
  { name: "CAD / Fusion 360",   pct: 70, color: "#16a34a" },
];
```

---

### 6. Interests ("Beyond the Breadboard") (`app/page.tsx`)
Find the `INTERESTS` array in [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx):

```ts
const INTERESTS = [
  {
    emoji: "🎵",
    title: "Collegiate A Cappella",
    subtitle: "Pitch Slappers",
    body: "Active member arranging and performing multi-part vocal harmonies on stage.",
    accent: "#7c3aed",
  },
  {
    emoji: "📷",
    title: "Photography",
    subtitle: "Sony Mirrorless",
    body: "Started learning Photography and how to compose a photo, adjust settings, and edit raw images.",
    accent: "#0284c7",
  },
];
```

---

### 7. Social Links, Resume & Email
- **Email**: `titus@maunu.dev` is configured in [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx) (`contact.me` window and footer).
- **LinkedIn**: `https://linkedin.com/in/tmaunu` in [`components/Navbar.tsx`](file:///home/tmaunu/Projects/Website_v2/components/Navbar.tsx) and [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx).
- **GitHub**: `https://github.com/The-Best-Titus` in [`components/Navbar.tsx`](file:///home/tmaunu/Projects/Website_v2/components/Navbar.tsx) and [`app/page.tsx`](file:///home/tmaunu/Projects/Website_v2/app/page.tsx).
- **Resume PDF**: Drop your latest PDF into [`public/resume.pdf`](file:///home/tmaunu/Projects/Website_v2/public/resume.pdf). All "Download Resume" buttons link directly to it.

---

### 8. Site Metadata & SEO (`app/layout.tsx`)
In [`app/layout.tsx`](file:///home/tmaunu/Projects/Website_v2/app/layout.tsx), update page `title`, `description`, `keywords`, and `authors`.

---

## 🎨 Design & Styling Reference

- **Theme Colors & Variables**: Defined in [`app/globals.css`](file:///home/tmaunu/Projects/Website_v2/app/globals.css) under `:root` (Light Mode default) and `[data-theme="dark"]` (Dark Mode).
- **Theme Switcher**: [`components/ThemeToggle.tsx`](file:///home/tmaunu/Projects/Website_v2/components/ThemeToggle.tsx) persists user preferences in `localStorage`.
- **Background Dissipating Lines**: [`components/BackgroundScanlines.tsx`](file:///home/tmaunu/Projects/Website_v2/components/BackgroundScanlines.tsx) fades out background lines smoothly as you scroll down.
