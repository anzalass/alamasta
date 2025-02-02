import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimoniSection from "@/components/sections/TestimoniSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="w-full">
      <HeroSection title={t("jumbotron")} desc={t("jumbotron2")} />
      <AboutSection title={t("aboutUs")} desc={t("aboutUs2")} />
      <ServiceSection />
      <ShowcaseSection />
      <TestimoniSection />
    </main>
  );
}
