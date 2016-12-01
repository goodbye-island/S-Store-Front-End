import { connect } from 'react-redux'
import { State } from '../reducers'

import * as React from "react";
import {DropdownStringInput} from './utilities/dropdown-string-input'
import {Input} from './utilities/input'
import {IntInput} from './utilities/int-input'

interface DepartmentDropdownProps {
    onChange: (id: number, full: {title: string, abbreviation: string}) => void
    label: string
}

interface ConnectedDropdownProps extends DepartmentDropdownProps{
        departments: { [id: number]: {title: string, abbreviation: string}}
}

class DropdownStringInputInt extends DropdownStringInput<number>{}

export const DepartmentDropdown = connect((state: State, props: DepartmentDropdownProps) => ({departments: state.departments, onChange: props.onChange, label: props.label}))
(function(props: ConnectedDropdownProps) {
    return  <DropdownStringInputInt label={props.label} onChange = {
                (id) => {
                    props.onChange(id, props.departments[id]);
                }
            } options = {Object.keys(props.departments).map(id => {return {id: parseInt(id), value: props.departments[parseInt(id)].title}})}/>
})