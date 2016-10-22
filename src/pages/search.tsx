import * as React from "react";
import {FilteredCourseList} from "../components/filtered-course-list"
import { FilterSet } from "../components/filter-set"
export interface SearchProps {}


export class Search extends React.Component<SearchProps, {title: string}> {
    state: {title: string} = {title: undefined}
    render() {
        let classes: {title: string, professors: string[]}[] = [
            {title: "hi", professors: ["Isaac Park"]},
            {title: "Capstone is great", professors: ["Test"]},
            {title: "CS 1", professors: ["Facebook"]},
            {title: "CS 2", professors: ["stackoverflow"]},
            {title: "CS 3", professors: ["reddit"]},

        ]
        return  <div>
                    <h1>Courses</h1>
                    <div>
                        <FilterSet />
                        <FilteredCourseList />
                    </div>
                </div>
    }
}