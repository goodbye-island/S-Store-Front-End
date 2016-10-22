import * as React from "react";
import { ClassSummary } from "./class-summary"
import {Course} from "../course"

interface CourseString extends Course {
    teacher_string: string,
    department_string: string
}

export interface CourseListProps {
    classes: Course[],
}

export class CourseList extends React.Component<CourseListProps, {}> {
     render() {
         let classes = this.props.classes.map( (c, i) => {
             return <ClassSummary key={c.title} title={c.title} professors={[c.teacher.slice()]} />
         });
         console.log(this.props.classes);
         return <div>
                    {classes}
                </div>
    }
}