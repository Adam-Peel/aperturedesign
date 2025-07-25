import {
  IconLeaf,
  IconGauge,
  IconLock,
  IconMessage2,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Container, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import classes from "../app/css/additional-styles/FeaturesGrid.module.css";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Performance by default",
    description:
      "Our number one priority is to ensure your applications are fast and responsive, and perform their intended functions well. We also practice good coding standards to keep your codebase clean and maintainable, which helps with performance and scalability.",
  },
  {
    icon: IconUser,
    title: "Accessibility and inclusion by default",
    description:
      "We follow well established design principles to ensure our sites are accessible, and quality assure them to assess what can be improved. We believe sites and applications can both look good and function in ways that allows everyone to access them, no matter what their internet speed, device, or requirements.",
  },
  {
    icon: IconLeaf,
    title: "Green by default",
    description:
      "We mitigate the environmental impact of our digital products through simple measures. We use green hosting providers and ensure back ups take account of changes only. We take care of image and media file sizes, use efficient coding, and optimise database queries.",
  },
  {
    icon: IconLock,
    title: "Private and secure by default",
    description:
      "Digital privacy is a right. We do not use cookies or trackers, and we do not sell your data to advertisers. For security, we use regulatory compliant technologies, and can set up user access and authorisation on databases. All of our business is conducted on platforms which regularly run virus and malware scans, and which regularly backup data.",
  },
  {
    icon: IconMessage2,
    title: "Communication",
    description:
      "At the heart of every strong relationship is communication. We are open and transparent about our processes, timelines, and costs. We will keep you informed at every stage of the project, and will answer your questions or address your concerns. This means that if we do not feel we can service your demands, we will not take the job.",
  },
  {
    icon: IconUsersGroup,
    title: "Open Source",
    description:
      "We use open source solutions where possible. This means that you can be sure that your data is not being sold to third parties and can be assured that your digital products are built in ways that don't have vendor lock-in. The open source community provides a wealth of resources, allowing the greatest flexibility for designing your user interfaces.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="#3c425cff" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function AboutGrid() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <div className="text-center pb-12" id="values">
        <h1
          className="mb-4 flex items-baseline justify-center space-x-3 text-5xl font-bold md:text-6xl"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          <span>Aperture</span>
          <span className="text-lg font-normal text-gray-500">
            /ăp′ər-chər/
          </span>
        </h1>
        <p
          className="mx-auto max-w-3xl text-lg text-gray-700"
          data-aos="zoom-y-out"
          data-aos-delay={300}
        >
          <strong>Noun: </strong>
          <em>
            "A device or opening through which light travels, especially the
            variable opening by which light enters a camera."
          </em>
        </p>
      </div>

      <Text size="sm" className={classes.description}>
        Aperture takes its inspiration from this simple principle of not
        flooding the product with too much light. We believe that good quality
        digital products are lean, clean, and are not over-exposed or have
        uneccessary features. Underpinning this philosophy are our following
        core values. We believe that by focusing on these values, we will create
        digital products that are not only good for our clients and their
        customers, but are good for society more broadly.
      </Text>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
