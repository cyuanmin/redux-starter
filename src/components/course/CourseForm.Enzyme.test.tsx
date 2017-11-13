import * as expect from "expect";
import * as React from "react";

import { mount, shallow, configure} from "enzyme";
import {CourseForm, ICourseFormProp} from "./CourseForm";
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

function setup(saving: boolean): any {
    const props: ICourseFormProp = {
        course:
            {
                id: "courseId",
                title: "courseTitle",
                watchHref: "",
                authorId: "Jane",
                length: "3h",
                category: "test"
            },
            saving: saving,
            errors: {}
    };

    return shallow(<CourseForm {...props}/>);
};

it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
})