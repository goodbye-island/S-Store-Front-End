import { connect } from 'react-redux'
import { State } from '../control/reducers'
import { User, Roles } from '../control/user'
import * as React from "react";
import {Course, addCourseRequest} from "../control/class"
import {DropdownStringInput} from '../components/utilities/dropdown-string-input'
import {Input} from '../components/utilities/input'
import {IntInput} from '../components/utilities/int-input'

import {DepartmentDropdown} from '../components/department-dropdown'

export interface CourseAdd {
    user: User,
}

export const CourseAdd = connect( (state: State) => ({user: state.user}))
(class extends React.Component<CourseAdd, {}> {
    state: Course = {title: "", course: undefined, department: undefined, keyword: "", description: "", classes: []}
    render() {
        if (this.props.user.role === Roles.student || this.props.user.role === Roles.teacher) {
            return <div/>
        }
        return <form className="" onSubmit={
            e => {
                e.preventDefault()
                addCourseRequest(this.state)
                .then(e => console.log(e))
            }
        }>
            <Input value={this.state.title} label="Title" onChange={value => this.setState({title: value})} />
            <DepartmentDropdown onChange={value => this.setState({department: value})} label="Department"/>
            <IntInput label="Course #" onChange={value => this.setState({course: value})} /><br/>
            <textarea 
                style={{width: "100%", height: "100px", margin: "5px"}} 
                value={this.state.description}
                label="Description"
                onChange={(value: any) => this.setState({description: value.target.value})} />
            <input type="submit"/> 
        </form>
    }
})

