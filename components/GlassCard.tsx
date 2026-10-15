import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  fullHeight?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
  rounded?: "sm" | "md" | "lg";
}

const paddingMap = { none: "", sm: "p-3", md: "p-5", lg: "p-6" };
const roundedMap = { sm: "4px", md: "6px", lg: "8px" };

export default function GlassCard({
  children,
  className = "",
  hover = true,
  fullHeight = false,
  padding = "md",
  rounded = "md",
}: GlassCardProps) {
  return (
    <div
      className={["aero-window", fullHeight ? "h-full" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        borderRadius: roundedMap[rounded],
        height: fullHeight ? "100%" : undefined,
      }}
    >
      <div
        className={["aero-window-body", paddingMap[padding]]
          .filter(Boolean)
          .join(" ")}
        style={{
          borderRadius: `0 0 ${roundedMap[rounded]} ${roundedMap[rounded]}`,
          height: fullHeight ? "100%" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
