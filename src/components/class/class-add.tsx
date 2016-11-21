import { connect } from 'react-redux'
import { State} from '../../reducers'
import { User, Roles } from '../../user'
import * as React from "react";
import {Course, Class} from "../../class"
import {DropdownStringInput} from '../utilities/dropdown-string-input'
import {Input} from '../utilities/input'
import {IntInput} from '../utilities/int-input'

import {DepartmentDropdown} from '../department-dropdown'
import {Week} from "../utilities/week-view"

export interface ClassAdd {
    user: User,
    course: Course
}

export const ClassAdd = connect( (state: State) => ({user: state.user}))
(class extends React.Component<ClassAdd, {}> {
    state: Class;
    constructor(props: ClassAdd) {
        super(props);

        this.state = {
            section: undefined,
            semester: undefined,
            term: "", year: undefined,
            teacher: props.user, 
            CRN: undefined, 
            days: {sun: false, mon: false, tue: false, thu: false, wed: false, fri: false, sat: false},
            syllabus: undefined,
            time: undefined,
            length: undefined
        }
    }
    render() {
        if (this.props.user.role === Roles.student || this.props.user.role === Roles.teacher) {
            return <div/>
        }
        return <tr className={"class-add" + (this.state.syllabus?" link":"")} >
                    <td>
                        <IntInput value={this.state.section} label="section" onChange={v => this.setState({section: v})} />
                    </td>
                    <td>
                        {this.state.term} <IntInput value={this.state.year} label="year"  onChange={v => this.setState({year: v})} />
                    </td>
                    <td>
                        <IntInput value={this.state.CRN} label="CRN"  onChange={v => this.setState({CRN: v})} />
                    </td>
                    <td>
                        <Week days={this.state.days}/>
                    </td>
                    <td>
                        <Input value={this.state.CRN} label="Start"  onChange={v => this.setState({start: new Date(v)})} />
                    </td>
                    <td>
                        {Math.floor(this.state.length/60)}:{("0" + this.state.length%60).slice(-2)}
                    </td>
                </tr>
    }
})

