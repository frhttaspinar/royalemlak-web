import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royalemlak.com.tr"),
  title: "Royal Emlak ve Gayrimenkul | Amasya'nın En Güvenilir Emlak Rehberi",
  description: "Amasya merkezli Royal Emlak ve Gayrimenkul. 7 yılı aşkın süredir dürüstlük ve şeffaflıkla satılık, kiralık daire, arsa ve ticari mülk danışmanlığı.",
  openGraph: {
    title: "Royal Emlak ve Gayrimenkul",
    description: "Amasya'nın En Güvenilir Emlak Rehberi. Satılık ve Kiralık Gayrimenkul Danışmanlığı.",
    url: "https://royalemlak.com.tr",
    siteName: "Royal Emlak",
    images: [
      {
        url: "/royallogo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Royal Emlak ve Gayrimenkul",
    "image": "https://royalemlak.com.tr/royallogo.png",
    "@id": "",
    "url": "https://royalemlak.com.tr",
    "telephone": "+905443440520",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Şeyhcui, Poyraz Sk. No: 11/A",
      "addressLocality": "Merkez",
      "addressRegion": "Amasya",
      "postalCode": "05200",
      "addressCountry": "TR"
    }
  };

  return (
    <html
      lang="tr"
      className={`${inter.variable} scroll-smooth antialiased bg-white text-slate-900`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
