import * as React from "react";
import { ClassSummary } from "./class-summary"

export interface FilteredClassListProps {
    classes: {title: string, professors: string[]}[],
    title: string
}

export class FilteredClassList extends React.Component<FilteredClassListProps, {}> {
     render() {
         let classes = this.props.classes.filter( (c, i) => {
             return this.props.title == undefined || c.title.toLowerCase().indexOf(this.props.title.toLowerCase()) >= 0;
         }).map( (c, i) => {
             return <ClassSummary key={c.title} title={c.title} professors={c.professors.slice()} />
         });
         return <div>
                    {classes}
                </div>
    }
}