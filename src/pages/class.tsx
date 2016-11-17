import * as React from "react";
import {ClassXCourse} from "../class"
import {ClassSummary} from "../components/class-summary"

import { connect } from 'react-redux'
import { State } from '../reducers'
import { newFilter } from '../actions'
import config from '../config'

export interface ClassProps {
    params: {CRN: string}
}

export interface ConnectedClass {
    class_: ClassXCourse,
    CRN: number,
    dispatch: (action: any) => void
}

export const ClassView = connect( (state: State, props: ClassProps) => ({class_: state.classes.find( c=>c.CRN == parseInt(props.params.CRN)), CRN: parseInt(props.params.CRN)}))
(class extends React.Component<ConnectedClass, {}> {
    static contextTypes = {
        store: React.PropTypes.object
    }
    constructor(props: ConnectedClass) {
        super(props);
        console.log(props.dispatch)
        props.dispatch(newFilter({"CRN": props.CRN}, config.api)) 
    }
    render() {
        if (!this.props.class_) {
            return <div> </div>
        }
        console.log(this.props.class_, this.context, this.props.CRN)
        return  <div>
                    <ClassSummary class_={this.props.class_} />
                </div>
    }
})