import AboutSection from "../component/aboutSection";
import ContactSection from "../component/contactSection";
import HeroSection from "../component/heroSection";
import PortofolioSection from "../component/portofolioSection";
import Footer from "../component/reUse/footer";
import ServiceSection from "../component/serviceSection";

export default function LandingPage() {
  return (
    <>
      <section id="home" className="hero">
        <HeroSection />
      </section>

      <section id="service" className="service mt-[14em] sm:mt-[10em] md:mt-0">
        <ServiceSection />
      </section>

      <section
        id="portofolio"
        className="service mt-[14em] sm:mt-[10em] md:mt-0"
      >
        <PortofolioSection />
      </section>

      <section id="about" className="about">
        <AboutSection />
      </section>

      <section id="contact" className="about">
        <ContactSection />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
}
