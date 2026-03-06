"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteContainer from "@/components/SiteContainer";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText?: string;
  logoHref?: string;
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function Navbar({
  logoText = "AcmeFlow",
  logoHref = "#",
  links = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  ctaLabel = "Get Started",
  ctaHref = "#cta",
  className = "",
}: Partial<NavbarProps>) {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur", className)}>
      <SiteContainer as="nav" className="h-16 flex items-center justify-between">
        <Link href={logoHref} className="text-lg font-bold tracking-tight text-[#111827]">
          {logoText}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link, idx) => (
            <Link
              key={link.href + String(idx)}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-[#111827] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild className="rounded-lg px-5 py-2.5 font-semibold bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </SiteContainer>
    </header>
  );
}
