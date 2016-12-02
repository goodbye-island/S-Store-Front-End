
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
