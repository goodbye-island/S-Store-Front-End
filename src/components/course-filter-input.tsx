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
                        let course = parseInt(event.target.value);
                        if (isNaN(course)) {
                            course = undefined;
                        }
                        this.setState({course: course});
                        this.props.onChange(objectAssign({}, this.state, {course: course}));
                    }}/>
                    <input placeholder="Department" onChange={(event: any) => {
                        let department = parseInt(event.target.value);
                        if (isNaN(department)) {
                            department = undefined
                        }
                        this.setState({department: department});
                        this.props.onChange(objectAssign({}, this.state, {department: department}));
                    }}/>
                </div>
    }
}