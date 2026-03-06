"use client";

import { LucideProps, Rocket, ShieldCheck, Sparkles, Gauge, Workflow, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ComponentType } from "react";

interface FeatureCardProps {
  icon?: string;
  title?: string;
  description?: string;
  className?: string;
}

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Sparkles,
  Rocket,
  ShieldCheck,
  Gauge,
  Workflow,
};

function getIcon(name: string) {
  return iconMap[name] || Circle;
}

export default function FeatureCard({
  icon = "Sparkles",
  title = "Feature title",
  description = "Feature description focused on outcomes and customer value.",
  className = "",
}: Partial<FeatureCardProps>) {
  const Icon = getIcon(icon);

  return (
    <Card className={cn("rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow", className)}>
      <div className="space-y-4">
        <div className="h-10 w-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-[#111827]">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
