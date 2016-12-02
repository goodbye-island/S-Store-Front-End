
export interface Week {
    sun: boolean,
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean
}

export interface Days {
    [id: number]: Week
}



