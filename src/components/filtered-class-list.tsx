import * as React from "react";

import { connect } from 'react-redux'
import { State } from '../reducers'
import { Filter } from '../filter'
import { filter } from '../filter'
import { to_courses } from '../class'


import {CourseList} from "./course-list"


const mapStateToProps = (state: State) => {
  return {
      courses: to_courses(state.classes.filter(filter(state)))
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export const FilteredCourseList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CourseList)