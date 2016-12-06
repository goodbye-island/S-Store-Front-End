import * as React from "react";
import {Class, FREE_WEEK} from "../control/class"
import {Department} from "../components/department"

import {Input} from '../components/utilities/input'
import {IntInput} from '../components/utilities/int-input'
import {TimeInput} from '../components/utilities/time-input'

import {DepartmentDropdown} from '../components/department-dropdown'
import {TermDropdown} from '../components/term-dropdown'
import {TeacherDropdown} from '../components/teacher-dropdown'
import {DaysDropdown} from "../components/days-dropdown"

import { connect } from 'react-redux'
import { State } from '../control/reducers'
import { name } from '../control/user'

import { addClassRequest } from '../control/class'
import { addSyllabusRequest } from '../control/syllabus'

import config from '../config'

export interface ClassProps {
    params: {dep: string, course_num: string}
}

export interface ConnectedClass {
    dep: number,
    course_num: number,
    dispatch: (action: any) => void
}

interface ClassAddState extends Class{
    file: Blob,
    error?: JSX.Element|string,
    result?: JSX.Element|string
}

export const ClassAdd = connect( 
    (state: State, props: ClassProps) => ({
        dep: parseInt(Object.keys(state.departments).find((key: any) => state.departments[key as number].abbreviation === props.params.dep)), 
        course_num: parseInt(props.params.course_num)
    }))
(class extends React.Component<ConnectedClass, {}> {
    state: ClassAddState = {
                        year: undefined, // done
                        semester: undefined, //done
                        section: undefined, //done
                        term: undefined, //doen
                        CRN: undefined, // done
                        file: undefined,
                        days: FREE_WEEK, 
                        syllabus: undefined, 
                        time: undefined, 
                        length: undefined,  //done
                        teacher: {role: undefined, firstName: undefined, lastName: undefined, honorific: undefined, userId: undefined}
                    }
    constructor(props: ConnectedClass) {
        super(props);
        console.log(props.dispatch)
    }
    render() {
        return  <div style={{height: "100%"}}>
                    <form onSubmit={
                        e => {
                            e.preventDefault();
                            console.log(this.state.file)
                            addClassRequest(this.state, this.props.dep, this.props.course_num)
                            .then(e => {
                                if (e) {
                                    this.setState({error: null, result: "Added Class Successfully"})
                                } else {
                                        this.setState({error: "Couldn't add the class", result: null})
                                }
                                if (this.state.file) {
                                    return addSyllabusRequest(this.state.file, this.props.course_num, this.props.dep, this.state.semester, this.state.year,
                                    this.state.section)
                                } else {
                                    Promise.resolve()
                                }
                            })
                            .then(
                                (e: any) => {
                                    if (e === false) {
                                        this.setState({error: "Couldn't send syllabus"})
                                    } else if(e === true){
                                        this.setState({error: null, result: "Added Class and Syllabus Successfully"})
                                    }
                                }
                            )
                        }
                    }>
                        <input type="file" onChange={
                            (e: any) => {
                                this.setState({file: e.target.files[0]})
                            }
                        }/>
                        <IntInput label="Year" onChange={year => {
                            if (isNaN(year) || year <= 1900) {
                                year = undefined;
                            }
                            this.setState({year: year});
                        }}/>
                        <TermDropdown onChange={(term_id, term) => {
                            this.setState({semester: term_id})
                        }} label="Semester"/>
                        <IntInput label="Section" onChange={section => {
                            if (isNaN(section)) {
                                section = undefined;
                            }
                            this.setState({section: section});
                        }}/>
                        <IntInput label="CRN" onChange={CRN => {
                            if (isNaN(CRN)) {
                                CRN = undefined;
                            }
                            this.setState({CRN: CRN});
                        }}/>
                        <IntInput label="Length" onChange={length => {
                            if (isNaN(length)) {
                                length = undefined;
                            }
                            this.setState({length: length});
                        }}/>
                        <TimeInput label="Time" onChange={time => {
                            this.setState({time: time});
                        }}/>
                        <TeacherDropdown label="Teacher" onChange={
                            (id, teacher) => {
                                this.setState({teacher: teacher})
                            }
                        }/>
                        <DaysDropdown label="Schedule" onChange={
                            (id, week) => this.setState({days: week})
                        }/>
                        <input type="submit"/>
                    </form>
                    <div className="error">
                        {this.state.error}
                    </div>
                    <div className="result">
                        {this.state.result}
                    </div>
                </div>
    }
})