import { Filter } from './filter'
import { Course } from './course'
export const SET_FILTER = "SET_FILTER"
export const ADD_COURSE = "ADD_COURSE"
export const SET_DEPARTMENTS = "SET_DEPARTMENTS"

export interface SetFilterAction extends Redux.Action{
    filter: Filter
}

export interface AddCourseAction extends Redux.Action{
    course: Course
}

export interface SetDepartmentsAction extends Redux.Action{
    departments: { [id: number]: string}
}

export function setFilter(filter: Filter): SetFilterAction {
    return {type: SET_FILTER, filter: filter}
}

export function addCourse(course: Course): AddCourseAction{
    return {type: ADD_COURSE, course: course}
}

export function setDepartments(departments: { [id: number]: string}): SetDepartmentsAction{
    return {type: SET_DEPARTMENTS, departments: departments}
}