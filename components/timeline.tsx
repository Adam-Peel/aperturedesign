import { Timeline, Text, TimelineItem } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";

export default function TimeLine() {
  return (
    <Timeline active={4} bulletSize={24} lineWidth={2}>
      <TimelineItem
        // bullet={<IconGitBranch size={12} />}
        title="Design"
      ></TimelineItem>

      <TimelineItem
        // bullet={<IconGitCommit size={12} />}
        title="Develop"
      ></TimelineItem>

      <TimelineItem
        title="Deploy"
        // bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      ></TimelineItem>

      <TimelineItem
        title="Maintain"
        // bullet={<IconMessageDots size={12} />}
      ></TimelineItem>
    </Timeline>
  );
}
