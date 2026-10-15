import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import type { Experience } from "@/components/ExperienceCard";
import ThemeToggle from "@/components/ThemeToggle";
import BackgroundScanlines from "@/components/BackgroundScanlines";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: "magspoof",
    title: "MagSpoof FlipperZero Module",
    description:
      "Custom magnetic-stripe emulation module for Flipper Zero. Full hardware–software co-design: schematics, PCB layout,and hand-wound coils.",
    tags: ["Hardware Design", "PCB Layout"],
    emoji: "💳",
    gradientFrom: "#38bdf8",
    gradientTo: "#1d4ed8",
    accentColor: "#0284c7",
    highlights: [
      "Multi-layer PCB designed in KiCad",
      "Hand-wound coils tuned to resonant frequency",
    ],
  },
  {
    id: "microphone",
    title: "Custom XLR Microphone",
    description:
      "Took basic PG58 Microphone and resued shell with upgraded internals from beta 58A. Rebuilt Microphone with soldering, 3d modeling and 3d printing custom TPU componet mount, and slimmed 58a capsule to fit",
    tags: ["Soldering", "3D Printing", "CAD/Fusion 360"],
    emoji: "🎤",
    gradientFrom: "#fb923c",
    gradientTo: "#ea580c",
    accentColor: "#ea580c",
    highlights: [
      "Designed 3D models for custom parts",
      "Connected parts and switches via soldering",
      "Used personal 3D printer to make TPU mount",
    ],
  },
  {
    id: "audio-setup",
    title: "Week end Desktop Audio & Guitar Interface",
    description:
      "Multi-channel desktop studio integrating digital amp, low-latency USB audio interface, and acoustic tuning for live digital guitar simulation.",
    tags: ["Audio Electronics", "Amplification", "Signal Routing"],
    emoji: "🎛️",
    gradientFrom: "#c084fc",
    gradientTo: "#7c3aed",
    accentColor: "#7c3aed",
    highlights: [
      "Lepai class-D amp + custom bookshelf driver and acoustic tuning",
      "Behringer UM2 routed for <5 ms ASIO round-trip",
      "Full guitar → interface → amp sim → monitor chain",
      "Built in weekend for $50",
    ],
  },
  {
    id: "homelab",
    title: "Homelab Server",
    description:
      "Built a Homelab Server from a Micro pc and external Hard Drive Encloser. Runs Ubuntu Server with Docker to host personal files, tools, ai models, and media colleciton",
    tags: ["Linux", "Docker", "Hard-ware", "custom Fabrication"],
    emoji: "☁",
    gradientFrom: "#4ade80",
    gradientTo: "#16a34a",
    accentColor: "#16a34a",
    highlights: [
      "Linux Server and Lan-KVM",
      "Docker Apps and Cloudflare tunnels",
      "Custom harware in hand built wood mini Server Rack",
    ],
  },
];

const EXPERIENCES: Experience[] = [
  {
    id: "mavtech",
    role: "Customer Service & IT Support",
    company: "UNO MavTech",
    location: "Omaha, NE",
    period: "Dec 2025 – Present",
    current: true,
    description:
      "Frontline technical support across the University of Nebraska network ecosystem. Troubleshooting workstation hardware, wireless authentication, and enterprise user accounts.",
    highlights: [
      "Field and resolve direct tech support inquiries for university students, faculty, and staff",
      "Diagnose hardware faults, Wi-Fi credentials, and campus network services",
      "Route complex infrastructure and directory issues to appropriate system engineering teams",
    ],
    tags: ["IT Support", "Network Diagnostics", "Enterprise Systems", "Active Directory"],
    emoji: "🎧",
    accent: "#0284c7",
  },
  {
    id: "securitas",
    role: "Security Officer",
    company: "Securitas (Applied Digital)",
    location: "Valentine, NE",
    period: "Jun 2026 – Aug 2026",
    current: false,
    description:
      "Enforced site security policy and physical security controls protecting mission-critical digital infrastructure, high-density compute, and electrical power systems.",
    highlights: [
      "Monitored facility access and escorted contractor teams to maintain strict perimeter security",
      "Conducted physical safety rounds to identify potential infrastructure threats and operational risks",
      "Ensured zero safety threats to on-premises personnel and mission-critical hardware",
    ],
    tags: ["Critical Infrastructure", "Site Security", "Risk Mitigation", "Protocol Enforcement"],
    emoji: "🛡️",
    accent: "#ea580c",
  },
  {
    id: "kvsh-radio",
    role: "On-Air DJ & Radio Host",
    company: "KVSH Radio (Heart City)",
    location: "Valentine, NE",
    period: "Dec 2025 – Jan 2026",
    current: false,
    url: "https://kvsh.com",
    description:
      "Engineered and hosted live daily radio broadcasts, producing community news segments and delivering on-air commercial voiceovers.",
    highlights: [
      "Produced daily community segments covering local events, weather, and breaking updates",
      "Recorded and voiced commercial advertisements with strict broadcast timing constraints",
      "Operated broadcast audio console, microphone channel strips, and live playback feeds",
    ],
    tags: ["Live Broadcasting", "Audio Engineering", "Voiceover", "Public Communications"],
    emoji: "🎙️",
    accent: "#7c3aed",
  },
  {
    id: "cdt-intern",
    role: "IT Systems Intern",
    company: "CDT / Cherry County High School",
    location: "Valentine, NE",
    period: "May 2025 – Aug 2025",
    current: false,
    description:
      "Managed school district IT infrastructure and hardware fleet independently for multi-week stretches during summer deployment cycles.",
    highlights: [
      "Diagnosed, repaired, and deployed Apple MacBooks, iPads/iOS, Windows workstations, and Chromebooks",
      "Serviced classroom AV systems, digital projectors, and campus network drops",
      "Audited device inventory and pushed OS configuration images across hundreds of student endpoints",
    ],
    tags: ["Hardware Fleet", "macOS & iOS", "Windows Deployment", "Classroom AV", "Diagnostics"],
    emoji: "💻",
    accent: "#16a34a",
  },
];

const SPEC_BADGES = [
  { icon: "⚡", label: "PCB Design & Layout" },
  { icon: "🐧", label: "Linux and Docker" },
  { icon: "🔧", label: "Rapid Prototyping" },
  { icon: "✍", label: "LLama and AI testing" },
  { icon: "📡", label: "RF & Signal Integrity" },
  { icon: "🛠️", label: "Full Hardware Stack" },
];

const INTERESTS = [
  {
    emoji: "🎵",
    title: "Collegiate A Cappella",
    subtitle: "Pitch Slappers",
    body: "Active member arranging and performing multi-part vocal harmonies on stage. Ensemble discipline applied directly to collaborative engineering teamwork.",
    accent: "#7c3aed",
  },
  {
    emoji: "🎸",
    title: "Guitar — Acoustic & Electric",
    subtitle: "Self-taught",
    body: "Teaching myself Guitar. Built the desktop studio rig (see Projects) to run amp simulations and eventully record arrangements.",
    accent: "#ea580c",
  },
  {
    emoji: "📷",
    title: "Photography",
    subtitle: "Sony Mirrorless",
    body: "Started learning Photography and how to comprise a photo, adjust setting, and edit the raw image",
    accent: "#0284c7",
  },
  {
    emoji: "🚗",
    title: "Working on cars",
    subtitle: "Diagnosis and Repair",
    body: "Enjoy repair cars and learning how the systems integrate. I've successfully replaced: Radiators/Condensors, Alternatiors, and Fixed bent Frame",
    accent: "#ea580c",
  },
];

const SKILLS = [
  { name: "KiCad / PCB Layout", pct: 65, color: "#0284c7" },
  { name: "Embedded C / C++", pct: 85, color: "#16a34a" },
  { name: "Python", pct: 60, color: "#ea580c" },
  { name: "Linux & Docker", pct: 90, color: "#0284c7" },
  { name: "Llama (Personal AI Hosting)", pct: 60, color: "#7c3aed" },
  { name: "CAD / Fusion 360", pct: 70, color: "#16a34a" },
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Vista Explorer-style window with titlebar */
function VistaWindow({
  title,
  children,
  accentColor = "#0284c7",
  className = "",
  titleRight,
  variant = "default",
}: {
  title: string;
  children: React.ReactNode;
  accentColor?: string;
  className?: string;
  titleRight?: React.ReactNode;
  variant?: "default" | "warm";
}) {
  const isWarm = variant === "warm";

  return (
    <div
      className={`aero-window ${isWarm ? "aero-window-warm" : ""} ${className}`}
      style={{ borderRadius: 8 }}
    >
      {/* Titlebar */}
      <div
        className={`aero-titlebar ${isWarm ? "aero-titlebar-warm" : ""} flex items-center justify-between px-3.5 py-2`}
      >
        <div className="flex items-center gap-2">
          {/* Accent dot */}
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: accentColor,
              boxShadow: `0 0 6px ${accentColor}`,
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
          <span
            className="text-xs font-semibold"
            style={{
              color: isWarm ? "#7c2d12" : "var(--titlebar-text)",
              textShadow: isWarm ? "0 1px 0 rgba(255,255,255,0.85)" : "var(--titlebar-text-shadow)",
            }}
          >
            {title}
          </span>
        </div>
        {titleRight && (
          <div
            className={isWarm ? "aero-titlebar-right" : ""}
            style={{ color: isWarm ? "#9a3412" : "var(--text-muted)", fontSize: "0.7rem", fontWeight: 600 }}
          >
            {titleRight}
          </div>
        )}
      </div>
      {/* Body */}
      <div
        className={`aero-window-body ${isWarm ? "aero-window-body-warm" : ""} p-3.5 sm:p-5`}
        style={{ borderRadius: "0 0 8px 8px" }}
      >
        {children}
      </div>
    </div>
  );
}

function HeroPortrait({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <VistaWindow
      title="titus_maunu.jpg"
      accentColor="#0284c7"
      titleRight={isMobile ? "Omaha, NE" : "Omaha, NE · EE '29"}
      className="shadow-2xl"
    >
      <div className="flex flex-col gap-2.5 sm:gap-3">
        <div
          style={{
            width: "100%",
            aspectRatio: "3 / 4",
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
            background: "rgba(0,0,0,0.05)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.08)",
            border: "1px solid var(--window-border)",
          }}
          className="group"
        >
          <img
            src="/Titus.jpg"
            alt="Titus Maunu — Hardware & Embedded Systems Engineer"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Frutiger Aero specular gloss sheen arc across top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "45%",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.08) 60%, transparent 100%)",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />

          {/* Floating status pill overlay on bottom of photo */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              right: 10,
              background: "rgba(15, 23, 42, 0.82)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              borderRadius: 8,
              padding: "6px 10px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.35)",
            }}
            className="flex items-center justify-between text-white"
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="status-dot" style={{ width: 7, height: 7 }} />
              <span className="text-[0.72rem] font-semibold tracking-wide truncate">
                Seeking Summer 2027
              </span>
            </div>
            <span className="text-[0.68rem] text-sky-300 font-mono font-bold flex-shrink-0 ml-1">
              EE Intern
            </span>
          </div>
        </div>

        {/* Caption row below photo */}
        <div className="flex items-center justify-between px-1 text-xs" style={{ color: "var(--text-muted)" }}>
          <span className="font-bold text-sm" style={{ color: "var(--text-heading)" }}>
            Titus Maunu
          </span>
          <span className="text-[0.72rem] font-medium">
            B.S. Electrical Engineering · UNO
          </span>
        </div>
      </div>
    </VistaWindow>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* Atmospheric Daylight & God-Rays background */}
      <div className="aero-bg-atmosphere" aria-hidden="true" />
      {/* Floating luminous orbs & daylight bokeh */}
      <div className="aero-bg-orbs" aria-hidden="true" />
      {/* Dissipating background scanlines on scroll */}
      <BackgroundScanlines />

      <Navbar />

      <main style={{ position: "relative", zIndex: 2 }}>
        {/* ── HERO ───────────────────────────────────────────────────── */}
        <section
          className="flex flex-col items-center justify-center px-4"
          style={{
            minHeight: "calc(100svh - 40px)",
            paddingTop: "clamp(74px, 12vh, 100px)",
            paddingBottom: "clamp(36px, 8vh, 60px)",
          }}
          aria-label="Hero"
        >
          <div
            style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14"
          >
            {/* Left Column: Intro, Headline, Pitch, CTAs, Badges */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6 w-full">
              {/* Section label */}
              <div className="animate-badge-pop delay-100">
                <span className="section-label">
                  ✦ Hardware &amp; Embedded Systems Engineer
                </span>
              </div>

              {/* Name */}
              <div className="animate-float-in delay-200">
                <h1
                  className="font-black tracking-tight leading-tight"
                  style={{
                    fontSize: "clamp(2.3rem, 7.5vw, 5.2rem)",
                    color: "var(--text-heading)",
                    textShadow: "var(--hero-title-shadow)",
                  }}
                >
                  Titus{" "}
                  <span
                    style={{
                      background: "var(--hero-name-gradient)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      filter: "var(--hero-name-shadow)",
                    }}
                  >
                    Maunu
                  </span>
                </h1>
              </div>

              {/* Mobile-Only Portrait Showcase (shown right below Name on mobile!) */}
              <div className="lg:hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto animate-float-in delay-200 my-1">
                <HeroPortrait isMobile />
              </div>

              {/* Pitch */}
              <div className="animate-float-in delay-300" style={{ maxWidth: 600 }}>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: "var(--text-main)",
                    textShadow: "var(--hero-pitch-shadow)",
                  }}
                >
                  I build things that touch real hardware —{" "}
                  <strong style={{ color: "var(--accent-text)", fontWeight: 700 }}>
                    custom PCBs, bare-metal firmware, and embedded systems
                  </strong>{" "}
                  that work reliably in the field. From hand-wound coils to
                  calibrated flight controllers, I ship circuits, not just code.
                </p>
              </div>

              {/* CTA Row with color-coded buttons: 2x2 grid on mobile, row on tablet/desktop */}
              <div
                className="animate-float-in delay-400 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full max-w-sm sm:max-w-none"
              >
                <a
                  href="#projects"
                  className="xp-btn xp-btn-blue w-full sm:w-auto justify-center"
                  style={{ padding: "9px 18px", fontSize: "0.85rem" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span>Projects</span>
                </a>
                <a
                  href="#experience"
                  className="xp-btn xp-btn-orange w-full sm:w-auto justify-center"
                  style={{ padding: "9px 18px", fontSize: "0.85rem" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Work History</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xp-btn xp-btn-green w-full sm:w-auto justify-center"
                  style={{ padding: "9px 18px", fontSize: "0.85rem" }}
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume</span>
                </a>
                <a
                  href="#about"
                  className="xp-btn xp-btn-ghost w-full sm:w-auto justify-center"
                  style={{ padding: "9px 18px", fontSize: "0.85rem" }}
                >
                  <span>About Me</span>
                </a>
              </div>

              {/* Spec badges */}
              <div
                className="animate-float-in delay-500 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2"
                style={{ maxWidth: 620, marginTop: 4 }}
              >
                {SPEC_BADGES.map((b, i) => (
                  <span
                    key={b.label}
                    className="spec-badge animate-badge-pop text-xs sm:text-sm py-1 px-2.5 sm:py-1.5 sm:px-3.5"
                    style={{ animationDelay: `${600 + i * 80}ms` }}
                  >
                    <span>{b.icon}</span>
                    <span>{b.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop-Only Right Column: Large Hero Portrait Showcase */}
            <div className="hidden lg:block animate-float-in delay-200 flex-shrink-0 w-full max-w-[360px] xl:max-w-[380px]">
              <HeroPortrait />
            </div>
          </div>

          {/* Scroll hint */}
          <div
            className="animate-float-in delay-1000 flex flex-col items-center gap-1.5 animate-bounce-subtle mt-10 sm:mt-12"
            style={{ opacity: 0.6 }}
          >
            <span
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: "var(--text-muted)", letterSpacing: "0.15em" }}
            >
              scroll to explore
            </span>
            <svg className="w-4 h-4" style={{ color: "var(--accent-text)" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ── PROJECTS ───────────────────────────────────────────────── */}
        <section
          id="projects"
          className="px-4"
          style={{ paddingTop: 80, paddingBottom: 80 }}
          aria-label="Featured projects"
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="section-label">⚙️ Featured Projects</span>
              </div>
              <h2
                className="font-bold mb-3"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "var(--text-heading)",
                  textShadow: "var(--text-shadow-heading)",
                }}
              >
                Things I&apos;ve Built
              </h2>
              <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.6, fontSize: "0.95rem" }}>
                Hardware projects spanning embedded systems, avionics, audio electronics, and mechanical design — each one hands-on from concept to working prototype.
              </p>
            </div>

            {/* 4-column project grid */}
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              }}
            >
              {PROJECTS.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE / WORK HISTORY ──────────────────────────────── */}
        <section
          id="experience"
          className="px-4"
          style={{ paddingTop: 60, paddingBottom: 80 }}
          aria-label="Work history and professional experience"
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="section-label section-label-warm">💼 Work History &amp; Education</span>
              </div>
              <h2
                className="font-bold mb-3"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "var(--text-heading)",
                  textShadow: "var(--text-shadow-heading)",
                }}
              >
                Professional Experience
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  maxWidth: 580,
                  margin: "0 auto",
                  lineHeight: 1.6,
                  fontSize: "0.95rem",
                }}
              >
                Hands-on roles across university IT operations, mission-critical facility security, live radio broadcasting, and school district systems deployment.
              </p>
            </div>

            {/* Experience Cards (2x2 grid on medium+) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {EXPERIENCES.map((exp, idx) => (
                <ExperienceCard key={exp.id} experience={exp} index={idx} />
              ))}
            </div>

            {/* Education Window - Horizontal below Work History */}
            <div className="mt-6 sm:mt-8">
              <VistaWindow
                title="education.info"
                accentColor="#ea580c"
                titleRight="EE · UNO"
                variant="warm"
                className="animate-float-in"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-6">
                  {/* Schools container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center gap-5 lg:gap-6 flex-1 min-w-0">
                    {/* University */}
                    <div className="flex items-start gap-3.5 min-w-0 lg:flex-1">
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 8,
                          background: "rgba(234, 88, 12, 0.12)",
                          border: "1px solid rgba(234, 88, 12, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.35rem",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        🎓
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4
                            className="font-bold text-sm leading-snug"
                            style={{ color: "var(--text-heading)" }}
                          >
                            University of Nebraska Lincoln at Omaha
                          </h4>
                          <span
                            className="px-1.5 py-0.5 text-[0.62rem] font-bold rounded"
                            style={{
                              background: "rgba(234, 88, 12, 0.14)",
                              color: "#ea580c",
                              border: "1px solid rgba(234, 88, 12, 0.28)",
                            }}
                          >
                            Sophomore
                          </span>
                        </div>
                        <p
                          className="text-xs font-semibold mt-0.5"
                          style={{ color: "#ea580c" }}
                        >
                          B.S. in Electrical Engineering
                        </p>
                        <p
                          className="text-[0.72rem] mt-0.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Sep 2025 – May 2029 · Omaha, NE
                        </p>
                      </div>
                    </div>

                    {/* Vertical divider on lg */}
                    <div
                      className="hidden lg:block self-stretch w-px flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent, rgba(234, 88, 12, 0.35) 20%, rgba(234, 88, 12, 0.5) 50%, rgba(234, 88, 12, 0.35) 80%, transparent)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Divider on mobile only */}
                    <div className="block md:hidden vista-divider" aria-hidden="true" />

                    {/* High School */}
                    <div className="flex items-start gap-3.5 min-w-0 lg:flex-1">
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 8,
                          background: "rgba(234, 88, 12, 0.12)",
                          border: "1px solid rgba(234, 88, 12, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.35rem",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        🏫
                      </div>
                      <div className="min-w-0">
                        <h4
                          className="font-bold text-sm leading-snug"
                          style={{ color: "var(--text-heading)" }}
                        >
                          Valentine High School
                        </h4>
                        <p
                          className="text-xs font-semibold mt-0.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          High School Diploma
                        </p>
                        <p
                          className="text-[0.72rem] mt-0.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Sep 2021 – May 2025 · Valentine, NE
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider between schools and resume CTA */}
                  <div
                    className="hidden lg:block self-stretch w-px flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent, rgba(234, 88, 12, 0.35) 20%, rgba(234, 88, 12, 0.5) 50%, rgba(234, 88, 12, 0.35) 80%, transparent)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="block lg:hidden vista-divider" aria-hidden="true" />

                  {/* Resume CTA */}
                  <div className="flex-shrink-0 flex items-center justify-start lg:justify-end">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-btn xp-btn-green w-full sm:w-auto justify-center"
                      style={{ fontSize: "0.82rem", whiteSpace: "nowrap" }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Full Resume
                    </a>
                  </div>
                </div>
              </VistaWindow>
            </div>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────────── */}
        <section
          id="about"
          className="px-4"
          style={{ paddingTop: 60, paddingBottom: 80 }}
          aria-label="About"
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <span className="section-label">🙋 About Me</span>
              </div>
              <h2
                className="font-bold"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "var(--text-heading)",
                  textShadow: "var(--text-shadow-heading)",
                }}
              >
                Beyond the Breadboard
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bio window */}
              <div>
                <VistaWindow
                  title="titus_maunu.profile"
                  accentColor="#0284c7"
                  titleRight="EE Student · Maker"
                >
                  <div className="flex flex-col gap-4">
                    {/* Avatar row with uploaded photo */}
                    <div className="flex items-center gap-4">
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 12,
                          overflow: "hidden",
                          border: "2px solid var(--avatar-border)",
                          flexShrink: 0,
                          boxShadow: "var(--avatar-shadow)",
                        }}
                      >
                        <img
                          src="/arrival.jpg"
                          alt="Titus Maunu"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <p style={{ color: "var(--text-heading)", fontWeight: 700, fontSize: "1rem" }}>
                          Titus Maunu
                        </p>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>
                          Hardware & Embedded Systems Engineer
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="status-dot" style={{ width: 6, height: 6 }} />
                          <span style={{ color: "var(--status-badge-color)", fontSize: "0.72rem", fontWeight: 700 }}>
                            Seeking Summer 2027 EE Internships
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="vista-divider" aria-hidden="true" />

                    <p style={{ color: "var(--text-main)", fontSize: "0.85rem", lineHeight: 1.65 }}>
                      I&apos;m a hands-on electrical engineering student with a passion for the intersection of hardware and software. I thrive on projects where I can take something from a schematic on paper to a device that works in the real world. I am always working on a project: Designing a project from the ground up, building a pcb and shell with cad, and debugging with an oscilloscope.
                    </p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.65 }}>
                      My maker instincts drive me to understand every layer of the stack. Whether tracing a signal path through a mixed-signal board, diagnosing a PID oscillation in a flight controller, or optimizing a print profile for accuracy! I want to know <em style={{ color: "var(--text-heading)", fontStyle: "normal", fontWeight: 700 }}>why</em> it works, not just that it does.
                    </p>

                    {/* Skill progress bars — Vista style */}
                    <div className="flex flex-col gap-2.5 mt-1">
                      {SKILLS.map((s) => (
                        <div key={s.name}>
                          <div
                            className="flex justify-between mb-1"
                            style={{ fontSize: "0.72rem" }}
                          >
                            <span style={{ color: "var(--text-main)", fontWeight: 600 }}>{s.name}</span>
                            <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{s.pct}%</span>
                          </div>
                          <div className="vista-progress">
                            <div
                              className="vista-progress-fill"
                              style={{
                                width: `${s.pct}%`,
                                background: `linear-gradient(180deg, ${s.color}dd 0%, ${s.color} 45%, ${s.color} 55%, ${s.color}bb 100%)`,
                                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.6), 0 0 8px ${s.color}66`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </VistaWindow>
              </div>

              {/* Right column: contact + interests */}
              <div className="flex flex-col gap-5">
                {/* Contact window */}
                <VistaWindow title="contact.me" accentColor="#ea580c">
                  <div className="flex flex-col gap-2.5">
                    <a
                      href="mailto:titus@maunu.dev"
                      className="xp-btn xp-btn-orange w-full justify-center"
                      style={{ fontSize: "0.82rem" }}
                    >
                      <MailIcon /> titus@maunu.dev
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-btn xp-btn-green w-full justify-center"
                      style={{ fontSize: "0.82rem" }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Resume
                    </a>
                    <a
                      href="https://linkedin.com/in/tmaunu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-btn xp-btn-blue w-full justify-center"
                      style={{ fontSize: "0.82rem" }}
                    >
                      <LinkedInIcon /> LinkedIn
                    </a>
                    <a
                      href="https://github.com/The-Best-Titus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="xp-btn xp-btn-ghost w-full justify-center"
                      style={{ fontSize: "0.82rem" }}
                    >
                      <GitHubIcon /> GitHub
                    </a>

                    <div
                      className="flex items-start gap-2.5 mt-1 p-3 rounded"
                      style={{
                        background: "var(--callout-bg)",
                        border: "1px solid var(--callout-border)",
                        boxShadow: "var(--callout-shadow)",
                      }}
                    >
                      <span className="status-dot flex-shrink-0" style={{ marginTop: 2 }} />
                      <div>
                        <p style={{ color: "var(--callout-title)", fontSize: "0.75rem", fontWeight: 700 }}>
                          Open to Opportunities
                        </p>
                        <p style={{ color: "var(--callout-text)", fontSize: "0.72rem", marginTop: 2, lineHeight: 1.5 }}>
                          Actively seeking Summer 2027 EE internships.
                        </p>
                      </div>
                    </div>
                  </div>
                </VistaWindow>

                {/* Interests */}
                <VistaWindow title="life_outside_lab" accentColor="#7c3aed">
                  <div className="flex flex-col gap-4">
                    {INTERESTS.map((interest) => (
                      <div key={interest.title} className="flex gap-3">
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: 6,
                            background: `${interest.accent}18`,
                            border: `1px solid ${interest.accent}35`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.3rem",
                            flexShrink: 0,
                            boxShadow: `0 2px 8px ${interest.accent}15`,
                          }}
                          aria-hidden="true"
                        >
                          {interest.emoji}
                        </div>
                        <div>
                          <p
                            style={{
                              color: interest.accent,
                              fontWeight: 700,
                              fontSize: "0.8rem",
                            }}
                          >
                            {interest.title}
                          </p>
                          <p style={{ color: "var(--text-muted)", fontSize: "0.7rem", marginBottom: 2, fontWeight: 500 }}>
                            {interest.subtitle}
                          </p>
                          <p style={{ color: "var(--text-main)", fontSize: "0.78rem", lineHeight: 1.5 }}>
                            {interest.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </VistaWindow>
              </div>
            </div>
          </div>
        </section>

        {/* ── TASKBAR / FOOTER ───────────────────────────────────────── */}
        <footer
          className="vista-taskbar"
          style={{ position: "relative", padding: "10px 16px" }}
          aria-label="Footer"
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Quick links as "taskbar buttons" */}
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              {[
                { icon: <GitHubIcon />, label: "GitHub", href: "https://github.com/The-Best-Titus" },
                { icon: <LinkedInIcon />, label: "LinkedIn", href: "https://linkedin.com/in/tmaunu" },
                { icon: <MailIcon />, label: "Email", href: "mailto:titus@maunu.dev" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="xp-btn xp-btn-ghost flex items-center gap-1.5"
                  style={{ padding: "4px 10px", fontSize: "0.75rem" }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="sm:hidden">
                <ThemeToggle />
              </div>
            </div>

            {/* System tray area */}
            <div
              className="flex items-center gap-3 justify-center"
              style={{
                padding: "4px 12px",
                borderRadius: 4,
                background: "var(--systray-bg)",
                border: "1px solid var(--systray-border)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), 0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <span style={{ color: "var(--systray-text)", fontSize: "0.72rem", fontWeight: 500 }}>
                © 2026 Titus Maunu
              </span>
              <div
                style={{
                  width: 1,
                  height: 14,
                  background: "var(--navbar-sep)",
                }}
                aria-hidden="true"
              />
              <span style={{ color: "var(--text-muted)", fontSize: "0.68rem" }}>
                ⚡ Next.js 16 · Tailwind v4
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
