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