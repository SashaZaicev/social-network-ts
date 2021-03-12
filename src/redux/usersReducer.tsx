// import {v1} from "uuid";
import {ActionsTypes, UsersPageType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
                ...state, users: action.users

            };
            case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage

            };
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount

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
export const setCurrentPageAC = (currentPage: any) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCountAC = (totalUsersCount: any) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
export default usersReducer;