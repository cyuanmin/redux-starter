export interface ICourse {
    year: number;
}

export function CreateCourse(course: ICourse){
    return {type: "CREATE_COURSE", course };
}