import { connect } from 'react-redux'
import { State } from '../control/reducers'

import * as React from "react";
import {DropdownStringInput} from './utilities/dropdown-string-input'
import {Terms} from '../control/terms'
interface TermDropdownProps {
    onChange: (id: number, term: string) => void
    label: string
}

interface ConnectedTermDropdownProps extends TermDropdownProps{
        terms: Terms
}

class DropdownStringInputInt extends DropdownStringInput<number>{}

export const TermDropdown = connect((state: State, props: TermDropdownProps) => ({terms: state.terms, onChange: props.onChange, label: props.label}))
(function(props: ConnectedTermDropdownProps) {
    return  <DropdownStringInputInt label={props.label} onChange = {
                (id) => {
                    console.log(id?props.terms[id]:undefined)
                    props.onChange(id, id?props.terms[id]:undefined);
                }
            } options = {Object.keys(props.terms).map(id => {return {id: parseInt(id), value: props.terms[parseInt(id)]}})}/>
})