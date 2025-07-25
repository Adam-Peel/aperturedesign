export const metadata = {
  title: "Aperture Design - Home",
  description:
    "Home page for Aperture Design, showcasing our services and values as provider of sustainable, clean, and efficient digital products. Services include web design, application design, development, and deployment.",
};

import Hero from "@/components/hero-home";
import FeaturesTitle from "@/components/process-grid";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesGrid from "@/components/features-grid";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesTitle />
      <FeaturesGrid />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
