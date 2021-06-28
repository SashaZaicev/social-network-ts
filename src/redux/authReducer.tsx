// import {v1} from "uuid";
import {ActionsTypes, AuthUserType} from "./store";
import {headerApi} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {AppThunk} from "./reduxStore";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'

let initialState = {
    id: '',
    login: 'myLogin',
    email: '',
    // isFetching: false
    isAuth: false
};

const authReducer = (state: AuthUserType = initialState, action: ActionsTypes) => {
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
export const setAuthUserData = (id: string, login: null, email: null, isAuth: boolean) => {
    return ({type: SET_USER_DATA, payload: {id, login, email, isAuth}}) as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await headerApi.authMe()
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    const response = await headerApi.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch: Dispatch) => {
    const response = await headerApi.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUserData('', null, null, false))
    }
}
export default authReducer;