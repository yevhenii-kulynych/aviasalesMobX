import React from "react";
import { ErrorMessage, Field } from "formik";
import './Input';


const Input = props => {

    return(
        <div className="form-group">
            <label htmlFor={ props.htmlFor }>{ props.text }</label>
            <Field name={ props.name } type="text" className={'form-control' + (props.errors && props.touched ? ' is-invalid' : '')} />
            <ErrorMessage name={ props.name } component="div" className="invalid-feedback" />
        </div>
    )
}

export default Input;