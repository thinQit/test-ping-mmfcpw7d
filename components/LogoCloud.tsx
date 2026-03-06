"use client";

import { cn } from "@/lib/utils";
import SiteContainer from "@/components/SiteContainer";

interface LogoItem {
  name: string;
  industry?: string;
}

interface LogoCloudProps {
  title?: string;
  logos?: LogoItem[];
  className?: string;
}

export default function LogoCloud({
  title = "Trusted by growth teams at",
  logos = [
    { name: "Northstar Labs", industry: "SaaS" },
    { name: "Clarity Health", industry: "Healthcare" },
    { name: "PeakLedger", industry: "Fintech" },
    { name: "BrightRoute", industry: "Logistics" },
    { name: "CoreNest", industry: "Real Estate" },
    { name: "SummitLearn", industry: "EdTech" },
  ],
  className = "",
}: Partial<LogoCloudProps>) {
  return (
    <section id="social-proof" className={cn("py-20 md:py-24 bg-muted/30", className)}>
      <SiteContainer>
        <p className="text-center text-sm md:text-base font-medium text-muted-foreground mb-8">{title}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {logos.map((logo, idx) => (
            <div
              key={logo.name + String(idx)}
              className="rounded-xl border border-border bg-card px-4 py-5 text-center hover:shadow-sm transition-shadow"
            >
              <p className="font-semibold text-[#111827] text-sm">{logo.name}</p>
              {logo.industry ? <p className="text-xs text-muted-foreground mt-1">{logo.industry}</p> : null}
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
