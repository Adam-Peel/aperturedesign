import { IconAt, IconClock } from "@tabler/icons-react";
import { Box, Stack, Text } from "@mantine/core";
import classes from "../app/css/additional-styles/ContactIcons.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconClock;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "info@aperturedesign.net", icon: IconAt },
  // { title: "Phone", description: "+44 (0)7539 075 969", icon: IconPhone },
  {
    title: "Max Response Time",
    description: "2 Working days",
    icon: IconClock,
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
}
