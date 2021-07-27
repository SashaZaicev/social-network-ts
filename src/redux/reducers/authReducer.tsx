import {ActionsTypes, AuthUserType} from "../store";
import {headerApi, ResultCodesEnum} from "../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {AppThunk} from "../reduxStore";
import {SET_USER_DATA} from "./constants";


let initialState = {
  id: '',
  login: '',
  email: '',
  // isFetching: false
  isAuth: false,
  captchaUrl: ''
};

const authReducer = (state = initialState, action: ActionsTypes): AuthUserType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
type SetAuthUserDataActionPayloadType = {
  id: string | number, login: string, email: string, isAuth: boolean
}

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: string, login: string, email: string, isAuth: boolean): SetAuthUserDataActionType => {
  return ({type: SET_USER_DATA, payload: {id, login, email, isAuth}}) as const
}
// type getCaptchaUrlSuccessActionType = {
//     type: typeof GET_CAPTCHA_URL_SUCCESS,
//     payload: { captchaUrl: string }
// }

// export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
//     type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
// })

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await headerApi.authMe()
  if (response.resultCode === ResultCodesEnum.Success) {
    let {id, login, email} = response.data;
    dispatch(setAuthUserData(id, login, email, true))
  }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async dispatch => {
  // const response = await headerApi.login(email, password, rememberMe,captcha)
  const response = await headerApi.login(email, password, rememberMe, captcha)
  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData())
  } else {
    if (response.resultCode === ResultCodesEnum.CaptchaIsRequired){
      // dispatch(getCaptchaUrl())
    }
    let message = response.messages.length > 0 ? response.messages[0] : "Some error"
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const logout = () => async (dispatch: Dispatch) => {
  const response = await headerApi.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData('', '', '', false))
  }
}
export default authReducer;
