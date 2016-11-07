import * as React from "react";
import {Input,  InputProps} from "./input"
export interface IntInputProps extends InputProps{
    onChange: (value: number) => void,
}

export function IntInput(props: IntInputProps) {
    return <Input {...props} onChange={(e: any) => props.onChange(parseInt(e.target.value))}/>
}