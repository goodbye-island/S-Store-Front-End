import * as React from "react";

import { connect } from 'react-redux'
import { State } from '../reducers'
import { Filter } from '../filter'

import {CourseList} from "./course-list"


const mapStateToProps = (state: State) => {
  return {
      classes: state.courses.filter( (c, i) => {
             return state.filter.title == undefined || c.title.toLowerCase().indexOf(state.filter.title.toLowerCase()) >= 0;
         })
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export const FilteredCourseList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseList)