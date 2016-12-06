import * as React from "react";
import {ClassXCourse} from "../control/class"
import {PdfView} from "../components/utilities/pdf-view"
import {Department} from "../components/department"
import {ClassSummary} from "../components/class/class-summary"

import { connect } from 'react-redux'
import { State } from '../control/reducers'
import { name } from '../control/user'

import { newFilter } from '../control/actions'
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
        props.dispatch(newFilter({"CRN": props.CRN}, config.api+"/class_view")) 
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
                    <div style={{float: "left", width: "100%", height: "69.4vw"}}>
                        <PdfView pdf={config.api + "/syllabus_view?SyllaID=" + this.props.class_.syllabus} />
                    </div>
                    <div>
                        <div>
                            {this.props.class_.description}
                        </div>
                        <table className="class-list">
                            <thead>
                                <tr>
                                    <th>Instructor</th>
                                    <th>Section</th>
                                    <th>Semester</th>
                                    <th>CRN</th>
                                    <th>Days</th>
                                    <th>Time</th>
                                    <th>Length</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ClassSummary class_={this.props.class_}/>
                            </tbody>
                        </table>
                    </div>
                </div>
    }
})