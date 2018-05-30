export function getCurrentDay(day) {
    if (day != null) {
        return day;
    } else {
        const today = new Date();
        return dateToString(today);
    }
}

export function getDayString(day) {
    return getCurrentDay(day).toString();
}

export function getNextDay(day) {
    let date = getDate(day);
    date.setDate(date.getDate() + 1);
    return dateToString(date);
}

export function getPreviousDay(day) {
    let date = getDate(day);
    date.setDate(date.getDate() - 1);
    return dateToString(date);
}

export function getDate(string) {
    let year = string / 10000;
    string %= 10000;
    let month = string / 100 - 1;
    let day = string % 100;
    return new Date(year, month, day);
}

function dateToString(d) {
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
