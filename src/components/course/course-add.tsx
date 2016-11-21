import { connect } from 'react-redux'
import { State } from '../../reducers'
import { User, Roles } from '../../user'
import * as React from "react";
import {Course} from "../../class"
import {DropdownStringInput} from '../utilities/dropdown-string-input'
import {Input} from '../utilities/input'
import {IntInput} from '../utilities/int-input'

import {DepartmentDropdown} from '../department-dropdown'

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
            e => e.preventDefault()
        }>
            <Input value={this.state.title} label="Title" onChange={value => this.setState({title: value})} />
            <DepartmentDropdown onChange={value => this.setState({department: value})} label="Department"/>
            <IntInput value={this.state.course} label="Course #" onChange={value => this.setState({course: value})} /><br/>
            <textarea 
                style={{width: "100%", height: "100px", margin: "5px"}} 
                value={this.state.description}
                label="Description"
                onChange={(value: any) => this.setState({description: value.target.value})} />
        </form>
    }
})

