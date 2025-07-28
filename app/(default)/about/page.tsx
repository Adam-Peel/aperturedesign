export const metadata = {
  title: "Aperture Design - Services",
  description:
    "Home page for Aperture Design, provider of sustainable, clean, and efficient web design and application design. | Based in Nottingham.",
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
