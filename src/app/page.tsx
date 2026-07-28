import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import ServiceCards from "./components/ServiceCards";
import BlogCards from "./components/BlogCards";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactActions from "./components/ContactActions";
import AnimatedAboutImage from "./components/AnimatedAboutImage";
import Hero09 from "./components/Hero09";
import DeveloperCredit from "./components/DeveloperCredit";

export default function Home() {
  return (
    <>
      <Header />


      <main className="flex-1 pt-20">
        {/* 1. Hero Section (Hero09) */}
        <Hero09
          title="ROYAL EMLAK VE GAYRİMENKUL"
          description="Amasya'da Hayalinizdeki Evi Keşfedin. Royal Emlak güvencesiyle satılık ve kiralık en seçkin portföyler. Yeni yaşam alanınıza ilk adımı atın."
          heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
          heroAlt="Modern minimalist house with clean architecture"
          bottomTitle="Amasya'nın"
          bottomTitleLine2="En Güvenilir Emlak Ofisi."
          bottomText="Şeyhcui Mahallesi'ndeki ofisimizde, şeffaf ve profesyonel hizmet anlayışımızla sizleri çay kahve içmeye bekliyoruz."
          animation="subtle"
        />

        {/* 2. Hakkımızda */}
        <section id="hakkimizda" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedAboutImage />
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Amasya'da,<br /> En Güvenilir Emlak Ve Gayrimenkul Ofisi.
                </h2>
                <div className="w-20 h-1 bg-slate-900 mb-8"></div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Yavuz Selim Bülbül yönetiminde, 7 yılı aşkın süredir dürüstlük, şeffaflık ve üst düzey müşteri memnuniyeti ilkesiyle Amasya'da gayrimenkul sektörüne yön veriyoruz.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Gayrimenkul yatırımlarını yalnızca mülk alımı olarak değil, portföy optimizasyonu olarak ele alıyoruz. Pazar dinamiklerini, mimari değeri ve gelecek projeksiyonlarını birleştirerek benzersiz bir danışmanlık deneyimi sunuyoruz.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <span className="text-slate-900 font-bold text-xl">7+</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Yıllık Deneyim</h3>
                      <p className="text-sm text-slate-500 mt-1">Sektörde güvenilir rehberlik</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                        <span className="text-slate-900 font-bold text-xl">%100</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg">Şeffaflık</h3>
                      <p className="text-sm text-slate-500 mt-1">Dürüst ve açık iletişim</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Hizmetlerimiz */}
        <section id="hizmetlerimiz" className="py-24 bg-slate-50 border-t border-slate-100 scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Profesyonel Hizmetlerimiz
              </h2>
              <div className="w-20 h-1 bg-slate-900 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Amasya ve çevresinde gayrimenkul ihtiyaçlarınıza yönelik kapsamlı ve profesyonel çözümler üretiyoruz.
              </p>
            </div>

            <ServiceCards />
          </div>
        </section>

        {/* 4. Blog & Makale */}
        <section id="blog" className="py-24 bg-white border-t border-slate-100 scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Emlak Blogu
              </h2>
              <div className="w-20 h-1 bg-slate-900 mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Gayrimenkul dünyasındaki en güncel gelişmeler, yatırım tavsiyeleri ve piyasa analizleriyle doğru kararlar almanıza yardımcı oluyoruz.
              </p>
            </div>

            <BlogCards />
          </div>
        </section>
      </main>

      {/* 5. İletişim & Footer */}
      <footer id="iletisim" className="relative bg-white border-t border-slate-200 text-slate-600 scroll-mt-28 overflow-hidden">
        {/* Arka planda çok hafif gri bir vurgu */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-slate-50 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <Image
                  src="/royallogo.png"
                  alt="Royal Emlak ve Gayrimenkul"
                  width={320}
                  height={120}
                  className="h-16 md:h-24 w-auto object-contain"
                />
              </div>
              <p className="text-slate-600 mb-10 max-w-md text-lg leading-relaxed">
                Amasya&apos;da güvenilir ve şeffaf gayrimenkul danışmanlığının adresi. Hayalinizdeki mülke ulaşmak için bizimle iletişime geçin.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="https://maps.google.com/?q=Şeyhcui,+Poyraz+Sk.+No:+11/A,+Amasya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 mr-4 group-hover:bg-slate-200 transition-colors">
                    <MapPin className="h-5 w-5 text-slate-900" />
                  </span>
                  <p className="text-slate-700 text-lg pt-1.5 group-hover:text-slate-900 transition-colors">
                    Şeyhcui, Poyraz Sk. No: 11/A, Amasya
                  </p>
                </a>
                <div className="flex items-center">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 mr-4">
                    <Phone className="h-5 w-5 text-slate-900" />
                  </span>
                  <a href="tel:+905443440520" className="text-slate-900 hover:text-slate-600 font-bold text-2xl tracking-tight transition-colors">
                    0544 344 05 20
                  </a>
                </div>
              </div>

              <ContactActions />
            </div>

            {/* Google Maps iframe */}
            <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <iframe
                src="https://maps.google.com/maps?q=Şeyhcui,%20Poyraz%20Sk.%20No:%2011/A,%20Amasya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Emlak Konum"
              ></iframe>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-20 pt-8 flex flex-col justify-center items-center gap-1">
            <p className="text-slate-500 text-sm text-center">
              © {new Date().getFullYear()} Royal Emlak ve Gayrimenkul. Tüm hakları saklıdır.
            </p>
            <DeveloperCredit />
          </div>
        </div>
      </footer>

      {/* 5. Sabit WhatsApp Butonu (Framer Motion nabız animasyonu) */}
      <WhatsAppButton />
    </>
  );
}
