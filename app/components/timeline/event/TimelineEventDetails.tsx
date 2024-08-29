import { formatTimelineDate } from "../TimelineDate";
import { TimelineEventProps } from "./TimelineEventProps";

const TimelineEventDetails = (props: TimelineEventProps) => {
    return (

        <div>
            <time className="text-gray-500 text-xs">{formatTimelineDate(props.date)}</time>
            <div className="text-xl">{props.title}</div>
        </div>
        
    );
};

export default TimelineEventDetails;