import * as React from "react";
import { ClassSummary } from "./class-summary"
import {Course} from "../course"

interface CourseString extends Course {
    teacher_string: string,
    department_string: string
}

export interface CourseListProps {
    course: Course[],
}

export class CourseList extends React.Component<CourseListProps, {}> {
     render() {
         let course = this.props.course.map( (c, i) => {
             return <ClassSummary key={c.title} title={c.title} professors={[c.teacher.slice()]} />
         });
         return <div className="course-list">
                    {course}
                </div>
    }
}