import * as React from "react";

export interface InputProps{
    onChange: (value: any) => void,
    label?: string
    id?: string,
    class?: string,
    value?: string
}

export function Input(props: InputProps) {
    return  <div className={props.class +" float-label"}>
                <input required value={props.value} id={props.id} onChange={(e: any) => props.onChange(e.target.value)} />
                <label> {props.label} </label>
            </div>
}