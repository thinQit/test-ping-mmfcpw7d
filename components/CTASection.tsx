"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteContainer from "@/components/SiteContainer";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  heading?: string;
  description?: string;
  bullets?: string[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  finePrint?: string;
  className?: string;
}

export default function CTASection({
  heading = "Ready to launch a landing page that converts?",
  description = "Get a focused structure, compelling content flow, and clear CTA hierarchy designed to move visitors to action.",
  bullets = ["No long implementation cycles", "Built for mobile and desktop performance", "Optimized for qualified conversions"],
  primaryCtaLabel = "Start Your Free Trial",
  primaryCtaHref = "#pricing",
  finePrint = "No credit card required. Cancel anytime during your trial period.",
  className = "",
}: Partial<CTASectionProps>) {
  return (
    <section id="cta" className={cn("py-20 md:py-24 bg-[#111827] text-white", className)}>
      <SiteContainer>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{heading}</h2>
          <p className="text-white/80">{description}</p>
          <ul className="space-y-2">
            {bullets.map((bullet, idx) => (
              <li key={bullet + String(idx)} className="flex items-start gap-3 text-sm md:text-base text-white/90">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-[#60a5fa] shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button asChild className="rounded-lg px-6 py-3 font-semibold bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
          </div>
          <p className="text-xs text-white/70">{finePrint}</p>
        </div>
      </SiteContainer>
    </section>
  );
}
