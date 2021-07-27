import {FC} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {
  createField,
  GetStringKeys,
  Input
} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../common/FormsControls/FormsControls.module.css"
import {AppStateType} from "../../redux/reduxStore";

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captchaUrl: string
}
type LoginFormOwnProps = {
  captchaUrl: string
}

const LoginForm:
    FC<InjectedFormProps<FormDataType, LoginFormOwnProps>
      & LoginFormOwnProps> = ({
                                handleSubmit,
                                error,
                                captchaUrl
                              }) => {
    return (
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div>
          {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
        </div>
        <div>
          {createField<LoginFormValuesTypeKeys>("Password", "password",
            [required], Input, {type: "password"})}
        </div>
        <div style={{display: 'flex'}}> {
          createField<LoginFormValuesTypeKeys>(undefined, "rememberMe",
            [], Input, {type: "checkbox"}, "remember me")}
        </div>

        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}


        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
          <button className={style.btnStyle}>Login</button>
        </div>
      </form>
    );
  }
;
const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: 'login'})(LoginForm)
export type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>
type MapStatePropsType = {
  captchaUrl: string
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type AllPropsLogin = MapStatePropsType & MapDispatchPropsType
const Login: FC<AllPropsLogin> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
  }
  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};
const mstp = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect((mstp), {login})(Login);


