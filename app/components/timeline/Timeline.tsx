import TimelineEvent from "./event/TimelineEvent";
import { TimelineEventProps } from "./event/TimelineEventProps";

const Timeline = (props: TimelineInterface) => {
    return (

        <div className="p-6 sm:p-10">
            <div className="after:absolute after:inset-y-0 after:w-px after:bg-slate-400 relative pl-6 after:left-0 grid gap-10">
                {props?.events?.map((item, index) => (
                    <TimelineEvent date={item.date} title={item.title} key={index} />
                ))}
            </div>
        </div>

    )
};

interface TimelineInterface {
    events: TimelineEventProps[]
}

export default Timeline;