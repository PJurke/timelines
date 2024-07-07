import { TimelineEventProps } from "./TimelineEventProps";

const TimelineEvent = (props: TimelineEventProps) => {
    return (

        <div className="grid gap-1 text-sm relative">
            <div className="aspect-square w-3 bg-slate-400 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
            <div className="font-medium">{props.date}</div>
            <div>{props.title}</div>
        </div>
        
    );
};

export default TimelineEvent;