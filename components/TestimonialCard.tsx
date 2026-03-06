"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote?: string;
  name?: string;
  title?: string;
  company?: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  quote = "This framework gave our team a clean, persuasive page that immediately improved demo conversion.",
  name = "Jordan Lee",
  title = "Head of Growth",
  company = "Northstar Labs",
  rating = 5,
  className = "",
}: Partial<TestimonialCardProps>) {
  const normalizedRating = Math.max(0, Math.min(5, rating));

  return (
    <Card className={cn("rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow", className)}>
      <div className="space-y-4">
        {normalizedRating > 0 ? (
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: normalizedRating }).map((_, idx) => (
              <Star key={String(idx)} className="h-4 w-4 fill-current" />
            ))}
          </div>
        ) : null}
        <p className="text-sm md:text-base leading-relaxed text-[#111827]">“{quote}”</p>
        <div>
          <p className="font-semibold text-[#111827]">{name}</p>
          <p className="text-sm text-muted-foreground">
            {title}
            {title && company ? " · " : ""}
            {company}
          </p>
        </div>
      </div>
    </Card>
  );
}
