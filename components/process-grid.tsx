import {
  IconDeviceDesktopAnalytics,
  IconCode,
  IconRepeat,
  IconTemplate,
} from "@tabler/icons-react";
import {
  Grid,
  GridCol,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "../app/css/additional-styles/FeaturesTitle.module.css";
import TimeLine from "./timeline";

const features = [
  {
    icon: IconTemplate,
    title: "Design",
    description:
      "The foundation of all great products is a solid design system. We use established principles to create intuitive and user-friendly interfaces, and well structured databases. Whether you need support with branding, logos, layout, accessibility, or more, we can help improve your user experience and enhance the delivery of your messages or products.",
  },
  {
    icon: IconCode,
    title: "Develop",
    description:
      "We use modern technologies and frameworks to build robust, scalable, and maintainable applications. This ensures that your product is not only functional but also optimized for performance, security, and scalability. We can also integrate features such as payment processing, user authentication, data management, and other third-party services.",
  },
  {
    icon: IconDeviceDesktopAnalytics,
    title: "Deploy",
    description:
      "We simplify deployment by providing a streamlined deployment process that ensures your application is live and accessible to users. We can help you with hosting, domain management, and continuous integration/continuous deployment (CI/CD) pipelines, ensuring that your product is always up-to-date and running smoothly.",
  },
  {
    icon: IconRepeat,
    title: "Maintain",
    description:
      "A successful launch is just the beginning. We offer ongoing maintenance and support. This includes regular reviews and performance monitoring. We can also help you with scaling your application as your user base grows, ensuring that it continues to meet the demands of your audience.",
  },
];

console.log(IconDeviceDesktopAnalytics, IconCode, IconRepeat, IconTemplate);

export default function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{
          deg: 133,
          from: "oklch(0.623 0.214 259.815)",
          to: "oklch(0.623 0.214 259.815)",
        }}
      >
        <feature.icon size={26} stroke={1.25} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="#595e72" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper} id="process">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Grid>
          <GridCol span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
              Aperture can help with all stages of the process.
            </Title>
            <Text c="#595e72">
              We understand that digital products can be complex and daunting.
              We also recognise that not everyone has the time or expertise to
              handle every aspect of the process. That's where we come in.
              Aperture can help with all stages of the process, from design and
              development to deployment and maintenance.
            </Text>
            <br />
            <br />
            <TimeLine />
            {/* <Button
              variant="gradient"
              gradient={{
                deg: 133,
                from: "oklch(0.623 0.214 259.815)",
                to: "oklch(0.623 0.214 259.815)",
              }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Get started
            </Button> */}
          </GridCol>
          <GridCol span={{ base: 12, md: 5 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
              {items}
            </SimpleGrid>
          </GridCol>
        </Grid>
      </div>
    </div>
  );
}
