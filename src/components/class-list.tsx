import * as React from "react";
import { ClassSummary } from "./class-summary"
import {Class} from "../class"

interface ClassString extends Class {
    teacher_string: string,
    department_string: string
}

export interface ClassListProps {
    course: Class[],
}

export class ClassList extends React.Component<ClassListProps, {}> {
     render() {
         let course = this.props.course.map( (c, i) => {
             return <ClassSummary key={c.title} title={c.title} professors={[c.teacher.slice()]} description={c.description} />
         });
         return <div className="course-list">
                    {course}
                </div>
    }
}