// import {v1} from "uuid";
import {ActionsTypes, UsersPageType, UsersType} from "./store";
import {usersApi} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/objectHelpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: [...state.users],
                // users: state.users.map(u => {
                //     if (u.userId === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u
                // })
            };
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: any) => id != action.userId)
            };
        default:
            return state
    }
}
export const acceptFollow = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const acceptUnfollow = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: SET_USERS, users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: FOLLOWING_IN_PROGRESS, isFetching, userId} as const
}

export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        const response = await usersApi.getUsers(page, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod = usersApi.follow.bind(usersApi)
        const actionCreator = acceptFollow;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        const apiMethod = usersApi.unfollow.bind(usersApi)
        const actionCreator = acceptUnfollow;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export default usersReducer;