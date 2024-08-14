import { ObjectId } from "mongodb";

export type Timeline = {
    _id: ObjectId
    name: string
    events: [Event]
};

export type Event = {
    date: TimelineDate;
    title: string;
};

export type TimelineDate = {
    day?: number;
    month?: number;
    year?: number;
}