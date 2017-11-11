export interface ICourse {
    title: string;
}

export enum TypeKeys{
    CREATE_COURSE = "CREATE_COURSE",
    DELETE_COURSE = "DELETE_COURSE"
}

export interface ICreateCourseAction {
    type: TypeKeys.CREATE_COURSE;
    course: ICourse;
}

export interface IDeleteCourseAction {
    type: TypeKeys.DELETE_COURSE;
    id: number;
}

export type ActionTypes = ICreateCourseAction | IDeleteCourseAction;