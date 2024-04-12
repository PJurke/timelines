import { ObjectId } from "mongodb";

export type Timeline = {
    _id: ObjectId
    name: string
    events: [Event]
};

export type Event = {
    date: string;
    title: string;
};