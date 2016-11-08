import * as React from "react";
import {Class, Course} from "../class"
import {Toggle} from "./utilities/toggle"
import {ClassList} from "./class-list"
import {Department} from "./department"
import {Week} from "./week"
export interface CourseSummaryProps {
    classes: Class[],
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
                        <Week days={this.props.course.classes.reduce( (last, class_) => {
                            let result: any = last;
                            for (let day in last) {
                                result[day] = result[day] || (class_.days as any)[day];
                            }
                            return  result;
                        }, {sun: false,mon: false,tue: false,wed: false,thu: false,fri: false,sat: false})}/>
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