import * as React from "react";
import { ClassSummary } from "./class-summary"
import {Class} from "../class"

interface ClassString extends Class {
    teacher_string: string,
    department_string: string
}

export interface ClassListProps {
    classes: Class[],
}

export class ClassList extends React.Component<ClassListProps, {}> {
     render() {
         let classes = this.props.classes.map( (c, i) => {
             return <ClassSummary key={c.title} class_={c} />
         });
         return <table className="class-list">
                    <tr>
                        <th>Section</th>
                        <th>CRN</th>
                        <th>Days</th>
                    </tr>
                    {classes}
                </table>
    }
}