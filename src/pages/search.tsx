import * as React from "react";
import { CourseList } from "../components/course/course-list"
import { ClassFilterInput } from "../components/class/class-filter-input"
import { CourseAdd } from "../components/course/course-add"
import { Filter, filter } from '../control/filter'
import { ClassXCourse } from '../control/class'
import { to_courses } from '../control/class'
import { newFilter } from '../control/actions'

import { connect } from 'react-redux'
import { State } from '../control/reducers'
import  config from '../config'

export interface SearchProps {
    classes: ClassXCourse[],
    onFilterChange: (filter: Filter) => void
}


export const Search = connect( (state: State) => ({classes: state.classes}), (dispatch: any) => ({onFilterChange: (filter: Filter) => dispatch(newFilter(filter, config.api+"/class_view"))}) )
(class extends React.Component<SearchProps, {filter: Filter}> {
    state: {filter: Filter} = {filter: {}}
    render() {
        return  <div className="search">
                    <h1>Courses</h1>
                    <div>
                        <ClassFilterInput onChange={f => {
                                this.setState({filter: f});
                                this.props.onFilterChange(f);
                            }
                        } />
                        <CourseList courses={to_courses(this.props.classes.filter(filter(this.state.filter)))} />
                        <CourseAdd />
                    </div>
                </div>
    }
})