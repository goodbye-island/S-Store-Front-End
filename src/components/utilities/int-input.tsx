import * as React from "react";
import {InputProps} from "./input"
export interface IntInputProps extends InputProps{
    onChange: (value: number) => void,
}

export function IntInput(props: IntInputProps) {
    return <input value={props.value} id={props.id} class={props.class} onChange={(e: any) => props.onChange(parseInt(e.target.value))} />
}