import { User } from './user'
import { Week } from './days'
import config from '../config'

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

export const FREE_WEEK: Week = {
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    id: undefined
}

export interface Class {
    section: number,
    semester: number,
    term: string
    year: number,
    CRN: number,
    days: Week
    syllabus: number
    time: Date
    length: number,
    teacher?: User,
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

function class_to_DB(c: Class, course: number, department: number) {
    return {
        "class_id": course,
        "dept_id": department,
        term_id: c.semester,
        year: c.year,
        teacher_id: c.teacher?c.teacher.userId:undefined,
        section: c.section,
        CRN: c.CRN,
        syl_id: c.syllabus,
        day_id: c.days.id,
        day_time:  c.time.toJSON(),
        day_len: c.length
    }
}

function course_to_DB(course: Course) {
    return {
        class_id: course.course,
        dept_id: course.department,
        course_title: course.title,
        description: course.description
    }
}

export function addClassRequest(class_: Class, department: number, course: number): Promise<boolean> {
    let args = "?"
    let db: any = class_to_DB(class_, course, department);
    Object.keys(db).forEach(key => args += `${key}=${encodeURIComponent(db[key])}&`)
    return fetch(config.api + "/class_add" + args)
    .then(r => r.text())
    .then(text => text == "Added Class")
    .catch( e => {console.log(e); return false;})
}

export function addCourseRequest(course: Course) {
    let args = "?"
    let db: any = course_to_DB(course);
    Object.keys(db).forEach(key => args += `${key}=${encodeURIComponent(db[key])}&`)
    return fetch(config.api + "/course_add" + args)
    .then(r => r.text())
    .then(text => text == "Added Course")
    .catch( e => {console.log(e); return false;})
}