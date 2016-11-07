import * as React from "react";
import {Class, Course} from "../class"
import {Toggle} from "./utilities/toggle"
import {ClassList} from "./class-list"
import {Department} from "./department"
export interface CourseSummaryProps {
    classes: Class[],
    course: Course
}

export class CourseSummary extends React.Component<CourseSummaryProps, {}> {
    state: {expanded: boolean} = {expanded: false};
    render() {
        return  <div className="course">
                    <h1 onClick={ () => this.setState({"expanded": !this.state.expanded}) }>
                        <span className="title">{this.props.course.title} </span>
                        <span className="department-acronym"><Department departmentID={this.props.course.department}/></span>
                         
                        <span className="course-number">{this.props.course.course}</span>
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