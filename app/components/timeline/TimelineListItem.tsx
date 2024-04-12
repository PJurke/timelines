import Link from "next/link";

const TimelineListItem = (props: TimelineListItemProps) => {
    return (

        <div className="p-4 hover:bg-blue-100">
            <Link href={`/timeline/${props.id}`}>{props.name}</Link>
        </div>
        
    );
};

interface TimelineListItemProps {
    id: string;
    name: string;
}

export default TimelineListItem;