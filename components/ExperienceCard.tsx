import React from "react";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  url?: string;
  description: string;
  highlights: string[];
  tags: string[];
  emoji: string;
  accent: string;
}

export default function ExperienceCard({
  experience,
  index = 0,
}: {
  experience: Experience;
  index?: number;
}) {
  return (
    <div
      className="aero-window aero-window-warm animate-float-in flex flex-col h-full"
      style={{
        animationDelay: `${index * 100}ms`,
        borderRadius: 8,
      }}
    >
      {/* Titlebar */}
      <div
        className="aero-titlebar aero-titlebar-warm flex items-center justify-between px-3 sm:px-3.5 py-2 gap-2"
        style={{ minHeight: 34 }}
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: experience.accent,
              boxShadow: `0 0 6px ${experience.accent}`,
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
          <span
            className="text-xs font-semibold truncate"
            style={{
              color: "var(--titlebar-text)",
              textShadow: "var(--titlebar-text-shadow)",
            }}
          >
            {experience.company}
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          {experience.current && (
            <span
              className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[0.62rem] font-bold rounded"
              style={{
                background: "var(--status-badge-bg)",
                border: "1px solid var(--status-badge-border)",
                color: "var(--status-badge-color)",
              }}
            >
              <span className="status-dot" style={{ width: 5, height: 5 }} />
              Active
            </span>
          )}
          <span
            style={{
              color: "var(--text-muted)",
              fontSize: "0.68rem",
              fontWeight: 600,
            }}
          >
            {experience.period}
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        className="aero-window-body aero-window-body-warm flex flex-col gap-3.5 flex-1 p-3.5 sm:p-4"
        style={{ borderRadius: "0 0 8px 8px" }}
      >
        {/* Header: Role + Icon */}
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex items-start gap-2.5 sm:gap-3 min-w-0 flex-1">
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: `${experience.accent}18`,
                border: `1px solid ${experience.accent}35`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                flexShrink: 0,
                boxShadow: `0 2px 8px ${experience.accent}15`,
              }}
              aria-hidden="true"
            >
              {experience.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <h3
                className="font-bold text-sm leading-snug break-words"
                style={{ color: "var(--text-heading)" }}
              >
                {experience.role}
              </h3>
              <p
                className="text-xs mt-0.5 truncate"
                style={{ color: "var(--text-muted)", fontWeight: 500 }}
              >
                {experience.company} · {experience.location}
              </p>
            </div>
          </div>

          {experience.url && (
            <a
              href={experience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="xp-btn xp-btn-ghost !px-2 !py-1 text-[0.7rem] flex-shrink-0"
              title={`Visit ${experience.company}`}
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Site
            </a>
          )}
        </div>

        {/* Description */}
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--text-main)" }}
        >
          {experience.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 flex-1">
          {experience.highlights.map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="flex-shrink-0 mt-0.5 font-bold"
                style={{ color: experience.accent }}
              >
                ▸
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div
          className="vista-divider"
          style={{ margin: "2px 0" }}
          aria-hidden="true"
        />
        <div className="flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <span key={tag} className="tag-pill tag-pill-warm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
