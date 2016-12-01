import * as React from "react";

export interface InputProps{
    onChange: (value: any) => void,
    label?: string
    id?: string,
    class?: string,
    value?: any
    type?: string
    style?: any
}

let last_id = 0;

export function Input(props: InputProps) {
    let id  = "";
    if (!props.id) {
        id = "input" + last_id;
        last_id+=1;
    } else {
        id = props.id
    }
    return  <div className={props.class +" float-label"}>
                <input type={props.type} required value={props.value} id={id} onChange={(e: any) => props.onChange(e.target.value)} />
                <label htmlFor={id}> {props.label} </label>
            </div>
}