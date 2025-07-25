import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center" id="testimonial">
            {/* <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div> */}
            <p className="text-2xl font-bold text-gray-900">
              Good service should be for everyone. If your organisation is a
              small startup or charity we can get you online with a website that
              is{" "}
              <em className="italic text-gray-500">
                simple to maintain, affordable, and effective.
              </em>{" "}
              Ask about our{" "}
              <span className="text-blue-500">
                startups and non-profits discounts.
              </span>
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">
                Discounts are offered by discretion, and will not alter any
                other terms of service.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
