import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarolPetHouse - Banho e Tosa para seu Pet",
  description:
    "Banho e tosa em Jundiaí - SP com cuidado, carinho e atendimento profissional para cães e gatos. Atendemos Jardim Martins, Vila Maringá e região.",
  applicationName: "CarolPetHouse",
  authors: [{ name: "CarolPetHouse" }],
  creator: "CarolPetHouse",
  publisher: "CarolPetHouse",
  category: "Pet grooming",
  keywords: [
    "CarolPetHouse",
    "Carol Pet House",
    "Ana Caroline Tosadora",
    "banho e tosa Jundiaí",
    "banho e tosa em Jundiaí",
    "tosadora em Jundiaí",
    "tosa higiênica Jundiaí",
    "banho para cachorro Jundiaí",
    "tosa para cachorro Jundiaí",
    "pet shop Jundiaí",
    "estética animal Jundiaí",
    "cuidados pet Jundiaí",
    "banho e tosa Jardim Martins",
    "banho e tosa Vila Maringá",
    "pet grooming Jundiaí",
    "cães e gatos Jundiaí",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CarolPetHouse - Banho e Tosa em Jundiaí",
    description:
      "Serviços de banho, tosa higiênica, hidratação e cuidados pet em Jundiaí - SP.",
    locale: "pt_BR",
    type: "website",
    siteName: "CarolPetHouse",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CarolPetHouse",
  alternateName: "Ana Caroline Tosadora",
  description:
    "Serviços profissionais de banho e tosa para cães e gatos em Jundiaí - SP.",
  telephone: "+55 11 97377-2653",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jundiaí",
    addressRegion: "SP",
    addressCountry: "BR",
    streetAddress: "Jardim Martins, Vila Maringá",
  },
  areaServed: [
    "Jundiaí - SP",
    "Jardim Martins",
    "Vila Maringá",
  ],
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/anacarol_sol/"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Banho para pets",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Tosa higiênica",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Banho e tosa",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
