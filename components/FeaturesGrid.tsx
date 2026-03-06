"use client";

import SiteContainer from "@/components/SiteContainer";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import { cn } from "@/lib/utils";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  heading?: string;
  subheading?: string;
  features?: FeatureItem[];
  className?: string;
}

export default function FeaturesGrid({
  heading = "Everything you need to turn traffic into revenue",
  subheading = "Each section is designed around buyer intent, so visitors understand your offer quickly and take the next step with confidence.",
  features = [
    {
      icon: "Rocket",
      title: "Fast launch framework",
      description: "Deploy a full conversion-ready page structure in days, not months.",
    },
    {
      icon: "Gauge",
      title: "Performance-first build",
      description: "Lean components and responsive layouts keep speed high across devices.",
    },
    {
      icon: "Sparkles",
      title: "Message clarity blocks",
      description: "Benefit-led copy patterns that remove friction and boost engagement.",
    },
    {
      icon: "Workflow",
      title: "Scannable information flow",
      description: "Narrative section ordering that guides users from awareness to action.",
    },
    {
      icon: "ShieldCheck",
      title: "Trust signal placement",
      description: "Proof, testimonials, and metrics integrated where decisions happen.",
    },
    {
      icon: "Sparkles",
      title: "CTA consistency",
      description: "One primary action per section to reduce confusion and increase clicks.",
    },
  ],
  className = "",
}: Partial<FeaturesGridProps>) {
  return (
    <section id="features" className={cn("py-20 md:py-24 bg-white", className)}>
      <SiteContainer>
        <SectionHeader align="center" eyebrow="Features" headline={heading} subheadline={subheading} />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title + String(idx)} {...feature} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
