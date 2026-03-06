"use client";

import SiteContainer from "@/components/SiteContainer";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating?: number;
}

interface TestimonialsGridProps {
  heading?: string;
  subheading?: string;
  summaryText?: string;
  testimonials?: Testimonial[];
  className?: string;
}

export default function TestimonialsGrid({
  heading = "Teams trust this approach to drive measurable growth",
  subheading = "Proof from operators who needed stronger conversion outcomes without bloated redesign cycles.",
  summaryText = "Rated 4.9/5 by 120+ marketing and revenue teams.",
  testimonials = [
    {
      quote: "We saw a 41% increase in trial signups after restructuring around these sections.",
      name: "Avery Collins",
      title: "VP Marketing",
      company: "PeakLedger",
      rating: 5,
    },
    {
      quote: "The page finally communicates our value in seconds, and bounce rates dropped immediately.",
      name: "Samira Patel",
      title: "Growth Lead",
      company: "BrightRoute",
      rating: 5,
    },
    {
      quote: "Our sales team gets better-qualified demos because the page pre-answers key objections.",
      name: "Mason Wright",
      title: "Revenue Operations",
      company: "CoreNest",
      rating: 4,
    },
  ],
  className = "",
}: Partial<TestimonialsGridProps>) {
  return (
    <section id="testimonials" className={cn("py-20 md:py-24 bg-muted/30", className)}>
      <SiteContainer>
        <SectionHeader align="center" eyebrow="Testimonials" headline={heading} subheadline={subheading} />
        <p className="mt-4 text-center text-sm font-medium text-[#2563EB]">{summaryText}</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.name + String(idx)} {...testimonial} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
