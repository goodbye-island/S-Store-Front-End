import { connect } from 'react-redux'
import { ClassFilterInput } from './class-filter-input'
import { State } from '../reducers'
import { Filter } from '../filter'
import { setFilter } from '../actions'
const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    onChange: (filter: Filter) => {
      dispatch(setFilter(filter))
    }
  }
}

export const FilterSet = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassFilterInput)