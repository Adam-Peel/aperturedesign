import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-12 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Aperture Design
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Digital products, experiences, and platforms that are designed
                well. Our focus is to make sure that any information is clear,
                concise, and compelling, by highlighting your messages and
                products. Underlying this is a commitment to consistently high
                quality of service and standards, using the best technology
                providers. We use green-energy platforms, and practice
                scalability in our development, ensuring that our services are
                not only clean and effective today but also future-proofed for
                tomorrow.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                ></div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  aperturedesign.net
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_100s_infinite] text-gray-200">
                  Fully functional digital solutions
                </span>
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  --From simple websites
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --To complex applications
                </span>
                <br />
                <span className="animate-[code-4_10s_infinite]">
                  --We can help you get online.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  --Whether, design, development, or deployment.
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  --Whatever your needs, we can help.
                  <br />
                  --And if we can't, we'll be honest about it!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
