import * as React from "react";
import { Filter } from '../filter'
import * as objectAssign from 'object-assign'
import {DropdownStringInput} from './utilities/dropdown-string-input'
import {Input} from './utilities/input'
import {IntInput} from './utilities/int-input'

export interface ClassFilterInputProps {
    onChange: (filter: Filter) => void,
    departments: { [id: number]: {title: string, abbreviation: string}}
}

export class ClassFilterInput extends React.Component<ClassFilterInputProps, {}> {
    state: Filter = {}
    render() {
        return  <div className="filter">
                    <Input label="Title" onChange={title => {
                        this.setState({title: title});
                        this.props.onChange(objectAssign({}, this.state, {title: title}));
                    }}/>
                    <br/>
                    <DropdownStringInput label="Department" onChange = {
                        (id) => {
                            this.setState({department: id});
                            this.props.onChange(objectAssign({}, this.state, {department: id}));
                        }
                    } options = {Object.keys(this.props.departments).map(id => {return {id: parseInt(id), value: this.props.departments[parseInt(id)].title}})}/>
                    <IntInput label="Course Num" onChange={course => {
                        if (isNaN(course)) {
                            course = undefined;
                        }
                        this.setState({course: course});
                        this.props.onChange(objectAssign({}, this.state, {course: course}));
                    }}/>
                    <IntInput label="Section" onChange={section => {
                        if (isNaN(section)) {
                            section = undefined;
                        }
                        this.setState({section: section});
                        this.props.onChange(objectAssign({}, this.state, {section: section}));
                    }}/>
                </div>
    }
}