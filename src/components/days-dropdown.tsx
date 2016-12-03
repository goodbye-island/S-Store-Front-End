import { connect } from 'react-redux'
import { State } from '../control/reducers'

import * as React from "react";
import {DropdownInput} from './utilities/dropdown'
import {WeekView} from './utilities/week-view'

import {User, name} from '../control/user'
import {fetchDays, setDays, Days, Week} from '../control/days'

interface DaysDropdownProps {
    onChange: (id: number, week: Week) => void
    label: string
}

interface ConnectedDaysDropdownProps extends DaysDropdownProps{
        days: Days,
        dispatch: (action: any) => void
}

class DropdownInputInt extends DropdownInput<number>{}

export const DaysDropdown = connect((state: State, props: DaysDropdownProps) => ({days: state.days, onChange: props.onChange, label: props.label}))
(function(props: ConnectedDaysDropdownProps) {
    let days = props.days
    if (days == null) {
        fetchDays()
        .then(days => props.dispatch(setDays(days)))
        .catch(e => {setTimeout(()=>props.dispatch(setDays(null)), 1000); console.log(e) })
        days = {};
    }
    return  <DropdownInputInt label={props.label} onChange = {
                (id) => {
                    props.onChange(id, id?days[id]:undefined);
                }
            } options = {Object.keys(days).map(key => {
                let id = parseInt(key);
                return {id: id, value: <WeekView days={days[id]}/>}
            })}/>
})