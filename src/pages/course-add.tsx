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
    departments: { [id: number]: {title: string, abbreviation: string}}
}

interface CourseAddState extends Course{
    error: string,
    result?: JSX.Element
}

export const CourseAdd = connect( (state: State) => ({user: state.user, departments: state.departments}))
(class extends React.Component<CourseAdd, {}> {
    state: CourseAddState = {title: "", course: undefined, department: undefined, keyword: "", description: "", classes: [], error: ""}
    render() {
        return <form className="" onSubmit={
            e => {
                e.preventDefault()
                addCourseRequest(this.state)
                .then(result => {
                    if (result) {
                        this.setState({error: "", result: <a href={location.protocol + "//" + location.host + "/class/add/"+this.props.departments[this.state.department].abbreviation +"/"+this.state.course}>Successful: Add a class</a>});
                    } else {
                        this.setState({error: "Something went wrong", result: null})
                    }
                });
            }
        }>
            <h1 style={{textAlign: "center", fontSize: "60px"}}>Add a Course</h1>
            <Input value={this.state.title} label="Title" onChange={value => this.setState({title: value})} />
            <DepartmentDropdown onChange={value => this.setState({department: value})} label="Department"/>
            <IntInput label="Course #" onChange={value => this.setState({course: value})} /><br/>
            <textarea 
                style={{width: "100%", height: "100px", margin: "5px"}} 
                value={this.state.description}
                label="Description"
                onChange={(value: any) => this.setState({description: value.target.value})} />
            <input type="submit"/>
            <div className="error">
                {this.state.error}
            </div>
            <div className="result">
                {this.state.result}
            </div>
        </form>
    }
})

