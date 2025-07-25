export const metadata = {
  title: "Aperture Design - Services",
  description:
    "Home page for Aperture Design, showcasing our services and values as provider of sustainable, clean, and efficient digital products. Services include web design, application design, development, and deployment.",
};

import { AboutGrid } from "@/components/about";
import PortfolioGrid from "@/components/team";
import LargeTestimonial from "@/components/large-testimonial";
import StatsGroup from "@/components/giving-back";

export default function Home() {
  return (
    <>
      <AboutGrid />
      <PortfolioGrid />
      <StatsGroup />
      <LargeTestimonial />
    </>
  );
}
