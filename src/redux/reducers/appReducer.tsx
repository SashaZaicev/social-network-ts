import {ActionsTypes, AppType} from "../store";
import {getAuthUserData} from "./authReducer";
import {AppThunk} from "../reduxStore";
import {INITIALIZED_SUCCESS} from "./constants";

let initialState = {
    initialized: false,
};

export const appReducer = (state = initialState, action: ActionsTypes): AppType => {
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
type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): InitializedSuccessActionType => {
    return ({type: INITIALIZED_SUCCESS}) as const
}

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
};
