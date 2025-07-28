import { Timeline, TimelineItem } from "@mantine/core";

export default function TimeLine() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={2}>
      <TimelineItem title="Design"></TimelineItem>

      <TimelineItem title="Develop"></TimelineItem>

      <TimelineItem title="Deploy" lineVariant="dashed"></TimelineItem>

      <TimelineItem title="Maintain"></TimelineItem>
    </Timeline>
  );
}
