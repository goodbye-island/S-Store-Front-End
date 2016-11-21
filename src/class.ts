import { User } from './user'

export enum Days {
    sun = 1,
    mon = 2,
    tue = 3,
    wed = 4,
    thu = 5,
    fri = 6,
    sat = 7,
}

export interface ClassXCourse extends Class, CourseInfo {
}

export interface Class {
    section: number,
    semester: number,
    term: string
    year: number,
    CRN: number,
    days: {
        sun: boolean,
        mon: boolean,
        tue: boolean,
        wed: boolean,
        thu: boolean,
        fri: boolean,
        sat: boolean
    }
    syllabus: number
    time: Date
    length: number,
    teacher: User,
    lab_day?: Days
    lab_time?: Date
    lab_length?: number
}


export interface Course extends CourseInfo {
    classes: ClassXCourse[]
}

export interface CourseInfo {
    title: string,
    course: number,
    department: number
    keyword: string,
    description: string,
}

export function to_courses(classes: ClassXCourse[]): Course[] {
    var courses_for_department: {[id: number]: {[id: number]: Course}} = {}
    classes.forEach(
        c => {
            if (!(c.department in courses_for_department)){
                courses_for_department[c.department] = {}
            }
            if (!(c.course in courses_for_department[c.department])) {
                courses_for_department[c.department][c.course] = {title: c.title, course: c.course, department: c.department, keyword: c.keyword, description: c.description, classes: []}
            }
            courses_for_department[c.department][c.course].classes.push(c);
        }
    );
    let result:  Course[] = []
    Object.keys(courses_for_department).map(
        department => Object.keys(courses_for_department[parseInt(department) as number]).map(
            course => courses_for_department[parseInt(department)][parseInt(course)]
            )
        ).forEach( a => a.forEach( c => result.push(c) ) );
    return result
}