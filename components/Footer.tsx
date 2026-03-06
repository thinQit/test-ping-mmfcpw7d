"use client";

import Link from "next/link";
import SiteContainer from "@/components/SiteContainer";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  brandName?: string;
  description?: string;
  columns?: FooterColumn[];
  email?: string;
  phone?: string;
  address?: string;
  copyright?: string;
  className?: string;
}

export default function Footer({
  brandName = "AcmeFlow",
  description = "Conversion-focused landing page system for modern growth teams.",
  columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Testimonials", href: "#testimonials" },
        { label: "Case Studies", href: "#" },
        { label: "Guides", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#cta" },
        { label: "Privacy", href: "#" },
      ],
    },
  ],
  email = "hello@acmeflow.com",
  phone = "+1 (555) 123-4567",
  address = "120 Market Street, San Francisco, CA",
  copyright = "© 2026 AcmeFlow. All rights reserved.",
  className = "",
}: Partial<FooterProps>) {
  return (
    <footer className={cn("bg-white border-t border-border py-16", className)}>
      <SiteContainer>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-lg font-bold text-[#111827]">{brandName}</p>
            <p className="text-sm text-muted-foreground max-w-sm">{description}</p>
            <div className="pt-3 space-y-1 text-sm text-muted-foreground">
              <p>{email}</p>
              <p>{phone}</p>
              <p>{address}</p>
            </div>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
            {columns.map((column, idx) => (
              <div key={column.title + String(idx)}>
                <p className="font-semibold text-[#111827] mb-3">{column.title}</p>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={link.label + String(linkIdx)}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-[#111827] transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">{copyright}</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
