import { combineReducers } from 'redux'
import { Filter } from './filter'
import { Class } from './class'
import {SET_FILTER, SetFilterAction, ADD_CLASS, AddClassAction, SET_DEPARTMENTS, SetDepartmentsAction, SET_OAUTH} from './actions'
import * as objectAssign from 'object-assign'
/*
state is something like

{
    filter: {
        title?: string,
        course?: number
        department?: string,
        section?: number,
        semester?: number,
        year?: number,
        teacher?: string,
        CRN?: number,
        keyword?: string
    }

    courses: [
        {
            title: string,
            course: number
            department: number,
            section: number,
            semester: number,
            year: number,
            teacher: string,
            CRN: number,
            keyword: string
        }
    ]
}
*/

enum Roles {
    student,
    teacher,
    department_head,
    admin
}

interface user {
        google_oauth?: {
            token: string,
            expiration: Date,
        },
        role: Roles,
        user_id: number
    }

export interface State {
    filter: Filter,
    classes: Class[],
    departments: { [id: number]: string},
    user: user
}

export const sStore = combineReducers({
    filter,
    classes,
    departments,
    user
})

function user(state: user = {google_oauth: null, role: Roles.student, user_id: undefined}, action: any) {
    switch (action.type){
        case SET_OAUTH:
            return objectAssign({}, action.oauth);
        default:
            return state;
    }
}


function departments(state: { [id: number]: string} = {}, action: SetDepartmentsAction) {
    switch(action.type) {
        case SET_DEPARTMENTS:
            return objectAssign({}, action.departments);
        default:
            return state;
    }
}


function filter(state: Filter = {}, action: SetFilterAction) {
    switch(action.type) {
        case SET_FILTER:
            return objectAssign({}, state, action.filter);
        default:
            return state;
    }
}


function classes(state: Class[] = [], action: AddClassAction) {
    switch(action.type) {
        case ADD_CLASS:
            if (state.some( c => c.CRN == action.new_class.CRN)) {
                return state;
            }
            return state.concat(objectAssign({}, action.new_class));
        default:
            return state;
    }
}
