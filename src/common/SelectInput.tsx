import * as React from "react";

export interface ISelectInputProp {
    name: string;
    label: string;
    onChange?: (event: any) => any;
    defaultOption: string;
    value: string;
    error: string;
    options: Array<any>;
}

// A generic SelectInput component for picking selections from a list. It uses function-style component helper (React.SFC).
const SelectInput: React.SFC<ISelectInputProp> = (props: ISelectInputProp): JSX.Element => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <select
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    className="form-control">
                    <option value="">{props.defaultOption}</option>
                    {props.options.map((option: any) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })}
                    </select>
                    {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>);
};

export default SelectInput;