import * as React from "react";
import {Class} from "../class"
import {ClassSummary} from "../components/class-summary"

import { connect } from 'react-redux'
import { State } from '../reducers'

export interface ClassProps {
    params: {CRN: string}
}


export const ClassView = connect( (state: State, props: ClassProps) => ({class_: state.classes.find( c=>c.CRN == parseFloat(props.params.CRN))}))
(class extends React.Component<{class_: Class}, {}> {
    render() {
        return  <div>
                    
                </div>
    }
})