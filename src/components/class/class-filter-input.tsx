import * as React from "react";
import { Filter } from '../../control/filter'
import * as objectAssign from 'object-assign'
import {DropdownStringInput} from '../utilities/dropdown-string-input'
import {Input} from '../utilities/input'
import {IntInput} from '../utilities/int-input'

import {DepartmentDropdown} from '../department-dropdown'
import {TermDropdown} from '../term-dropdown'
import {TeacherDropdown} from '../teacher-dropdown'


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
                    <IntInput label="Year" onChange={year => {
                        if (isNaN(year) || year <= 1900) {
                            year = undefined;
                        }
                        this.setState({year: year});
                        this.props.onChange(objectAssign({}, this.state, {year: year}));
                    }}/>
                    <TermDropdown onChange={(term_id, term) => {
                            this.setState({semester: term})
                            this.props.onChange(objectAssign({}, this.state, {semester: term}));
                    }} label="Semester"/>
                    <IntInput label="CRN" onChange={CRN => {
                        if (isNaN(CRN)) {
                            CRN = undefined;
                        }
                        this.setState({course: CRN});
                        this.props.onChange(objectAssign({}, this.state, {CRN: CRN}));
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
                    <TeacherDropdown label="Teacher" onChange={ (id, t) => console.log(id, t)}/>
                </div>
    }
}