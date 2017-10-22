import * as React from "react";

export interface ICourseProps {
    CourseYear: number;
}

export interface ICourse {
    year: number;
}

export interface ICourseState {
    course: ICourse;
}

export class CoursePage extends React.Component<ICourseProps, ICourseState> {
    public state: ICourseState = {
        course: { year: 0 },
    };

    constructor(props: ICourseProps) {
        super(props);
        this.state = {
            course: { year: 1998 }
           // course: { year: this.props.CourseYear }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    public onTitleChange(ev: any): void {
        const course: ICourse = this.state.course;
        course.year = ev.target.value;
        this.setState({ course: course });
    }

    
    public onClickSave(ev: any): void {
        alert('Saving' + this.state.course.year);
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange}
                    value={this.state.course.year} />
                <input type="submit" value="Save" onClick={this.onClickSave}/>
            </div>
        );
    }
}