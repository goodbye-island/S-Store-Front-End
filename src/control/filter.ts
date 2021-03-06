import { ClassXCourse } from "./class"
import {State} from "./reducers"
import {name} from "./user"

export interface Filter {
    title?: string,
    course?: number
    department?: number,
    section?: number,
    semester?: string,
    year?: number,
    teacher?: string,
    CRN?: number,
    keyword?: string,
    syllabus?: boolean,
    [field: string]: any;
}


// The ugliest thing you will ever see. Check every item in the filter and if it exists check if it matches
export function filter(filter: Filter) {
    return function(course: ClassXCourse) {
        let title_valid = filter.title === undefined || course.title.toLowerCase().indexOf(filter.title.toLowerCase()) >= 0;
        let course_valid = filter.course === undefined || course.course === filter.course;
        let department_valid = filter.department === undefined || course.department == filter.department;
        let section_valid = filter.section === undefined || course.section === filter.section;
        let semester_valid = filter.semester === undefined || course.term === filter.semester;
        let year_valid = filter.year === undefined || course.year === filter.year;
        let teacher_valid = filter.teacher === undefined || name(course.teacher).toLowerCase().indexOf(filter.teacher.toLowerCase()) >= 0;
        let CRN_valid = filter.CRN === undefined || course.CRN === filter.CRN;
        let keyword_valid = filter.keyword === undefined || course.keyword.toLowerCase().indexOf(filter.keyword.toLowerCase()) >= 0;
        let syllabus_valid = filter.syllabus === undefined || !(course.syllabus == undefined || course.syllabus == 0) === filter.syllabus;
        console.log(syllabus_valid)
        return  title_valid && 
                course_valid && 
                department_valid && 
                section_valid && 
                semester_valid && 
                year_valid && 
                teacher_valid && 
                CRN_valid && 
                keyword_valid &&
                syllabus_valid;
    }
}