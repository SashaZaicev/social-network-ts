import {FC} from 'react'
import styles from './FormsControls.module.css'
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../utils/validators/validators";


type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

export const FormControl: FC<FormControlPropsType> = ({
                                                        meta: {
                                                          touched,
                                                          error
                                                        }
                                                        , children
                                                      }) => {
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


export const Textarea: FC<WrappedFieldProps> = (props) => {
  let {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
};
export const Input: FC<WrappedFieldProps> = (props) => {
  let {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export function createField<FormKeysType extends string>(placeholder: string | undefined,
                                                         name: FormKeysType,
                                                         validators: Array<FieldValidatorType>,
                                                         component: FC<WrappedFieldProps>,
                                                         props = {},
                                                         text = "") {
  return <>
    <Field placeholder={placeholder}
           name={name}
           validate={validators}
           component={component}
           {...props}

    /> <span>{text}</span>
  </>
}

export type GetStringKeys<T> = Extract<keyof T, string>
