export type Timeline = {
    name: string
    events: [Event]
};

export type Event = {
    date: string;
    title: string;
};