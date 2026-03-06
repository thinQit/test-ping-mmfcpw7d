export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import ContactForm from "@/components/ContactForm";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="py-20 md:py-24">
        <HeroAurora
          badge="We reply in 1–2 business days"
          title="Contact us"
          subtitle="Questions about the starter, licensing, or customization? Send a note and we’ll reply within 1–2 business days."
          primaryCta={{
            label: "Email hello@conversionlanding.com",
            href: "mailto:hello@conversionlanding.com",
          }}
          secondaryCta={{ label: "View FAQ", href: "/#faq" }}
        />
      </section>

      <section className="py-20 md:py-24 bg-muted/40">
        <ScrollReveal>
          <ContactForm
            headline="Send a message"
            subheadline="We’ll help you pick a plan or point you to the right component."
            contactInfo={[
              {
                icon: "Mail",
                label: "Email",
                value: "hello@conversionlanding.com",
              },
              {
                icon: "Phone",
                label: "Phone",
                value: "+1 (415) 555-0136",
              },
              {
                icon: "Clock3",
                label: "Hours",
                value: "Mon–Fri, 9:00 AM–5:00 PM PT",
              },
              {
                icon: "MapPin",
                label: "Location",
                value: "San Francisco, CA",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section className="py-20 md:py-24">
        <CTAVortex
          title="Want the fastest path to launch?"
          subtitle="Start with Pro and customize the copy and palette to your brand."
          ctaLabel="Get Pro"
          ctaHref="/#pricing"
          secondaryCtaLabel="Back to home"
          secondaryCtaHref="/"
        />
      </section>
    </main>
  );
}
