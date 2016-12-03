import { connect } from 'react-redux'
import { State } from '../control/reducers'

import * as React from "react";
import {DropdownStringInput} from './utilities/dropdown-string-input'
import {User, name} from '../control/user'
import {fetchTeachers, setTeachers} from '../control/teacher'

interface TeacherDropdownProps {
    onChange: (id: number, user: User) => void
    label: string
}

interface ConnectedTeacherDropdownProps extends TeacherDropdownProps{
        teachers: User[],
        dispatch: (action: any) => void
}

class DropdownStringInputInt extends DropdownStringInput<number>{}

export const TeacherDropdown = connect((state: State, props: TeacherDropdownProps) => ({teachers: state.teachers, onChange: props.onChange, label: props.label}))
(function(props: ConnectedTeacherDropdownProps) {
    let teachers = props.teachers
    if (props.teachers == null) {
        fetchTeachers()
        .then(teachers => props.dispatch(setTeachers(teachers)))
        .catch(e => {setTimeout(()=>props.dispatch(setTeachers(null)), 1000); console.log(e) })
        teachers = [];
    }
    return  <DropdownStringInputInt label={props.label} onChange = {
                (id) => {
                    props.onChange(id, id!==undefined?teachers[id]:undefined);
                }
            } options = {Object.keys(teachers).map(key => {
                let id = parseInt(key);
                let teacher = teachers[id];
                return {id: id, value: name(teacher)}
            })}/>
})