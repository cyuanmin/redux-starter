
import * as React from "react";
import { ICourse } from "../../models/course";
import { IAuthor, IAuthorFormatted} from "../../models/author";
import TextInput from "../../common/TextInput";
import SelectInput from "../../common/SelectInput";

export interface ICourseFormProp {
    course: ICourse;
    allAuthors?: Array<IAuthorFormatted>;
    onSave?: (event: any) => any;
    onChange?: (event: any) => any;
    saving?: boolean;
    errors?: any;
}

export const CourseForm: React.SFC<ICourseFormProp> = (props: ICourseFormProp): JSX.Element => {
    return (
        <form>
            <TextInput name="title" 
            label="Title"
            value={props.course.title}
            onChange={props.onChange}
            error={props.errors.title}/>

            <SelectInput name="authorId" 
            label="Author"
            value={props.course.authorId}
            defaultOption="Select Author"
            options={props.allAuthors}
            onChange={props.onChange}
            error={props.errors.authorId}/>

            <TextInput name="category" 
            label="Category"
            value={props.course.category}
            onChange={props.onChange}
            error={props.errors.category}/>

            <TextInput name="length" 
            label="Length"
            value={props.course.length}
            onChange={props.onChange}
            error={props.errors.length}/>

            <input type="submit"
            disabled={props.saving}
            value={props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={props.onSave}/>
        </form>);
};