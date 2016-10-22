import * as React from "react";
import {CourseFilterInput} from "../components/course-filter-input"
import {FilteredCourseList} from "../components/filtered-class-list"
export interface HomeProps {}


export class Home extends React.Component<HomeProps, {}> {
    state: {title: string} = {title: undefined}
    render() {
        return  <div>
                    home
                </div>
    }
}