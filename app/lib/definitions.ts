export type Timeline = {
    _id: string
    name: string
    events: [Event]
};

export type Event = {
    date: string;
    title: string;
};