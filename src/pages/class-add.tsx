import * as React from "react";
import {ClassXCourse} from "../class"
import {PdfView} from "../components/utilities/pdf-view"
import {Department} from "../components/department"

import { connect } from 'react-redux'
import { State } from '../reducers'
import { name } from '../user'

import { newFilter } from '../actions'
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
    state: {}
    constructor(props: ConnectedClass) {
        super(props);
        console.log(props.dispatch)
    }
    render() {
        return  <div style={{height: "100%"}}>
                    <form>
                        
                    </form>
                </div>
    }
})