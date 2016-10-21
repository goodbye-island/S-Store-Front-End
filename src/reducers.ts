import { combineReducers } from 'redux'
import { Filter } from './filter'
import { Course } from './course'
import {SET_FILTER, SetFilterAction, ADD_COURSE, AddCourseAction} from './actions'
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

export interface State {
    filter: Filter,
    courses: Course[]
}

export const sStore = combineReducers({
    filter,
    courses
})




function filter(state: Filter = {}, action: SetFilterAction) {
    switch(action.type) {
        case SET_FILTER:
            return objectAssign({}, state, action.filter);
        default:
            return state;
    }
}


function courses(state: Course[] = [], action: AddCourseAction) {
    switch(action.type) {
        case ADD_COURSE:
            return state.concat(objectAssign({}, action.course))
        default:
            return state;
    }
}
