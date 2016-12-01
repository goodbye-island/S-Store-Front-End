import * as React from "react";
import {ClassXCourse} from "../../control/class"
import config from "../../config"
import { name } from "../../control/user"

import {Week} from "../utilities/week-view"
export interface ClassSummaryProps {
    class_: ClassXCourse
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
    render() {
        return <tr className="class link" onClick = { () => {
            location.assign("class/" + this.props.class_.CRN)
        }}>
                    <td>
                        {name(this.props.class_.teacher)}
                    </td>
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