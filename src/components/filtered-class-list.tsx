import * as React from "react";

import { connect } from 'react-redux'
import { State } from '../reducers'
import { Filter } from '../filter'
import { filter } from '../filter'

import {ClassList} from "./class-list"


const mapStateToProps = (state: State) => {
  return {
      course: state.courses.filter(filter(state))
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export const FilteredClassList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassList)