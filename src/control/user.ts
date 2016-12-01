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