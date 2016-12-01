import * as React from "react";
import {Input,  InputProps} from "./input"
export interface TimeInput extends InputProps{
    value?: Date,
    onChange: (value: Date) => void,
}

export function TimeInput(props: TimeInput) {
    return <Input {...props} type="time" onChange={(e: string) => {
            let parts = e.split(':');
            let hours = parseInt(parts[0]);
            let minutes = parseInt(parts[1]);
            props.onChange(new Date(2000, 1, 1,hours, minutes));
            console.log(e)
        }}/>
}