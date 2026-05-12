import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WhyUs from "@/components/WhyUs/WhyUs";
import StatsBar from "@/components/StatsBar/StatsBar";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Doctors from "@/components/Doctors/Doctors";
import ConnectDoctor from "@/components/ConnectDoctor/ConnectDoctor";
import Conditions from "@/components/Conditions/Conditions";
import Benefits from "@/components/Benefits/Benefits";
import Pricing from "@/components/Pricing/Pricing";
import Renewal from "@/components/Renewal/Renewal";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import BottomCTA from "@/components/BottomCTA/BottomCTA";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <StatsBar />
        <HowItWorks />
        <Doctors />
        <ConnectDoctor />
        <Conditions />
        <Benefits />
        <Pricing />
        <Renewal />
        <Testimonials />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
      <JsonLd id="ld-breadcrumb" data={breadcrumbSchema()} />
      <JsonLd id="ld-service" data={serviceSchema()} />
      <JsonLd id="ld-faq" data={faqSchema()} />
    </>
  );
}
