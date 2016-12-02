export enum Roles {
    student,
    teacher,
    department_head,
    admin
}

export interface UserDB {
    User_ID: number, 
    Email: string,
    First_Name: string, 
    Last_Name: string, 
    Role: Roles,
    Honorific: string
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

export function name(user: User) {
    let result = "";
    if (user.honorific)
        result += user.honorific + " "
    if (user.firstName)
        result += user.firstName + " " + user.lastName;
    else
        return "Not Defined"
    return result;
}