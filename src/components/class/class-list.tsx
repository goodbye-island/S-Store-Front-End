import * as React from "react";
import { ClassSummary } from "./class-summary"
import {ClassXCourse} from "../../control/class"

interface ClassString extends ClassXCourse {
    teacher_string: string,
    department_string: string
}

export interface ClassListProps {
    classes: ClassXCourse[],
}

export class ClassList extends React.Component<ClassListProps, {}> {
     render() {
         let classes = this.props.classes.map( (c, i) => {
             return <ClassSummary key={c.title} class_={c} />
         });
         return <table className="class-list">
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
                    {classes}
                    </tbody>
                </table>
    }
}