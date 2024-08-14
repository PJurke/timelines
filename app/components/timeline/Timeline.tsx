import TimelineEventItem from "./event/TimelineEventItem";
import { TimelineEventProps } from "./event/TimelineEventProps";

const Timeline = (props: TimelineInterface) => {
    return (

        <div className="mt-10 relative space-y-8">
            <div className="absolute bg-black hidden h-full left-3 top-0 w-px -z-10 md:block"></div>
            
            {props?.events?.map((item) => (
                <TimelineEventItem key={item.date + item.title} date={item.date} title={item.title} />
            ))}
        </div>

    )
};

interface TimelineInterface {
    events: TimelineEventProps[]
}

export default Timeline;