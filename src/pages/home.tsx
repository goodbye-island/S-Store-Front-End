import * as React from "react";
import {ClassFilterInput} from "../components/class-filter-input"
import {FilteredClassList} from "../components/filtered-class-list"
export interface HomeProps {}


export class Home extends React.Component<HomeProps, {}> {
    state: {title: string} = {title: undefined}
    render() {
        return  <div>
                    home
                </div>
    }
}