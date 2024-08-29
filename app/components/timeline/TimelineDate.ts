export type TimelineDate = {
    day?: number;
    month?: number;
    year?: number;
}

export function formatTimelineDate(date: TimelineDate): string | null {

    // At least the year must be given (dd.mm.yyyy or mm.yyyy or yyyy are allowed)
    if (!date.year) {
        return null;
    }

    // Helper function to add leading zeros
    const pad = (num: number | undefined) => num?.toString().padStart(2, '0');

    // Take parts which exist and pad them if necessary
    const parts = [
        date.day !== undefined ? pad(date.day) : undefined,
        date.month !== undefined ? pad(date.month) : undefined,
        date.year.toString()
    ];

    // Join parts and add the separator
    return parts.filter(Boolean).join('.');
}

export function getDateValue(date: TimelineDate): number {
    // Returns a large number representing the date, so that comparisons are possible
    return (
        (date.year ?? 0) * 10000 + // year * 10000
        (date.month ?? 0) * 100 + // month * 100
        (date.day ?? 0) // day
    );
}

export function compareTimelineDates(date1: TimelineDate, date2: TimelineDate): number {
    const value1 = getDateValue(date1);
    const value2 = getDateValue(date2);

    // Compare the two values
    return value1 - value2;
}