import { ObjectId } from 'mongodb';
import clientPromise from '../mongo/mongodb';
import { Timeline } from '../definitions';

export default async (id: string): Promise<Timeline | null> => {

    try {

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME || 'timeline');

        const timeline = await db
            .collection<Timeline>('timelines')
            .findOne({
                '_id': new ObjectId(id)
            });
            
        return timeline;

    } catch(e) {
        console.error(e);
        throw e;
    }

}