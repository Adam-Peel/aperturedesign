export const metadata = {
  title: "Aperture Design - Resources",
  description:
    "Resources page for Aperture Design, providing deeper answers and contact options to build on the main information pages.",
};

import ContactForm from "@/components/contact-form";
import BusinessCategories from "@/components/business-categories";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <ContactForm />
      <BusinessCategories />

      <Faq />
    </>
  );
}
