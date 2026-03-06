export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import LogoCloud from "@/components/LogoCloud";
import MetricsRow from "@/components/MetricsRow";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import PricingTable from "@/components/PricingTable";
import FAQAccordion from "@/components/FAQAccordion";
import CTAVortex from "@/components/CTAVortex";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="pt-24">
        <HeroAurora
          badge="Conversion-first starter"
          title="Launch a high-converting landing page in a weekend."
          subtitle="Conversion Landing is a clean Next.js + Tailwind + shadcn/ui starter with the exact sections you need: social proof, features, testimonials, pricing, FAQ, and a final CTA—no fluff."
          primaryCta={{ label: "Get the starter", href: "#pricing" }}
          secondaryCta={{ label: "See what’s included", href: "#features" }}
        />
      </section>

      <section id="social-proof" className="py-20 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
          <ScrollReveal>
            <LogoCloud />
          </ScrollReveal>
          <ScrollReveal>
            <MetricsRow />
          </ScrollReveal>
        </div>
      </section>

      <section id="features" className="py-20 md:py-24">
        <ScrollReveal>
          <FeaturesCards3D
            badge="Everything included"
            title="Everything you need to sell the click."
            subtitle="A focused set of sections and components designed to reduce friction and keep visitors moving toward your CTA."
            features={[
              {
                icon: "Target",
                title: "Conversion-optimized hero",
                description:
                  "Clear headline, supporting proof points, and a primary CTA that stands out with high-contrast styling.",
              },
              {
                icon: "ShieldCheck",
                title: "Social proof that feels real",
                description:
                  "Logo cloud + metrics row to establish credibility without overwhelming the page.",
              },
              {
                icon: "LayoutGrid",
                title: "Feature grid with benefits",
                description:
                  "Benefit-first copy and scannable cards that map directly to objections and outcomes.",
              },
              {
                icon: "MessageSquareQuote",
                title: "Testimonials with specifics",
                description:
                  "Role + company + measurable results to increase trust and reduce perceived risk.",
              },
              {
                icon: "BadgeDollarSign",
                title: "Pricing that’s easy to compare",
                description:
                  "Three tiers with a highlighted “Most Popular” plan and clear inclusions.",
              },
              {
                icon: "CircleHelp",
                title: "FAQ that removes friction",
                description:
                  "Short, direct answers to common questions about setup, customization, and deployment.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section id="testimonials" className="py-20 md:py-24 bg-muted/40">
        <ScrollReveal>
          <TestimonialsAnimated
            title="Designed to look credible—and convert."
            subtitle="Realistic, specific testimonials that read like they came from actual customers."
            testimonials={[
              {
                quote:
                  "We replaced our messy one-pager with this layout and our signup rate went from 2.1% to 4.8% in a week. The structure makes it hard to get wrong.",
                name: "Maya Chen",
                designation: "Founder, BrightDesk",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
              },
              {
                quote:
                  "The spacing, typography, and CTA rhythm are spot on. We shipped a client landing page in a day and it looked premium immediately.",
                name: "Ethan Rivera",
                designation: "Creative Director, Juniper Studio",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
              },
              {
                quote:
                  "We needed something simple: fast, responsive, and SEO-friendly. This starter gave us a clean baseline without a bunch of app complexity.",
                name: "Priya Nair",
                designation: "Product Marketing, SignalForge",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
              },
            ]}
            autoplay
          />
        </ScrollReveal>
      </section>

      <section id="pricing" className="py-20 md:py-24">
        <ScrollReveal>
          <PricingTable
            headline="Simple pricing for a simple launch."
            subheadline="Pick the plan that matches how quickly you want to ship. Upgrade any time."
            tiers={[
              {
                name: "Starter",
                price: "$19",
                period: "one-time",
                description:
                  "A clean landing page foundation with the must-have sections.",
                features: [
                  "Hero + social proof + features",
                  "Testimonials + FAQ + footer",
                  "Responsive layout + SEO meta",
                  "Tailwind + shadcn/ui setup",
                ],
                ctaLabel: "Get Starter",
                ctaHref: "#cta",
              },
              {
                name: "Pro",
                price: "$49",
                period: "one-time",
                description:
                  "Everything in Starter plus more polish and conversion details.",
                features: [
                  "Pricing table with highlighted plan",
                  "Metrics row + stronger CTA patterns",
                  "Animation utilities (fade-in-up on scroll)",
                  "Reusable section wrappers + container system",
                ],
                ctaLabel: "Get Pro",
                ctaHref: "#cta",
                highlighted: true,
              },
              {
                name: "Team",
                price: "$99",
                period: "one-time",
                description:
                  "For teams shipping multiple landing pages for clients.",
                features: [
                  "All Pro features",
                  "Multi-brand theming guidance",
                  "Component checklist for handoff",
                  "Priority email support (48h)",
                ],
                ctaLabel: "Get Team",
                ctaHref: "#cta",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section id="faq" className="py-20 md:py-24 bg-muted/40">
        <ScrollReveal>
          <FAQAccordion
            headline="Questions, answered."
            subheadline="Everything you need to know before you ship."
            items={[
              {
                question: "Is this a website or a web app starter?",
                answer:
                  "It’s a website-first landing page blueprint: marketing sections, clear CTAs, and SEO structure—no dashboards or app flows.",
              },
              {
                question: "Do I need a backend or database?",
                answer:
                  "No. The default setup is static/SSR-ready with no API routes. You can add a form provider later if needed.",
              },
              {
                question: "Can I change the colors and fonts easily?",
                answer:
                  "Yes. The palette maps to Tailwind tokens and shadcn/ui theme variables. Swap primary/secondary and update the font imports in one place.",
              },
              {
                question: "Does it support dark mode?",
                answer:
                  "Not by default (to keep it simple), but the design tokens are compatible with adding dark mode later.",
              },
              {
                question: "What’s included for SEO?",
                answer:
                  "Clean semantic sections, metadata defaults, Open Graph guidance, and a structure that supports fast load times and strong readability.",
              },
            ]}
          />
        </ScrollReveal>
      </section>

      <section id="cta" className="py-20 md:py-24">
        <ScrollReveal>
          <CTAVortex
            title="Ready to ship a landing page that converts?"
            subtitle="Start with a proven section order, strong typography, and a high-contrast CTA system. Publish today and iterate with confidence."
            ctaLabel="Get Pro for $49"
            ctaHref="https://example.com/checkout"
            secondaryCtaLabel="Email us questions"
            secondaryCtaHref="mailto:hello@conversionlanding.com"
          />
        </ScrollReveal>
      </section>
    </main>
  );
}
