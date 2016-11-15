import { ClassXCourse } from "./class"
import {State} from "./reducers"
export interface Filter {
    title?: string,
    course?: number
    department?: number,
    section?: number,
    semester?: number,
    year?: number,
    teacher?: string,
    CRN?: number,
    keyword?: string
    [field: string]: any;
}


export function filter(filter: Filter) {
    console.log(filter)
    return function(course: ClassXCourse) {
        let title_valid = filter.title === undefined || course.title.toLowerCase().indexOf(filter.title.toLowerCase()) >= 0;
        let course_valid = filter.course === undefined || course.course === filter.course;
        let department_valid = filter.department === undefined || course.department == filter.department;
        let section_valid = filter.section === undefined || course.section === filter.section;
        let semester_valid = filter.semester === undefined || course.semester === filter.semester;
        let year_valid = filter.year === undefined || course.year === filter.year;
        let teacher_valid = filter.teacher === undefined || course.teacher.toLowerCase().indexOf(filter.teacher.toLowerCase()) >= 0;
        let CRN_valid = filter.CRN === undefined || course.CRN === filter.CRN;
        let keyword_valid = filter.keyword === undefined || course.keyword.toLowerCase().indexOf(filter.keyword.toLowerCase()) >= 0;
        return title_valid && course_valid && department_valid && section_valid && semester_valid && year_valid && teacher_valid && CRN_valid && keyword_valid;
    }
}