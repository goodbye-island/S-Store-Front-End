import config from '../config'


export function addSyllabusRequest(file: Blob, course_num: number, department: number, term: number, year: number, section: number) {
    let url = config.api + `/syllabus_add?class_id=${course_num}&dept_id=${department}&term_id=${term}&year=${year}&section=${section}`
    var form: any = new FormData();
    form.append("file", file)
    fetch(url,{
        method: "POST",
        body: form
    }).then(e => console.log(e))
}