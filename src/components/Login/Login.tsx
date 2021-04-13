import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
//@ts-ignore
import s from "../../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={'login'}
                        validate={[required]}
                        placeholder={'Login'}/></div>
            <div><Field component={Input}
                        type={'password'}
                        name={'password'}
                        validate={[required]}
                        placeholder={'Password'}/></div>
            <div><Field component={Input} name={'rememberMe'} type="checkbox"/> remember me</div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mstp = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect((mstp), {login})(Login);


