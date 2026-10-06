import { navItems } from "@/config/site";
import { veterinaryJsonLd } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Patients } from "@/components/Patients";
import { Testimonials } from "@/components/Testimonials";
import { InstagramSection } from "@/components/InstagramSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { JsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Header items={navItems} />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <About />
        <Advantages />
        <Patients />
        <Testimonials />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
      <JsonLd data={veterinaryJsonLd()} />
    </>
  );
}
