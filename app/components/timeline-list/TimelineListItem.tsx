import { ObjectId } from "mongodb";
import Link from "next/link";

const TimelineListItem = (props: TimelineListItemProps) => {
    return (

        <div className="p-4 hover:bg-blue-100">
            <Link href={`/timeline/${props.id.toString()}`}>{props.name}</Link>
        </div>
        
    );
};

interface TimelineListItemProps {
    id: ObjectId;
    name: string;
}

export default TimelineListItem;