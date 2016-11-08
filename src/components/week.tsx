import * as React from "react";


export function Week(props: {days: {
        sun: boolean,
        mon: boolean,
        tue: boolean,
        wed: boolean,
        thu: boolean,
        fri: boolean,
        sat: boolean
    }
}) {
    return <div className="week">
        <div className={props.days.sun?"inuse":"free"}>S</div>
        <div className={props.days.mon?"inuse":"free"}>M</div>
        <div className={props.days.tue?"inuse":"free"}>T</div>
        <div className={props.days.wed?"inuse":"free"}>W</div>
        <div className={props.days.thu?"inuse":"free"}>T</div>
        <div className={props.days.fri?"inuse":"free"}>F</div>
        <div className={props.days.sat?"inuse":"free"}>S</div>

    </div>
}