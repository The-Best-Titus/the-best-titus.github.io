import React from "react";

interface TactileButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "green" | "orange" | "blue" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const variantMap: Record<string, string> = {
  primary: "xp-btn xp-btn-blue",
  green: "xp-btn xp-btn-green",
  orange: "xp-btn xp-btn-orange",
  blue: "xp-btn xp-btn-blue",
  ghost: "xp-btn xp-btn-ghost",
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "4px 14px", fontSize: "0.78rem" },
  md: { padding: "6px 18px", fontSize: "0.82rem" },
  lg: { padding: "9px 24px", fontSize: "0.9rem" },
};

export default function TactileButton({
  children,
  href,
  onClick,
  variant = "ghost",
  size = "md",
  className = "",
  target,
  rel,
  icon,
  iconRight,
  disabled = false,
  type = "button",
  "aria-label": ariaLabel,
}: TactileButtonProps) {
  const cls = [
    variantMap[variant] ?? "xp-btn xp-btn-ghost",
    disabled ? "opacity-50 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span style={{ display: "flex" }}>{icon}</span>}
      <span>{children}</span>
      {iconRight && <span style={{ display: "flex" }}>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cls}
        style={sizeStyles[size]}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      style={sizeStyles[size]}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
