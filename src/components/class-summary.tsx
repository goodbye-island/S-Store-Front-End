import * as React from "react";
import { CourseSummary } from "./course-summary"
import {Class} from "../class"
export interface ClassSummaryProps {
    class_: Class
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
     render() {
         return <div>
                    {this.props.class_.CRN}
                </div>
    }
}