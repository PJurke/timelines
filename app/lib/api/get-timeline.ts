import { ObjectId } from 'mongodb';
import clientPromise from '../mongo/mongodb';
import { Timeline } from '../definitions';
import { compareTimelineDates } from '../../components/timeline/TimelineDate';

export default async function getTimeline(id: ObjectId): Promise<Timeline | null> {

    try {

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME || 'timeline');

        const timeline = await db
            .collection<Timeline>('timelines')
            .findOne({
                _id: id
            });

        if (timeline && timeline.events) {
            timeline.events.sort((a, b) => {
                return compareTimelineDates(b.date, a.date);
            });
        }
            
        return timeline;

    } catch(e) {
        console.error(e);
        throw e;
    }

}