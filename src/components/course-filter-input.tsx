import * as React from "react";
import { Filter } from '../filter'
import * as objectAssign from 'object-assign'
import {DropdownStringInput} from './utilities/dropdown-string-input'
import {Input} from './utilities/input'
import {IntInput} from './utilities/int-input'

export interface CourseFilterInputProps {
    onChange: (filter: Filter) => void,
    departments: { [id: number]: string}
}

export class CourseFilterInput extends React.Component<CourseFilterInputProps, {}> {
    state: Filter = {}
    render() {
        return  <div className="FilterInput">
                    <Input label="Title" onChange={title => {
                        this.setState({title: title});
                        this.props.onChange(objectAssign({}, this.state, {title: title}));
                    }}/>
                    <IntInput label="Course" onChange={course => {
                        if (isNaN(course)) {
                            course = undefined;
                        }
                        this.setState({course: course});
                        this.props.onChange(objectAssign({}, this.state, {course: course}));
                    }}/>
                    <DropdownStringInput label="Department" onChange = {
                        (id) => {
                            this.setState({department: id});
                            this.props.onChange(objectAssign({}, this.state, {department: id}));
                        }
                    } options = {Object.keys(this.props.departments).map(id => {return {id: parseInt(id), value: this.props.departments[parseInt(id)]}})}/>
                    <IntInput label="Section" onChange={section => {
                        if (isNaN(section)) {
                            section = undefined;
                        }
                        this.setState({section: section});
                        this.props.onChange(objectAssign({}, this.state, {section: section}));
                    }}/>

                    <IntInput label="Year" onChange={year => {
                        if (isNaN(year)) {
                            year = undefined;
                        }
                        this.setState({year: year});
                        this.props.onChange(objectAssign({}, this.state, {year: year}));
                    }}/>
                    <Input label="Teacher" onChange={teacher => {
                        this.setState({teacher: teacher});
                        this.props.onChange(objectAssign({}, this.state, {teacher: teacher}));
                    }}/>
                    <IntInput label="CRN" onChange={year => {
                        if (isNaN(year)) {
                            year = undefined;
                        }
                        this.setState({year: year});
                        this.props.onChange(objectAssign({}, this.state, {year: year}));
                    }}/>
                    <Input label="Keyword" onChange={keyword => {
                        this.setState({keyword: keyword});
                        this.props.onChange(objectAssign({}, this.state, {keyword: keyword}));
                    }}/>
                </div>
    }
}