import React from 'react'
//@ts-ignore
import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";

type FormType = {
    input: any
    child: any
    meta: any
}

export const FormControl: React.FC<FormType> = ({input, meta: {touched, error}
                                                    ,children}) => {
    let hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error + " Stupid user! :)"} </span>}
        </div>
    )
};
export const Textarea = (props: any) => {
    let {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
};
export const Input = (props: any) => {
    let {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};
export const createField = (placeholder: any, name: any, validators: any,
                            component: any, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
};
