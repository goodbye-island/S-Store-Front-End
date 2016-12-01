import * as React from "react";
import { CourseSummary } from "./course-summary"
import {Course} from "../../control/class"

export interface CourseListProps {
    courses: Course[],
}

export class CourseList extends React.Component<CourseListProps, {}> {
     render() {
         let courses = this.props.courses.map( (c, i) => {
             return <CourseSummary key={c.course + ":" + c.department} course={c} classes={c.classes} />
         });
         return <div className="course-list">
                    {courses}
                </div>
    }
}