import * as React from "react";

export interface ClassFilterInputProps {onChnage: (filter: Filter) => void}

export interface Filter {
    title: string,

}

export class ClassFilterInput extends React.Component<ClassFilterInputProps, {}> {
     render() {
        return  <div>
                    <input placeholder="title" onChange={(event: any) => {this.props.onChnage({title: event.target.value as string})}}/>
                </div>
    }
}