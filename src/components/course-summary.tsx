import * as React from "react";
import {Class, Course} from "../class"
import {Toggle} from "./utilities/toggle"
import {ClassList} from "./class-list"
export interface CourseSummaryProps {
    classes: Class[],
    course: Course
}

export class CourseSummary extends React.Component<CourseSummaryProps, {}> {
    state: {expanded: boolean} = {expanded: false};
    render() {
        return  <div style={{width: "100%"}}>
                    <h1 style={{textAlign: "center"}} onClick={() => this.setState({expanded: !this.state.expanded}) }> {this.props.course.title}</h1>
                    <Toggle expanded={this.state.expanded}>
                        <div style={{width: "50%", float: "left"}}>
                            {this.props.course.description}
                        </div>
                        <div style={{width: "50%", float: "right"}}>
                            <ClassList classes={this.props.classes}/>
                        </div>
                    </Toggle>
                </div>
    }
}