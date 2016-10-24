import * as React from "react";
import {InputProps} from "./input"
export interface IntInputProps extends InputProps{
    onChange: (value: number) => void,
}

export function IntInput(props: IntInputProps) {
    return  <div className={props.class +" float-label"}>
                <input required value={props.value} id={props.id} onChange={(e: any) => props.onChange(parseInt(e.target.value))} />
                <label> {props.label} </label>
            </div>
}