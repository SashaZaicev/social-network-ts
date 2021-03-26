// import {v1} from "uuid";
import {ActionsTypes, AuthUserType, UsersPageType, UsersType} from "./store";
import {headerApi} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    login: 'myLogin',
    email: null,
    // isFetching: false
    isAuth: false
};

const authReducer = (state: AuthUserType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}
export const setAuthUserData = (id: string, login: null, email: null) => {
    return ({type: SET_USER_DATA, data: {id, login, email}}) as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    headerApi.authMe().then(response => {
        if (response.resultCode === 0) {
            let {id, login, email} = response.data;
            dispatch(setAuthUserData(id, login, email))
        }
    })
}
export default authReducer;