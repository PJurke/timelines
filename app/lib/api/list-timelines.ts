import clientPromise from '../mongo/mongodb';
import { Timeline } from '../definitions';

export default async function listTimelines(): Promise<Timeline[]> {

    try {

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME || 'timeline');
        
        const timelines = await db
            .collection<Timeline>('timelines')
            .find({})
            .toArray();
            
        return timelines;

    } catch(e) {
        console.error(e);
        throw e;
    }

}