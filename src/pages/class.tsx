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
        return  <div style={{height: "100%"}}>
                    <h1 style={{textAlign: "center"}}>
                        <span className="department-acronym"><Department departmentID={this.props.class_.department}/></span>
                        <span> </span>
                        <span className="course-number">{this.props.class_.course}</span>
                        <span>-</span>
                        <span className="section-number">{this.props.class_.section}</span>
                        <span>: </span>
                        <span className="title">{this.props.class_.title}</span>
                        <span> </span>
                        <span className="term">({this.props.class_.term}-{this.props.class_.year})</span>
                    </h1>
                    <div style={{float: "left", width: "50%", height: "34.7vw"}}>
                        <PdfView pdf={config.api + "/syllabus_view?SyllaID=" + this.props.class_.syllabus} />
                    </div>
                    <div style={{float: "right", width: "50%", height: "100%", padding: "10px"}}>
                        <div>
                            {this.props.class_.description}
                        </div>
                        <div>
                            {name(this.props.class_.teacher)}
                        </div>
                    </div>
                </div>
    }
})