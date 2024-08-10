import { TimelineEventProps } from "./TimelineEventProps";

const TimelineEventDetails = (props: TimelineEventProps) => {
    return (

        <div>
            <div className="text-gray-500 text-xs">{props.date}</div>
            <div className="text-xl">{props.title}</div>
        </div>
        
    );
};

export default TimelineEventDetails;