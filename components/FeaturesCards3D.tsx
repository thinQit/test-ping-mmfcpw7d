'use client';

import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/effects/3d-card-effect';
import { Sparkles, Shield, Zap, Globe, Star, Heart, Target, ShieldCheck } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
}

export default function FeaturesCards3D({
  badge = 'Core Benefits',
  title = 'Everything you need to run operations at scale',
  subtitle = 'From automation to analytics, NimbusFlow gives your team the tools to execute with confidence.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  const iconMap: Record<string, React.ElementType> = {
    Target,
    ShieldCheck,
    Sparkles,
    Shield,
    Zap,
    Globe,
    Star,
    Heart,
  };

  return (
    <section className="py-20 md:py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="relative h-auto w-auto rounded-xl border border-border bg-card p-6">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
