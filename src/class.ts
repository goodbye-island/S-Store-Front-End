export interface Class {
    title: string,
    course: number
    department: number,
    section: number,
    semester: number,
    year: number,
    teacher: string,
    CRN: number,
    keyword: string,
    description: string
    days: boolean[]
}


export interface Course {
    title: string,
    course: number,
    department: number
    keyword: string,
    description: string,
    classes: Class[]
}

export function to_courses(classes: Class[]): Course[] {
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