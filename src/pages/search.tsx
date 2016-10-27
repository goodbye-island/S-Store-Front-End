import * as React from "react";
import { FilteredClassList } from "../components/filtered-class-list"
import { FilterSet } from "../components/filter-set"
export interface SearchProps {}


export class Search extends React.Component<SearchProps, {title: string}> {
    state: {title: string} = {title: undefined}
    render() {
        return  <div>
                    <h1>Courses</h1>
                    <div>
                        <FilterSet />
                        <FilteredClassList />
                    </div>
                </div>
    }
}