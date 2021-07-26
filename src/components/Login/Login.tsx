import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
//@ts-ignore
import style from "../../common/FormsControls/FormsControls.module.css"
//@ts-ignore

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form className={style.formContainer} onSubmit={handleSubmit}>
            <div>{createField("Email", "login", [required], Input)}</div>
            <div>{createField("Password", "password",
                [required], Input, {type: "password"})}</div>
            <div style={{display: 'flex'}} > {
                createField("null", "rememberMe",
                [], Input, {type: "checkbox"}, "remember me")}</div>

            {error && <div className={style.formSummaryError}>{error}</div>}
                <div>
                <button className={style.btnStyle}>Login</button>
                </div>
                </form>
                );
            }
            ;
            const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

            const Login = (props: any) => {
            const onSubmit = (formData: FormDataType) => {
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


