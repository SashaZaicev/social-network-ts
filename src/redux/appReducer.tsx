// import {v1} from "uuid";
import {ActionsTypes} from "./store";
import {getAuthUserData} from "./authReducer";
import {AppThunk} from "./reduxStore";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,

};

const appReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializedSuccess = () => {
    return ({type: INITIALIZED_SUCCESS}) as const
}

export const initializeApp = ():AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })


}
export default appReducer;