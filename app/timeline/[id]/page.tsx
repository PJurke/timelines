import type { Metadata } from "next";
import getTimeline from "../../lib/api/get-timeline";
import NoTimelineFound from "../../components/timeline/event/alerts/NoTimelineFound";
import { PageProps } from "@/.next/types/app/page";
import { ObjectId } from "mongodb";
import Timeline from "@/app/components/timeline/Timeline";

export const metadata: Metadata = {
  title: "Timeline"
};

export default async function Page(props: PageProps) {
  
  // Get timeline id from url
  const { id } = props.params;

  // If the id is not defined or not valid, then return NoTimelineFound
  if (!id || !ObjectId.isValid(id)) {
    return <NoTimelineFound />;
  }

  // Query timeline from database
  const timeline = await getTimeline(new ObjectId(props.params.id as string));

  // If there is no timeline, then retrieve NoTimelineFound
  if (timeline === null) {
    return <NoTimelineFound />;
  }
  
  return (
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-4xl">{timeline?.name}</h1>
        <Timeline events={timeline.events} />
      </div>
  );
}