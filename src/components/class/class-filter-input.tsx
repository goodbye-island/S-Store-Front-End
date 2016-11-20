import * as React from "react";
import { Filter } from '../../filter'
import * as objectAssign from 'object-assign'
import {DropdownStringInput} from '../utilities/dropdown-string-input'
import {Input} from '../utilities/input'
import {IntInput} from '../utilities/int-input'

import {DepartmentDropdown} from '../department-dropdown'


export interface ClassFilterInputProps {
    onChange: (filter: Filter) => void,
}

export class ClassFilterInput extends React.Component<ClassFilterInputProps, Filter> {
    state: Filter = {}
    render() {
        return  <div className="filter">
                    <Input label="Title" onChange={title => {
                        this.setState({title: title});
                        this.props.onChange(objectAssign({}, this.state, {title: title}));
                    }}/>
                    <br/>
                    <DepartmentDropdown onChange={department => {
                            this.setState({department: department})
                            this.props.onChange(objectAssign({}, this.state, {department: department}));
                        }} label="Department"/>
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