import { combineReducers } from 'redux'
import { Filter } from './filter'
import { Class } from './class'
import { Roles } from './user'
import {SET_FILTER, SetFilterAction, ADD_CLASS, AddClassAction, SET_DEPARTMENTS, SetDepartmentsAction, SET_OAUTH, SetOauthAction, SET_USER, SetUserAction, SET_TERMS} from './actions'
import * as objectAssign from 'object-assign'

import { User } from './user'
import { Terms, SetTermAction } from './terms'

export interface State {
    classes: Class[],
    departments: { [id: number]: {title: string, abbreviation: string}},
    user: User,
    terms: Terms
}

export const sStore = combineReducers({
    classes,
    departments,
    user,
    terms
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


function terms(state: Terms = {}, action: SetTermAction) {
    switch(action.type){
        case SET_TERMS:
            return action.terms
    }
    return  state
}