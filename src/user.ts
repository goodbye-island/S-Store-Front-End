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
    result += user.firstName + " " + user.lastName;
    return result;
}