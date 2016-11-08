import * as React from "react";
import { CourseSummary } from "./course-summary"
import {Class} from "../class"
import config from "../config"
import {Week} from "./week"
export interface ClassSummaryProps {
    class_: Class
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
    render() {
        return <div className="class">
                {   (() => {
                        if (this.props.class_.syllabus === null) {
                            return <span> {this.props.class_.CRN} </span>
                        } else {
                            return <a href={config.api + "/syllabus_view?SyllaID=" + this.props.class_.syllabus}> {this.props.class_.CRN} </a>
                        }

                    })()
                }
                <Week days={this.props.class_.days} />
            </div>
    }
}