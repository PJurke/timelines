import type { Metadata } from "next";
import TimelineEvent from "../components/timeline/event/TimelineEvent";
import listTimelines from "../lib/api/get-timeline";
import { PageProps } from "@/.next/types/app/layout";

export const metadata: Metadata = {
  title: "Timeline"
};

export default async function Page(props: PageProps) {
  
  if (props.searchParams?.id === undefined) {
    console.log('nein');
    return;
  }

  //const timeline = await listTimelines('6611af95ecf8c97fc6d9ce41');
  const timeline = await listTimelines(props.searchParams.id);
  
  return (
    
      <div className="p-4">
        <h1 className="text-4xl">{timeline?.name}</h1>

        {timeline?.events.map((event) => (
          <TimelineEvent date={event.date} title={event.title} />
        ))}
      </div>

  );
}