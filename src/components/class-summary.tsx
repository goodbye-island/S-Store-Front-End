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
        return <tr className={"class" + (this.props.class_.syllabus?" link":"")} onClick = { () => {
            if (!this.props.class_.syllabus) {
                console.warn("there isn't a syllabus for " + this.props.class_.CRN)
                return;
            }
            location.assign(config.api + "/syllabus_view?SyllaID=" + this.props.class_.syllabus)
        }}>
                    <td>
                        {this.props.class_.section}
                    </td>
                    <td>
                        {this.props.class_.CRN}
                    </td>
                    <td>
                        <Week days={this.props.class_.days}/>
                    </td>
                    <td>
                        {this.props.class_.time.toLocaleTimeString()}
                    </td>
                    <td>
                        {Math.floor(this.props.class_.length/60)}:{("0" + this.props.class_.length%60).slice(-2)}
                    </td>
                </tr>
    }
}