import * as React from "react";
import {ClassFilterInput} from "../components/class-filter-input"
import {FilteredClassList} from "../components/filtered-class-list"
export interface SearchProps {}


export class Search extends React.Component<SearchProps, {title: string}> {
    state: {title: string} = {title: undefined}
    render() {
        let classes: {title: string, professors: string[]}[] = [
            {title: "hi", professors: []},
            {title: "Capstone is great", professors: []},
            {title: "CS 1", professors: []},

        ]
        return  <div>
                    <h1>Search for lovely things</h1>
                    <div>
                        <ClassFilterInput onChnage={ (filter) => this.setState({title: filter.title})} />
                        <FilteredClassList classes={classes} title={this.state.title} />
                    </div>
                </div>
    }
}