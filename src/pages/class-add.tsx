import * as React from "react";
import {Class, FREE_WEEK} from "../control/class"
import {Department} from "../components/department"

import {Input} from '../components/utilities/input'
import {IntInput} from '../components/utilities/int-input'
import {TimeInput} from '../components/utilities/time-input'

import {DepartmentDropdown} from '../components/department-dropdown'
import {TermDropdown} from '../components/term-dropdown'

import { connect } from 'react-redux'
import { State } from '../control/reducers'
import { name } from '../control/user'

import { newFilter } from '../control/actions'
import config from '../config'

export interface ClassProps {
    params: {dep: string, course_num: string}
}

export interface ConnectedClass {
    dep: string,
    course_num: number,
    dispatch: (action: any) => void
}

export const ClassAdd = connect( (state: State, props: ClassProps) => ({dep: props.params.dep, course_num: parseInt(props.params.course_num)}))
(class extends React.Component<ConnectedClass, {}> {
    state: Class = {
                        year: undefined, // done
                        semester: undefined, //done
                        section: undefined, //done
                        term: undefined, //doen
                        CRN: undefined, // done
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
                    <form>
                        <input type="file"/>
                        <IntInput label="Year" onChange={year => {
                            if (isNaN(year) || year <= 1900) {
                                year = undefined;
                            }
                            this.setState({year: year});
                        }}/>
                        <TermDropdown onChange={(term_id, term) => {
                                this.setState({semester: term})
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
                            console.log(time)
                        }}/>
                    </form>
                </div>
    }
})