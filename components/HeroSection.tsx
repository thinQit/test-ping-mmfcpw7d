"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteContainer from "@/components/SiteContainer";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  valueProps?: string[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  className?: string;
}

export default function HeroSection({
  headline = "Convert more visitors with a landing page built for clarity and action.",
  subheadline = "Launch faster with a conversion-first structure: strong messaging, social proof, and focused calls-to-action that guide every scroll.",
  valueProps = [
    "Conversion-focused copy blocks",
    "High-contrast CTA strategy",
    "Mobile-first, performance-ready layout",
  ],
  primaryCtaLabel = "Start Free Trial",
  primaryCtaHref = "#pricing",
  secondaryCtaLabel = "Book a Demo",
  secondaryCtaHref = "#cta",
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg",
  className = "",
}: Partial<HeroSectionProps>) {
  return (
    <section id="hero" className={cn("py-20 md:py-24 bg-white", className)}>
      <SiteContainer>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827]">{headline}</h1>
            <p className="text-lg text-muted-foreground max-w-xl">{subheadline}</p>
            <ul className="space-y-3">
              {valueProps.map((item, idx) => (
                <li key={item + String(idx)} className="flex items-start gap-3 text-sm md:text-base text-[#111827]">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#2563EB] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button asChild className="rounded-lg px-6 py-3 font-semibold bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-6 py-3 font-semibold">
                <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-border overflow-hidden shadow-sm">
              <Image
                src={imageSrc}
                alt="Product hero preview"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
