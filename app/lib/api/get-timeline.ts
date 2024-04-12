import { ObjectId } from 'mongodb';
import clientPromise from '../mongo/mongodb';
import { Timeline } from '../definitions';

export default async function getTimeline(id: string): Promise<Timeline | null> {

    if (ObjectId.isValid(id) == false) {
        return null;
    }

    try {

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME || 'timeline');

        const timeline = await db
            .collection<Timeline>('timelines')
            .findOne({
                '_id': id
            });
            
        return timeline;

    } catch(e) {
        console.error(e);
        throw e;
    }

}