import { Filter } from './filter'
import { Course } from './course'
export const SET_FILTER = "SET_FILTER"
export const ADD_COURSE = "ADD_COURSE"
export const SET_DEPARTMENTS = "SET_DEPARTMENTS"
export const GET_SEARCH_RESULT = "GOT_SEARCH_RESULT"

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


interface ClassDB{
    "Class_ID": number,
    "Dept_ID": number,
    "Dept_Title": string,
    "Course_Title": string,
    "Description": string,
    "Term_ID": number,
    "Term": string,
    "Year": number,
    "Teacher_User_ID": number,
    "Section": number,
    "CRN": number,
    "Syl_ID": number,
    "Day_ID": number,
    "Class_Day": string,
    "Day_Time": string,
    "Day_Len": number,
    "Lab_ID": number,
    "Lab_Time": number,
    "Lab_Len": number
}

export function newFilter(filter: Filter, api: string) {
    let url = api + "?";
    Object.keys(filter).filter( c => c !== undefined).forEach(
        (key) => url += key + "=" + encodeURIComponent(String(filter[key])) + "&"
    )
    return function (dispatch: any) {
        dispatch(setFilter(filter))
        return fetch(url)
        .then(response => response.json())
        .then(json =>
            (json as ClassDB[]).forEach(
                c => {
                    dispatch(addCourse(
                        {    
                            title: c.Course_Title,
                            course: c.Class_ID,
                            department: c.Dept_ID,
                            section: c.Section,
                            semester: c.Term_ID,
                            year: c.Year,
                            teacher: "Undefined"+c.Teacher_User_ID,
                            CRN: c.CRN,
                            keyword: ""
                        }
                    ))
                }
            )
        )
    }
}

export function update(api: string) {
    let url = api;
    return function (dispatch: any) {
        return fetch(url)
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(json =>
            (json as ClassDB[]).forEach(
                c => {
                    dispatch(addCourse(
                        {    
                            title: c.Course_Title,
                            course: c.Class_ID,
                            department: c.Dept_ID,
                            section: c.Section,
                            semester: c.Term_ID,
                            year: c.Year,
                            teacher: "Undefined"+c.Teacher_User_ID,
                            CRN: c.CRN,
                            keyword: ""
                        }
                    ))
                }
            )
        )
    }
}