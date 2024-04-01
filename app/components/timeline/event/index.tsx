const TimelineEvent = (props: TimelineEventProps) => {
    return (

        <div className="mt-5">
            <div className="text-gray-500 text-sm">{props.date}</div>
            <div className="text-2xl">{props.title}</div>
        </div>
        
    );
};

interface TimelineEventProps {
    date: string;
    title: string;
}

export default TimelineEvent;