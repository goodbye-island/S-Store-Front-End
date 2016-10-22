import * as React from "react";
import { Filter } from '../filter'
import * as objectAssign from 'object-assign'

export interface CourseFilterInputProps {onChange: (filter: Filter) => void}

export class CourseFilterInput extends React.Component<CourseFilterInputProps, {}> {
    state: Filter = {}
    render() {
        return  <div className="FilterInput">
                    <input placeholder="title" onChange={(event: any) => {
                        this.setState({title: event.target.value});
                        this.props.onChange(objectAssign({}, this.state, {title: event.target.value}));
                    }}/>
                    <input placeholder="Course" onChange={(event: any) => {
                        this.setState({course: parseInt(event.target.value)});
                        this.props.onChange(objectAssign({}, this.state, {course: parseInt(event.target.value)}));
                    }}/>
                    <input placeholder="Department" onChange={(event: any) => {
                        this.setState({department: parseInt(event.target.value)});
                        this.props.onChange(objectAssign({}, this.state, {department: parseInt(event.target.value)}));
                    }}/>
                </div>
    }
}