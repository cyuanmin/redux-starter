import * as expect from "expect";
import * as React from "react";

import { mount, shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import { ManagedCoursePage, IManagedCourseProps } from "./ManagedCoursePage";
import { ICourse } from "../../models/course";
import {ICreateCourseSuccessAction, IUpdateCourseSuccessAction, ILoadCoursesSuccessAction} from '../../actions/courseTypes';

describe("Manage Course Page", () => {
    it("Set error message when trying to save empty title", () => {
        const course: ICourse = {
            id: "",
            watchHref: "",
            title: "",
            authorId: "",
            length: "",
            category: ""
        }

        const props: IManagedCourseProps = {
            authors: [],
            course: course,
            actions: {
                CreateCourseSuccess: (course: ICourse): ICreateCourseSuccessAction =>{
                    return null;
                },
                saveCourse: (course: ICourse): (dispatch: any) => Promise<void> => {
                    return function(dispatch: any): Promise<void>{
                        return Promise.resolve();
                    }
                },                
                UpdateCourseSuccess: (course: ICourse): IUpdateCourseSuccessAction =>{
                    return null;
                },
                LoadCoursesSuccess: (courses: Array<ICourse>): ILoadCoursesSuccessAction=>{
                    return null;
                },
                loadCourse: (): (dispatch: any) => Promise<void> => {
                    return function(dispatch: any): Promise<void>{
                        return Promise.resolve();
                    }
                }
            },
            history: []
        };

        const wrapper = mount(<ManagedCoursePage {...props} />);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop("type")).toBe("submit");
    })
});