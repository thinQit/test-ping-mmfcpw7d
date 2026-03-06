export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPage() {
  return (
    <main className="pt-24">
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="Last updated: March 6, 2026"
          title="Privacy policy"
          subtitle="We keep this simple. This website does not require accounts and does not collect sensitive personal data by default."
          primaryCta={{ label: "Contact", href: "/contact" }}
          secondaryCta={{ label: "Home", href: "/" }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <ScrollReveal>
          <FAQAccordion
            headline="What we collect"
            subheadline="If you email us, we receive the information you choose to share."
            items={[
              {
                question: "Email communications",
                answer:
                  "When you contact us via email, we receive your email address and message content. We use it only to respond to your request.",
              },
              {
                question: "Analytics",
                answer:
                  "This starter does not include analytics by default. If you add analytics, you should update this policy accordingly.",
              },
              {
                question: "Data retention",
                answer:
                  "We retain emails as long as needed to provide support and maintain business records.",
              },
              {
                question: "Your choices",
                answer:
                  "You can request deletion of your email thread by contacting hello@conversionlanding.com.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section className="py-20 md:py-24">
        <CTAVortex
          title="Have a privacy question?"
          subtitle="Send us a note and we’ll clarify how this site handles data."
          ctaLabel="Email hello@conversionlanding.com"
          ctaHref="mailto:hello@conversionlanding.com?subject=Privacy%20Question"
          secondaryCtaLabel="Contact page"
          secondaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
