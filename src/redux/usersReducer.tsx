import {v1} from "uuid";
import {ActionsTypes, UsersPageType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]

            };
        default:
            return state
    }
}
export const followAC = (userId: string) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowAC = (userId: string) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUserAC = (users: any) => {
    return {type: SET_USERS, users} as const
}
export default usersReducer;