import * as React from "react";

export interface InputProps{
    onChange: (value: any) => void,
    label?: string
    id?: string,
    class?: string,
    value?: string
}

export function Input(props: InputProps) {
    return <input value={props.value} id={props.id} class={props.class} onChange={(e: any) => props.onChange(e.target.value)} />
}