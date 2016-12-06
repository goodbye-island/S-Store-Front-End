import * as React from "react";
import { Filter } from '../../control/filter'
import * as objectAssign from 'object-assign'
import {DropdownStringInput} from '../utilities/dropdown-string-input'
import {Input} from '../utilities/input'
import {IntInput} from '../utilities/int-input'

import {DepartmentDropdown} from '../department-dropdown'
import {TermDropdown} from '../term-dropdown'
import {TeacherDropdown} from '../teacher-dropdown'
import {DropdownInput} from '../utilities/dropdown'


export interface ClassFilterInputProps {
    onChange: (filter: Filter) => void,
}

class DropdownInputNumber extends DropdownInput<number>{}

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
                    <DropdownInputNumber label="Syllabus" options={[{value: <div>Yes</div>, id: 1}, {value: <div>No</div>, id: 3}, {value: <div>Doesn't Matter</div>, id: 2}]} onChange={ (id) => {
                        let syllabus: boolean = undefined
                        if (id == 3) {
                            syllabus = false;
                        } else if (id == 1) {
                            syllabus = true;
                        };
                        this.setState({syllabus: syllabus})
                        console.log(syllabus)
                        this.props.onChange(objectAssign({}, this.state, {syllabus: syllabus}));

                    }}/>

                </div>
    }
}