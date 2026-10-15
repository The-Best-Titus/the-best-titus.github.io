import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Titus Maunu — Hardware & Embedded Systems Engineer",
  description:
    "Portfolio of Titus Maunu, a hardware and embedded systems engineer specializing in PCB design, firmware development, and rapid prototyping.",
  keywords: [
    "embedded systems",
    "PCB design",
    "firmware",
    "hardware engineer",
    "C/C++",
    "FPGA",
    "internship",
  ],
  authors: [{ name: "Titus Maunu" }],
  openGraph: {
    title: "Titus Maunu — Hardware & Embedded Systems Engineer",
    description:
      "Portfolio of Titus Maunu, a hardware and embedded systems engineer specializing in PCB design, firmware development, and rapid prototyping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
