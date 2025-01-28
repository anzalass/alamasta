import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import OfferSection from "@/components/sections/OfferSection";
import VisiMisiSection from "@/components/sections/VisiMisiSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import ClosingSection from "@/components/sections/ClosingSection";

export default function Home() {

  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <OfferSection />
      <TestimoniSection />
      <ClosingSection />
    </main>
  );
}
