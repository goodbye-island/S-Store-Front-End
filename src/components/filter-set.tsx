import { connect } from 'react-redux'
import { ClassFilterInput } from './class-filter-input'
import { State } from '../reducers'
import { Filter } from '../filter'
import { newFilter } from '../actions'
import config from "../config"
const mapStateToProps = (state: State) => {
  return {
    departments: state.departments
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onChange: (filter: Filter) => {
      dispatch(newFilter(filter, config + "/class_view"))
    }
  }
}

export const FilterSet = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassFilterInput)