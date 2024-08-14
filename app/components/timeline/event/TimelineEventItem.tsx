import TimelineEventDetails from "./TimelineEventDetails";
import { TimelineEventProps } from "./TimelineEventProps";

export default function TimelineEventItem(props: TimelineEventProps) {
    return (
        <div className="flex items-center md:space-x-6">
            <div className="bg-white border border-black hidden h-6 rounded-full w-6 md:block"></div>
            <TimelineEventDetails key={props.date + props.title} date={props.date} title={props.title} />
        </div>
    );
}