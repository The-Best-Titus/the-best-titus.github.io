/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { BookOpen, FileText, Flower2, CodeXml, House, Notebook, Rocket } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Location/City */
  location: string;
  /** Contact email */
  email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

const base = import.meta.env.BASE_URL || '/';

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "Titus",
  title: "My simple portfolio",
  description:
    "I am determined to make myself a person people can depend on and improve myself when I see an opportunity.",
  avatar: "C:/Users/titus/Documents/Astro/Mark_1/bloomfolio/src/assets/Me.png",
  location: "🇺🇸 Omaha Nebraska, USA",
  email: "hello@example.com",
  socialLinks: {
    github: "https://github.com/The-Best-Titus",
    linkedin: "www.linkedin.com/in/titus-maunu-3b4ba8308",
    instagram: "https://www.instagram.com/titus_maunu/",
    youTube: "https://www.youtube.com/@the_baco",
  },
  enableThemeSelector: true,
  extraLinks: {
    enable: true,
    links: [
      {
        link: `/blog/`,
        icon: Notebook,
        label: "Blog",
      },
      {
        link: `/projects/`,
        icon: Rocket,
        label: "Project",
      },
      {
        link: `/`,
        icon: House,
        label: "Home",
      },

    ],
  },
  sections: {
    about: true,
    projects: false,
    work: true,
    education: true,
    blog: true,
    hackathons: false,
    contact: true,
  },
};
