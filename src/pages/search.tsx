import * as React from "react";
import { FilteredCourseList } from "../components/filtered-class-list"
import { FilterSet } from "../components/filter-set"
import { CourseAdd } from "../components/course-add"
export interface SearchProps {}


export class Search extends React.Component<SearchProps, {title: string}> {
    state: {title: string} = {title: undefined}
    render() {
        return  <div className="search">
                    <h1>Courses</h1>
                    <div>
                        <FilterSet />
                        <FilteredCourseList />
                        <CourseAdd />
                    </div>
                </div>
    }
}