import { connect } from 'react-redux'
import { State, User, Roles } from '../reducers'
import * as React from "react";
import {Course} from "../class"
import {DropdownStringInput} from './utilities/dropdown-string-input'
import {Input} from './utilities/input'
import {IntInput} from './utilities/int-input'

import {DepartmentDropdown} from './department-dropdown'

export interface CourseAdd {
    user: User,
    departments: { [id: number]: {title: string, abbreviation: string}}
}

export const CourseAdd = connect( (state: State) => ({user: state.user, departments: state.departments}))
(class extends React.Component<CourseAdd, {}> {
    state: Course = {title: "", course: undefined, department: undefined, keyword: "", description: "", classes: []}
    render() {
        if (this.props.user.role === Roles.student || this.props.user.role === Roles.teacher) {
            return <div/>
        }
        return <form className="" onSubmit={
            e => e.preventDefault()
        }>
            <Input value={this.state.title} label="Title" onChange={value => this.setState({title: value})} />
            <DepartmentDropdown onChange={value => this.setState({department: value})} label="Department"/>
            <IntInput value={this.state.course} label="Course #" onChange={value => this.setState({course: value})} />
        </form>
    }
})

