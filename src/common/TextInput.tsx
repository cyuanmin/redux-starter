import * as React from "react";

export interface ITextInputProp {
    name: string;
    label: string;
    onChange?: (event: any) => any;
    placeholder?: string;
    value: string;
    error: string;
}

// A generic TextInput component for entering texts. It uses function-style component helper (React.SFC).
const TextInput: React.SFC<ITextInputProp> = (props: ITextInputProp): JSX.Element => {
    let wrapperClass: string = "form-group";
    if (props.error && props.error.length > 0) {
        wrapperClass += " " + 'has-error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type="text"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>);
};

export default TextInput;