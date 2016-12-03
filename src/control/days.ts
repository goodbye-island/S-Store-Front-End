import config from '../config'

export const SET_DAYS = "SET_DAYS"

export interface Week {
    sun: boolean,
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    id: number
}

export interface Days {
    [id: number]: Week
}

interface DayDB {
    "Day_ID": number,
    "Days": string
}

export function toWeek(day_string: string, id: number): Week {
          
    return {
                sun: day_string.includes('Su'),
                mon: day_string.includes("M"),
                tue: day_string.includes("T"),
                wed: day_string.includes("W"),
                thu: day_string.includes("Th"),
                fri: day_string.includes("F"),
                sat: day_string.includes("S"),
                id: id
            }
}

export function fetchDays(): Promise<Days>{
    return fetch(config.api + "/day_view")
    .then(r => r.json())
    .then(j => j as DayDB[])
    .then(db => {
        let result: Days = {};
        db.forEach(d => {
            let week = toWeek(d.Days, d.Day_ID);
            result[week.id] = week;
        })
        return result;
    })
}

export interface SetDaysAction extends Redux.Action {
    days: Days
}

export function setDays(days: Days): SetDaysAction {
    return {type: SET_DAYS, days: days}
}