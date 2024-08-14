export type TimelineDate = {
    day?: number;
    month?: number;
    year?: number;
}

export function formatTimelineDate(date: TimelineDate): string {
    if (date.year !== undefined && date.month !== undefined && date.day !== undefined) {
        // All three values defined: format as "Day.Month.Year"
        return `${date.day.toString().padStart(2, '0')}.${date.month.toString().padStart(2, '0')}.${date.year}`;
    } else if (date.year !== undefined && date.month !== undefined) {
        // Year and month defined: format as "Month.Year"
        return `${date.month.toString().padStart(2, '0')}.${date.year}`;
    } else if (date.year !== undefined) {
        // Only year defined: format as "Year"
        return `${date.year}`;
    } else {
        // Year not defined: return an error message indicating invalid date
        return 'Invalid';
    }
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