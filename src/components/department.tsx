import { connect } from 'react-redux'
import { State } from '../control/reducers'
import * as React from "react";


const mapStateToProps = (state: State, props: {departmentID: number}) => {
  return {
    text: props.departmentID in state.departments?state.departments[props.departmentID].abbreviation:""
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export const Department =  connect<{text: string}, {}, {departmentID: number}> (mapStateToProps, mapDispatchToProps)(
    (props: {text: string}) => {
        return <span> {props.text} </span>
    }
)

