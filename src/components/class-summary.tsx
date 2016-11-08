import * as React from "react";
import { CourseSummary } from "./course-summary"
import {Class} from "../class"
import config from "../config"
import {Week} from "./week"
export interface ClassSummaryProps {
    class_: Class
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
    render_inside() {
        return  <tr className="class">
                    <td>
                        {this.props.class_.section}
                    </td>
                    <td>
                        {this.props.class_.CRN}
                    </td>
                </tr>
    }
    render() {
        if (this.props.class_.syllabus === null) {
            return this.render_inside()
        } else {
            return <a href={config.api + "/syllabus_view?SyllaID=" + this.props.class_.syllabus}> {this.render_inside()} </a>
        }
    }
}