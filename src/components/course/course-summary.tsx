import * as React from "react";
import {ClassXCourse, Course} from "../../control/class"
import {Toggle} from "../utilities/toggle"
import {ClassList} from "../class/class-list"
import {Department} from "../department"
import {WeekView} from "../utilities/week-view"
export interface CourseSummaryProps {
    classes: ClassXCourse[],
    course: Course
}

export class CourseSummary extends React.Component<CourseSummaryProps, {}> {
    state: {expanded: boolean} = {expanded: false};
    render() {
        return  <div className={"course" + (this.state.expanded?" expanded":"")}>
                    <h1 onClick={ () => this.setState({"expanded": !this.state.expanded}) }>
                        <span className="department-acronym"><Department departmentID={this.props.course.department}/></span>
                        <span> </span>
                        <span className="course-number">{this.props.course.course}</span>
                        <span>: </span>
                        <span className="title">{this.props.course.title}</span>
                    </h1>
                    <Toggle expanded={this.state.expanded}>
                        <div className="description">
                            {this.props.course.description}
                        </div>
                        <div className="classes">
                            <ClassList classes={this.props.classes}/>
                        </div>
                    </Toggle>
                </div>
    }
}