export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import TeamGrid from "@/components/TeamGrid";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="About Conversion Landing"
          title="A landing page starter built for clarity."
          subtitle="We built Conversion Landing after seeing too many templates that look pretty but don’t guide visitors to action. This one is intentionally simple: strong hierarchy, high contrast, and a predictable CTA rhythm."
          primaryCta={{ label: "See the sections", href: "/#features" }}
          secondaryCta={{ label: "Contact us", href: "/contact" }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <ScrollReveal>
          <TeamGrid
            headline="Small team, shipping-focused."
            subheadline="We’re designers and engineers who care about fast iteration and clean implementation."
            members={[
              {
                name: "Avery Patel",
                title: "Design Systems",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                bio: "Builds conversion-focused UI systems with accessible defaults and strong typography.",
              },
              {
                name: "Jordan Kim",
                title: "Front-End Engineering",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                bio: "Next.js and performance specialist focused on clean component architecture.",
              },
              {
                name: "Samira Haddad",
                title: "Copy & Messaging",
                imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
                bio: "Writes benefit-first landing page copy that answers objections and drives action.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section className="py-20 md:py-24">
        <CTAVortex
          title="Ship your next landing page faster."
          subtitle="Start with a layout that’s designed to convert—then customize the brand details."
          ctaLabel="Get Pro"
          ctaHref="/#pricing"
          secondaryCtaLabel="Contact"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
