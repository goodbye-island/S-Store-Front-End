import {User, UserDB} from './user'
import config from '../config'

export const SET_TEACHERS = "SET_TEACHERS"

export function fetchTeachers(): Promise<User[]> {
    return fetch(config.api+"/teacher_view")
    .then(r => r.json())
    .then(json => (json as UserDB[]))
    .then(db => db.map(u => ({role: u.Role, firstName: u.First_Name, lastName: u.Last_Name, honorific: u.Honorific, userId: u.User_ID})))
}


export interface SetTeachersAction extends Redux.Action{
    teachers: User[]
}

export function setTeachers(teachers: User[]): SetTeachersAction {
    return {type: SET_TEACHERS, teachers: teachers}
}