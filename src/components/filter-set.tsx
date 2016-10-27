import { connect } from 'react-redux'
import { ClassFilterInput } from './class-filter-input'
import { State } from '../reducers'
import { Filter } from '../filter'
import { newFilter } from '../actions'
const mapStateToProps = (state: State) => {
  return {
    departments: state.departments
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onChange: (filter: Filter) => {
      dispatch(newFilter(filter, "http://www.catohenry.com:8080/class_view"))
    }
  }
}

export const FilterSet = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassFilterInput)