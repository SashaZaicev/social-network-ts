import React from 'react'
//@ts-ignore
import styles from './FormsControls.module.css'
import {Field} from "redux-form";

type FormType = {
    input: any
    child: any
    meta:  any
}

export const FormControl: React.FC<FormType> = ({input, child, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error + " Stupid user! :)"} </span>}
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
export const createField = (placeholder: string, name: string, validators: string, component: string, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
};