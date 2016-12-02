import { Filter } from './filter'
import { ClassXCourse } from './class'
import { User, Roles } from './user'
import { fetchTerms, SetTermAction, Terms} from './terms'
export const SET_FILTER = "SET_FILTER"
export const ADD_CLASS = "ADD_CLASS"
export const SET_DEPARTMENTS = "SET_DEPARTMENTS"
export const GET_SEARCH_RESULT = "GOT_SEARCH_RESULT"
export const SET_OAUTH = "SET_OAUTH"
export const SET_USER = "SET_USER"
export const SET_TERMS = "SET_TERMS"


export interface SetFilterAction extends Redux.Action{
    filter: Filter
}

export interface AddClassAction extends Redux.Action{
    new_class: ClassXCourse
}

export interface SetDepartmentsAction extends Redux.Action{
    departments: { [id: number]: {title: string, abbreviation: string}}
}

export interface SetOauthAction extends Redux.Action{
    token: string,
    expiration: Date,
}

export interface SetUserAction extends Redux.Action, User{
}


export function setFilter(filter: Filter): SetFilterAction {
    return {type: SET_FILTER, filter: filter}
}

export function addClass(new_class: ClassXCourse): AddClassAction{
    return {type: ADD_CLASS, new_class: new_class}
}

export function setDepartments(departments: { [id: number]: {title: string, abbreviation: string}}): SetDepartmentsAction{
    return {type: SET_DEPARTMENTS, departments: departments}
}

export function setOauth(token: string, expiration: Date): SetOauthAction {
    return {type: SET_OAUTH, "token": token, "expiration": expiration}
}

export function setUserAction(role: Roles, firstName: string, lastName: string, honorific: string, userID: number): SetUserAction {
    return {type: SET_USER, "role": role, firstName: firstName, lastName: lastName, honorific: honorific, userId: userID }
}

export function setTerms(terms: Terms): SetTermAction {
    return {type: SET_TERMS, terms: terms}
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
    "Lab_Time": string,
    "Lab_Len": number,
    "Honorific": string,
    "First_Name": string,
    "Last_Name": string
}

interface DeptDB {
    "Dept_ID": 1,
    "Dept_Title": "Computer Science",
    "Dept_Title_Abb": "CS"
}

function db_to_class(c: ClassDB): ClassXCourse {
    return {
        days: {
                sun:  c.Class_Day.includes('Su'),
                mon: c.Class_Day.includes("M"),
                tue: c.Class_Day.includes("T"),
                wed: c.Class_Day.includes("W"),
                thu: c.Class_Day.includes("Th"),
                fri: c.Class_Day.includes("F"),
                sat: c.Class_Day.includes("S"),
                id: c.Class_ID
            },
        title: c.Course_Title,
        course: c.Class_ID,
        department: c.Dept_ID,
        section: c.Section,
        semester: c.Term_ID,
        year: c.Year,
        term: c.Term,
        teacher: {role: Roles.teacher,
                    firstName: c.First_Name,
                    lastName: c.Last_Name,
                    honorific: c.Honorific,
                    userId: c.Teacher_User_ID
            },
        CRN: c.CRN,
        keyword: "",
        description: c.Description,
        syllabus: c.Syl_ID,
        time: new Date(c.Day_Time),
        length: c.Day_Len,
    }
}

export function newFilter(filter: Filter, api: string) {
    let url = api + "?";
    Object.keys(filter).filter( c => c !== undefined).forEach(
        (key) => url += key + "=" + encodeURIComponent(String(filter[key])) + "&"
    )
    return function (dispatch: any) {
        return fetch(url)
        .then(response => response.json())
        .then(json =>
            (json as ClassDB[]).forEach(
                c => {
                    dispatch(addClass(db_to_class(c)))
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
                    console.log(c)
                    dispatch(addClass(db_to_class(c)))
                }
            )
        )

        fetch(url+"/department_view")
        .then(response => response.json())
        .then(json => {
            let departments: { [id: number]: {title: string, abbreviation: string}} = {};
            (json as DeptDB[]).forEach(
                d => {
                    departments[d.Dept_ID] = {title: d.Dept_Title, abbreviation: d.Dept_Title_Abb};
                }
            )
            dispatch(setDepartments(departments));
        })
        fetchTerms()
        .then(terms => {
            dispatch(setTerms(terms))
        });
    }
}