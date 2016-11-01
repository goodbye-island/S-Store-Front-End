import { Filter } from './filter'
import { Class } from './class'
export const SET_FILTER = "SET_FILTER"
export const ADD_CLASS = "ADD_CLASS"
export const SET_DEPARTMENTS = "SET_DEPARTMENTS"
export const GET_SEARCH_RESULT = "GOT_SEARCH_RESULT"

export interface SetFilterAction extends Redux.Action{
    filter: Filter
}

export interface AddClassAction extends Redux.Action{
    new_class: Class
}

export interface SetDepartmentsAction extends Redux.Action{
    departments: { [id: number]: string}
}

export function setFilter(filter: Filter): SetFilterAction {
    return {type: SET_FILTER, filter: filter}
}

export function addClass(new_class: Class): AddClassAction{
    return {type: ADD_CLASS, new_class: new_class}
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

interface DeptDB {
    "Dept_ID": 1,
    "Dept_Title": "Computer Science",
    "Dept_Title_Abb": "CS"
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
                    dispatch(addClass(
                        {    
                            title: c.Course_Title,
                            course: c.Class_ID,
                            department: c.Dept_ID,
                            section: c.Section,
                            semester: c.Term_ID,
                            year: c.Year,
                            teacher: "Undefined"+c.Teacher_User_ID,
                            CRN: c.CRN,
                            keyword: "",
                            description: c.Description

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
        fetch(url+"/class_view")
        .then(response => {
            return response.json()
        })
        .then(json =>
            (json as ClassDB[]).forEach(
                c => {
                    dispatch(addClass(
                        {    
                            title: c.Course_Title,
                            course: c.Class_ID,
                            department: c.Dept_ID,
                            section: c.Section,
                            semester: c.Term_ID,
                            year: c.Year,
                            teacher: "Undefined"+c.Teacher_User_ID,
                            CRN: c.CRN,
                            keyword: "",
                            description: c.Description
                        }
                    ))
                }
            )
        )

        fetch(url+"/dept_view")
        .then(response => response.json())
        .then(json => {
            let departments: { [id: number]: string} = {};
            (json as DeptDB[]).forEach(
                d => {
                    departments[d.Dept_ID] = d.Dept_Title;
                }
            )
            dispatch(setDepartments(departments));
        })
    }
}