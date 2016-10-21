import * as React from "react";

export interface ClassFilterInputProps {onChange: (filter: Filter) => void}

export interface Filter {
    title?: string,
    course?: number
    department?: string,
    section?: number,
    semester?: number,
    year?: number,
    teacher?: string,
    CRN?: number,
    keyword?: string
}

export class ClassFilterInput extends React.Component<ClassFilterInputProps, {}> {
    state: Filter = {}
    render() {
        return  <div>
                    <input placeholder="title" onChange={(event: any) => {
                        this.setState({title: event.target.value});
                        this.props.onChange(this.state);
                    }}/>
                    <input placeholder="Course" onChange={(event: any) => {
                        this.setState({course: parseInt(event.target.value)});
                        this.props.onChange(this.state);
                    }}/>
                    <input placeholder="Department" onChange={(event: any) => {
                        this.setState({department: parseInt(event.target.value)});
                        this.props.onChange(this.state);
                    }}/>
                </div>
    }
}