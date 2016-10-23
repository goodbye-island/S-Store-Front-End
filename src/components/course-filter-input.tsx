import * as React from "react";
import { Filter } from '../filter'
import * as objectAssign from 'object-assign'
import {DropdownStringInput} from './utilities/dropdown-string-input'
export interface CourseFilterInputProps {
    onChange: (filter: Filter) => void,
    departments: { [id: number]: string}
}

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
                    <DropdownStringInput onChange = {
                        (id) => {
                            this.setState({department: id});
                            this.props.onChange(objectAssign({}, this.state, {department: id}));
                        }
                    } options = {
                        Object.keys(this.props.departments).map(id => {return {id: parseInt(id), value: this.props.departments[parseInt(id)]}})}/>
                </div>
    }
}