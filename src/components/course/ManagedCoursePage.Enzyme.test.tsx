import * as expect from "expect";
import * as React from "react";

import { mount, shallow, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {ManagedCoursePage, IManagedCourseProps} from "./ManagedCoursePage";
import {ICourse} from "../../models/course";

describe("Manage Course Page", ()=> {
    it("Set error message when trying to save empty title", ()=>{
        const course: ICourse = {
            id: "",
            watchHref: "",
            title: "",
            authorId: "",
            length: "",
            category: ""
        }

        const props: IManagedCourseProps= {
            authors: [],
            course: course,
            history: []
        };

        const wrapper = mount(<ManagedCoursePage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop("type")).toBe("submit");
    })
});