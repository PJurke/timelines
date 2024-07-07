import type { Metadata } from "next";
import listTimelines from "../lib/api/list-timelines";
import TimelineListItem from "../components/timeline-list/TimelineListItem";

export const metadata: Metadata = {
  title: "Timeline Overview"
};

export default async function Page() {

  const timelines = await listTimelines();
  
  return (
    
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-4xl">All Timelines</h1>

        <div className="mt-5">
          {timelines?.map((timeline) => 
            <TimelineListItem key={timeline._id.toString()} id={timeline._id} name={timeline.name} />
          )}
        </div>
      </div>

  );
}