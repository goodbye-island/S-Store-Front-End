import { combineReducers } from 'redux'
import { Filter } from './filter'
import { Class } from './class'
import {SET_FILTER, SetFilterAction, ADD_CLASS, AddClassAction, SET_DEPARTMENTS, SetDepartmentsAction, SET_OAUTH, SetOauthAction, SET_USER, SetUserAction} from './actions'
import * as objectAssign from 'object-assign'
export enum Roles {
    student,
    teacher,
    department_head,
    admin
}

export interface User {
        googleOauth?: {
            token: string,
            expiration: Date,
        },
        role: Roles,
        firstName: string,
        lastName: string
        honorific: string
        userId: number
    }

export interface State {
    filter: Filter,
    classes: Class[],
    departments: { [id: number]: {title: string, abbreviation: string}},
    user: User
}

export const sStore = combineReducers({
    filter,
    classes,
    departments,
    user
})

function user(state: User = {googleOauth: null, role: Roles.student, userId: undefined, firstName: undefined, lastName: undefined, honorific: undefined}, action: SetOauthAction|SetUserAction): User {
    switch (action.type){
        case SET_OAUTH:
            return objectAssign(state, {googleOauth: {expiration: (action as SetOauthAction).expiration, token: (action as SetOauthAction).token}});
        case SET_USER:
            return objectAssign(state, action as SetUserAction);
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
