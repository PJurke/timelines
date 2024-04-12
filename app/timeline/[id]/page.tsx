import type { Metadata } from "next";
import TimelineEvent from "../../components/timeline/event/TimelineEvent";
import getTimeline from "../../lib/api/get-timeline";
import NoTimelineFound from "../../components/timeline/event/NoTimelineFound";
import { PageProps } from "@/.next/types/app/page";

export const metadata: Metadata = {
  title: "Timeline"
};

export default async function Page(props: PageProps) {
  
  const timelineId = props.params.id;

  if (props.params.id === undefined) {
    return <NoTimelineFound />;
  }

  const timeline = await getTimeline(props.params.id);

  if (timeline === null) {
    return <NoTimelineFound />;
  }
  
  return (
    
      <div className="p-4">
        <h1 className="text-4xl">{timeline?.name}</h1>

        {timeline?.events?.map((event) => (
          <TimelineEvent key={event.date + event.title} date={event.date} title={event.title} />
        ))}
      </div>

  );
}