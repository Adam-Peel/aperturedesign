import { Text } from "@mantine/core";
import Link from "next/link";
import classes from "../app/css/additional-styles/StatsGroup.module.css";

const data = [
  {
    title: "Carbon Savings",
    stats: "13,680",
    description:
      "Number of phone charges that use the same CO2 as our annual savings through being supplied by Ecotricity.",
    link: null,
  },
  {
    title: "Data",
    stats: "0",
    description:
      "The number of trackers we use, and total quantity of your data that we sell. Your data is your data.",
    link: null,
  },
  {
    title: "Green hosting",
    stats: "100%",
    description:
      "We host all our services with Krystal, a 100% renewable energy supplied hoster, who use highly efficient data centres.",
    link: null,
  },
  {
    title: "Site efficiency",
    stats: "A+",
    description:
      "Our site's carbon rating, putting us amongst the cleanest sites.",
    link: "https://www.websitecarbon.com/website/aperturedesign-net/",
  },
];

export default function StatsGroup() {
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
      {stat.link ? (
        <>
          <Link href={stat.link}>
            <Text className={classes.description}>
              <span className="text-blue-500">Website Carbon</span>
            </Text>
          </Link>
        </>
      ) : null}
    </div>
  ));
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-20" id="giving-back">
      <div
        className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
        data-aos="zoom-y-out"
      >
        <div className={classes.root}>{stats}</div>
      </div>
    </div>
  );
}
