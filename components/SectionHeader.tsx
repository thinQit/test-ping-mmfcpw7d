"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderLink {
  label: string;
  href: string;
}

interface SectionHeaderProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  align?: "left" | "center";
  links?: HeaderLink[];
  className?: string;
}

export default function SectionHeader({
  eyebrow = "",
  headline = "Section headline",
  subheadline = "",
  align = "left",
  links = [],
  className = "",
}: Partial<SectionHeaderProps>) {
  const centered = align === "center";

  return (
    <div className={cn("space-y-4", centered ? "text-center mx-auto max-w-3xl" : "text-left", className)}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">{eyebrow}</p> : null}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">{headline}</h2>
      {subheadline ? <p className="text-base md:text-lg text-muted-foreground">{subheadline}</p> : null}
      {links.length > 0 ? (
        <div className={cn("flex flex-wrap gap-4 pt-1", centered ? "justify-center" : "justify-start")}>
          {links.map((link, idx) => (
            <Link
              key={link.href + String(idx)}
              href={link.href}
              className="text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
