/**
 * Sitenin tek merkezi veri kaynağı.
 * Domain, iletişim bilgisi ve JSON-LD yapılandırılmış verisi yalnızca burada tanımlanır;
 * başka hiçbir dosyada işletme verisi tekrar edilmez.
 */

export const SITE_URL = "https://www.royalemlakamasya.com";

export const BUSINESS = {
  name: "Royal Emlak ve Gayrimenkul",
  shortName: "Royal Emlak",
  phone: "+905443440520",
  phoneDisplay: "0544 344 05 20",
  street: "Şeyhcui, Poyraz Sk. No: 11/A",
  locality: "Merkez",
  region: "Amasya",
  postalCode: "05200",
  country: "TR",
  instagram: "https://www.instagram.com/royalemlak05/",
  // Mevcut kodda kullanılan gerçek Google işletme bağlantısı
  google: "https://share.google/bEYhtgSnrT8vqj5Te",
  whatsapp: "https://wa.me/905443440520",
} as const;

/**
 * Emlak ofisine uygun RealEstateAgent şeması.
 * Puan, yorum sayısı, fiyat aralığı, çalışma saati ve koordinat gibi
 * doğrulanmamış alanlar bilinçli olarak eklenmemiştir.
 */
export function getBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/royallogo.png`,
    image: `${SITE_URL}/royallogo.png`,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    areaServed: {
      "@type": "City",
      name: "Amasya",
    },
    sameAs: [BUSINESS.instagram, BUSINESS.google],
  };
}
