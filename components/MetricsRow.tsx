"use client";

import { cn } from "@/lib/utils";
import SiteContainer from "@/components/SiteContainer";

interface MetricItem {
  value: string;
  label: string;
  caption?: string;
}

interface MetricsRowProps {
  metrics?: MetricItem[];
  className?: string;
}

export default function MetricsRow({
  metrics = [
    { value: "38%", label: "Average lift in conversions", caption: "within first 60 days" },
    { value: "2.4x", label: "More qualified demo requests", caption: "from high-intent pages" },
    { value: "< 14 days", label: "Typical launch timeline", caption: "from kickoff to publish" },
  ],
  className = "",
}: Partial<MetricsRowProps>) {
  return (
    <section className={cn("py-20 md:py-24 bg-white", className)}>
      <SiteContainer>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric, idx) => (
            <div key={metric.label + String(idx)} className="rounded-xl border border-border bg-card p-6 md:p-8 text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#111827]">{metric.value}</p>
              <p className="mt-2 font-semibold text-[#111827]">{metric.label}</p>
              {metric.caption ? <p className="mt-1 text-sm text-muted-foreground">{metric.caption}</p> : null}
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
