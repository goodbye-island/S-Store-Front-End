import * as React from "react";
import {FilteredCourseList} from "../components/filtered-course-list"
import { FilterSet } from "../components/filter-set"
export interface SearchProps {}


export class Search extends React.Component<SearchProps, {title: string}> {
    state: {title: string} = {title: undefined}
    render() {
        return  <div>
                    <h1>Courses</h1>
                    <div>
                        <FilterSet />
                        <FilteredCourseList />
                    </div>
                </div>
    }
}