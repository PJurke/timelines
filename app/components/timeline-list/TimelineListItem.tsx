import { ObjectId } from "mongodb";
import Link from "next/link";

const TimelineListItem = (props: TimelineListItemProps) => {
    return (

        <li className="p-4 hover:bg-slate-100">
            <Link className="text-slate-800 " href={`/timeline/${props.id.toString()}`}>{props.name}</Link>
        </li>
        
    );
};

interface TimelineListItemProps {
    id: ObjectId;
    name: string;
}

export default TimelineListItem;