import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import NavbarSticky from "@/components/NavbarSticky";
import FooterMultiColumn from "@/components/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "Conversion Landing — High-converting Next.js landing page",
  description:
    "A clean, conversion-driven landing page blueprint with social proof, features, testimonials, pricing, FAQ, and a final CTA. Built with Next.js, Tailwind, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <NavbarSticky
          logo="Conversion Landing"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/#features" },
            { label: "Testimonials", href: "/#testimonials" },
            { label: "Pricing", href: "/#pricing" },
            { label: "FAQ", href: "/#faq" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Get Pro"
          ctaHref="/#pricing"
        />
        {children}
        <FooterMultiColumn
          brand="Conversion Landing"
          description="A simple, conversion-driven landing page starter."
          columns={[
            {
              title: "Product",
              links: [
                { label: "Features", href: "/#features" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "Pricing", href: "/#pricing" },
                { label: "FAQ", href: "/#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy", href: "/privacy" },
              ],
            },
            {
              title: "Get in touch",
              links: [
                {
                  label: "hello@conversionlanding.com",
                  href: "mailto:hello@conversionlanding.com",
                },
                { label: "+1 (415) 555-0136", href: "tel:+14155550136" },
                {
                  label: "San Francisco, CA",
                  href: "https://maps.google.com/?q=San%20Francisco%2C%20CA",
                },
              ],
            },
          ]}
          copyright="© 2026 Conversion Landing. All rights reserved."
        />
      </body>
    </html>
  );
}
