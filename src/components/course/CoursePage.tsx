import * as React from "react";
import {ICourse} from "../../actions/courseActions";

export interface ICourseProps {
    name: string;
}

export interface ICourseState {
    course: ICourse;
}

export class CoursePage extends React.Component<ICourseProps, ICourseState> {
    constructor(props: ICourseProps) {
        super(props);
        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    public onTitleChange(ev: any): void {
        const course: ICourse = this.state.course;
        course.title = ev.target.value;
        this.setState({course: course});
    }

    
    public onClickSave(ev: any): void {
        alert('Saving' + this.state.course.title);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                value ={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}