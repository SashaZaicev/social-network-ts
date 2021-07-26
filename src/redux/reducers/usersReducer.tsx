import {
  ActionsTypes,
  UserType
} from "../store";
import {usersApi} from "../../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../../utils/objectHelpers";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reduxStore";
import {
  FOLLOW, FOLLOWING_IN_PROGRESS,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS, TOGGLE_IS_FETCHING,
  UNFOLLOW
} from "./constants";


let initialState = {
  users: [] as any,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as any,
};

type InitStateType = typeof initialState

const usersReducer = (state: InitStateType = initialState, action: ActionsTypes): InitStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(
          state.users,
          action.userId,
          'id',
          {followed: true}
        )
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(
          state.users,
          action.userId,
          'id',
          {followed: false}
        )
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
          : state.followingInProgress.filter((id: any) => id !== action.userId)
      };
    default:
      return state
  }
}

type  AcceptFollowActionType = {
  type: typeof FOLLOW, userId: string
}
export const acceptFollow = (userId: string): AcceptFollowActionType => {
  return {type: FOLLOW, userId} as const
}
type  AcceptUnfollowActionType = {
  type: typeof UNFOLLOW, userId: string
}
export const acceptUnfollow = (userId: string): AcceptUnfollowActionType => {
  return {type: UNFOLLOW, userId} as const
}
type  SetUsersActionType = {
  type: typeof SET_USERS, users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
  return {type: SET_USERS, users} as const
}
type  SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE, currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
  return {type: SET_CURRENT_PAGE, currentPage} as const
}
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => {
  return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
}
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING, isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
  return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
type ToggleFollowingProgressActionType = {
  type: typeof FOLLOWING_IN_PROGRESS, isFetching: boolean, userId: string
}
export const toggleFollowingProgress = (isFetching: boolean, userId: string): ToggleFollowingProgressActionType => {
  return {type: FOLLOWING_IN_PROGRESS, isFetching, userId} as const
}

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const response = await usersApi.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
  }
}
const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: string,
                                   apiMethod: any,
                                   actionCreator: (userId: string) => AcceptFollowActionType | AcceptUnfollowActionType) => {
  dispatch(toggleFollowingProgress(true, userId))
  const response = await apiMethod(userId)
  if (response === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}
export const follow = (userId: string): ThunkType => {
  return async (dispatch) => {
    const apiMethod = usersApi.follow.bind(usersApi)
    const actionCreator = acceptFollow;
    _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
  }
}
export const unfollow = (userId: string): ThunkType => {
  return async (dispatch) => {
    const apiMethod = usersApi.unfollow.bind(usersApi)
    const actionCreator = acceptUnfollow;
    _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
  }
}
export default usersReducer;
