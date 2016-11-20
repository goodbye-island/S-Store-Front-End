import * as React from "react";
import { CourseSummary } from "./course-summary"
import {ClassXCourse} from "../class"
import config from "../config"
import {Week} from "./week"
export interface ClassSummaryProps {
    class_: ClassXCourse
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
    render() {
        return <tr className="class link" onClick = { () => {
            location.assign("class/" + this.props.class_.CRN)
        }}>
                    <td>
                        {this.props.class_.section}
                    </td>
                    <td>
                        {this.props.class_.term} {this.props.class_.year}
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