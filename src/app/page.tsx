import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import ServiceCards from "./components/ServiceCards";
import BlogCards from "./components/BlogCards";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactActions from "./components/ContactActions";
import AnimatedAboutImage from "./components/AnimatedAboutImage";

export default function Home() {
  return (
    <>
      <Header />


      <main className="flex-1 pt-20">
        {/* 1. Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-slate-900">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
              alt="Amasya satılık lüks daire ve lüks villa"
              fill
              priority
              className="object-cover"
            />
            {/* Koyu Yarı Şeffaf Katman (Overlay) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 text-white text-sm font-medium tracking-widest mb-6 backdrop-blur-md uppercase shadow-xl border border-white/20 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Mükemmeliyetin Adresi
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight max-w-5xl mx-auto [text-shadow:0_4px_10px_rgba(0,0,0,0.9)]">
              ROYAL EMLAK <span className="text-slate-200 font-extrabold">ve</span> GAYRİMENKUL
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight max-w-4xl mx-auto [text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
              AMASYA'NIN EN GÜVENİLİR EMLAK REHBERİ
            </h2>
            <p className="text-lg md:text-2xl text-slate-100 mb-10 font-medium drop-shadow-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">
              7 Yıldan Uzun Süredir Profesyonel Hizmet
            </p>
            <Link
              href="https://wa.me/905443440520"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-transform shadow-xl hover:scale-105"
            >
              Hemen İletişime Geçin
            </Link>
          </div>
        </section>

        {/* 2. Hakkımızda */}
        <section id="hakkimizda" className="py-24 bg-white scroll-mt-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedAboutImage />
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Veri Odaklı Kararlar,<br /> Mimari Hassasiyet.
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
                Emlak Blogu & Sektörel Analizler
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
                <div className="flex items-start">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 mr-4">
                    <MapPin className="h-5 w-5 text-slate-900" />
                  </span>
                  <p className="text-slate-700 text-lg pt-1.5">
                    Şeyhcui, Poyraz Sk. No: 11/A,<br />
                    05200 Amasya Merkez/Amasya
                  </p>
                </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.5516086786675!2d35.82390231536717!3d40.65080097933932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40879f94cd4c7d01%3A0xea21b36bb6a0c56!2sRoyal%20Emlak%20Gayrimenkul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
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

          <div className="border-t border-slate-200 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Royal Emlak ve Gayrimenkul. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Gizlilik Politikası</Link>
              <Link href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Kullanım Koşulları</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* 5. Sabit WhatsApp Butonu (Framer Motion nabız animasyonu) */}
      <WhatsAppButton />
    </>
  );
}
