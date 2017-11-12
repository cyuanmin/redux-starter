import * as React from "react";
import {ICourse, IDeleteCourseAction, ActionTypes, TypeKeys} from "../../actions/courseTypes";
import {connect} from "react-redux";
import {ReducersMapObject, bindActionCreators} from "redux";
import * as courseActions from "../../actions/courseActions";
import {IAppState} from "../../stores/configStore";
import CourseList from "./CourseList";

export interface IManagedCourseProps {
    name: string;
}

class ManagedCoursePage extends React.Component<IManagedCourseProps> {
    constructor(props: IManagedCourseProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

function mapStateToProps(state: IAppState, ownProps: IManagedCourseProps): any{
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch: any): any{
    return {
        // https://stackoverflow.com/questions/42888184/how-to-resolve-typescript-redux-connect-error-actioncreatorsmapobject
        actions: bindActionCreators<any>(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagedCoursePage);