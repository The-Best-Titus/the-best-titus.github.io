"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={[
          "vista-navbar",
          "fixed top-0 left-0 right-0 z-50",
          "flex items-center justify-between",
          "px-4 sm:px-8 py-2.5",
          "transition-all duration-300",
          scrolled ? "shadow-md" : "",
        ].join(" ")}
        style={{ position: "fixed" }}
        aria-label="Main navigation"
      >
        {/* Left: Brand Name (Clean & Uncluttered) */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-bold text-base sm:text-lg tracking-tight transition-opacity hover:opacity-85"
            style={{
              color: "var(--text-heading)",
              textShadow: "0 1px 0 rgba(255,255,255,0.7)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Titus Maunu
          </a>
        </div>

        {/* Center: Desktop navigation links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Experience", href: "#experience" },
            { label: "About", href: "#about" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="nav-link font-medium text-sm">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Actions (Clean & Uncluttered) */}
        <div className="flex items-center gap-2.5">
          {/* Theme Switcher (icon on mobile, icon + label on sm+) */}
          <ThemeToggle />

          {/* Desktop Resume Button (hidden on mobile, present in mobile drawer) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="xp-btn xp-btn-green hidden sm:inline-flex"
            style={{ padding: "7px 18px", fontSize: "0.82rem" }}
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </a>

          {/* Mobile hamburger menu toggle — STRICTLY HIDDEN ON DESKTOP */}
          <button
            className="mobile-only md:!hidden xp-btn xp-btn-ghost !w-9 !h-9 !p-0 flex items-center justify-center rounded-lg"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            type="button"
          >
            <div className="w-4 h-4 flex flex-col justify-center items-center gap-1">
              <span
                className={`block h-0.5 w-4 bg-current rounded-full transition-transform duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current rounded-full transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-current rounded-full transition-transform duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Drawer — STRICTLY HIDDEN ON DESKTOP */}
        {mobileOpen && (
          <div
            className="mobile-only md:!hidden absolute top-full left-0 right-0 z-50 animate-drawer-slide border-b"
            style={{
              background: "var(--dropdown-bg)",
              borderColor: "var(--navbar-border)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              boxShadow: "0 20px 40px rgba(0, 40, 100, 0.22)",
            }}
          >
            <div className="p-4 sm:p-5 flex flex-col gap-3.5 max-w-md mx-auto">
              {/* Navigation links */}
              <div className="flex flex-col gap-1">
                {[
                  { label: "Projects", href: "#projects" },
                  { label: "Experience & Education", href: "#experience" },
                  { label: "About Me", href: "#about" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-2.5 rounded-lg font-medium text-sm transition-colors hover:bg-sky-500/10 active:bg-sky-500/20"
                    style={{ color: "var(--text-heading)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="text-xs opacity-50" style={{ color: "var(--text-muted)" }}>›</span>
                  </a>
                ))}
              </div>

              <div className="vista-divider" aria-hidden="true" />

              {/* Resume download button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="xp-btn xp-btn-green w-full justify-center py-2.5 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>

              {/* Quick social links */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/The-Best-Titus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xp-btn xp-btn-ghost w-full justify-center py-2 text-xs"
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/tmaunu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xp-btn xp-btn-ghost w-full justify-center py-2 text-xs"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay for mobile drawer — STRICTLY HIDDEN ON DESKTOP */}
      {mobileOpen && (
        <div
          className="mobile-only md:!hidden fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-40"
          style={{ top: "48px" }}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
