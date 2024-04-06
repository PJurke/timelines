import type { Metadata } from "next";
import TimelineEvent from "../components/timeline/event";

export const metadata: Metadata = {
  title: "Timeline"
};

export default function Page() {
    return (
      
        <div className="p-4">
          <h1 className="text-4xl">Timeline</h1>

          <TimelineEvent date="2024" title="3rd Event" />
          <TimelineEvent date="2023" title="2nd Event" />
          <TimelineEvent date="2022" title="1st Event" />
        </div>

    );
  }
  