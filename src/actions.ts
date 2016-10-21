import { Filter } from './filter'
import { Course } from './course'
export const SET_FILTER = "SET_FILTER"
export const ADD_COURSE = "ADD_COURSE"


export interface SetFilterAction extends Redux.Action{
    filter: Filter
}

export interface AddCourseAction extends Redux.Action{
    course: Course
}

export function setFilter(filter: Filter): SetFilterAction {
    return {type: SET_FILTER, filter: filter}
}

export function addCourse(course: Course): AddCourseAction{
    return {type: ADD_COURSE, course: course}
}