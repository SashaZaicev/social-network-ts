import {addPost, setUserProfile, setStatus} from "./profileReducer";
import {addMessageAC} from "./dialogsReducer";
import {
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress, acceptUnfollow, acceptFollow,
} from "./usersReducer";
import {setAuthUserData} from "./authReducer";
import { initializedSuccess } from "./appReducer";

export type MessageType = {
    message: string
    id: any
}
export type DialogType = {
    name: string
    id: any
}

interface PostType {
    id: any,
    message: string,
    likeCount: number

}

interface PhotosInfoType {
    small: string;
    large: string
}

interface ContactsInfoType {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    github: string;
    mainLink: string;
    youtube: string;
}

export type ProfileInfoType = {
    aboutMe: string
    contacts: ContactsInfoType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosInfoType
    userId: any
}
export type ProfilePageType = {
    // newPostText: string,
    posts: Array<PostType>,
    profile: ProfileInfoType
    status: string
}

export type LocationType = {
    city: string,
    country: string
}

export type UsersType = {
    userId: any
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}
export type UsersPageType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<FollowingInProgress>
}
export type FollowingInProgress = {
    isFetching: boolean,
    userId: any
}

export type SidebarType = {}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    // newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SidebarType
    usersPage: UsersPageType
    auth: AuthUserType
}
export type AuthUserType = {
    id: any,
    email: string,
    login: string,
    isAuth: boolean
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
//
type FollowActionType = ReturnType<typeof acceptFollow>
type UnfollowActionType = ReturnType<typeof acceptUnfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type AddPostActionType = ReturnType<typeof addPost>
// type ChangeNewTextActionType = ReturnType<typeof updatePostChange>
type AddMessagesActionType = ReturnType<typeof addMessageAC>
// type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type updateToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setUserDataActionType = ReturnType<typeof setAuthUserData>
type followingInProgressActionType = ReturnType<typeof toggleFollowingProgress>
type setStatusActionType = ReturnType<typeof setStatus>
type initializedSuccessActionType = ReturnType<typeof initializedSuccess>
export type ActionsTypes =
    AddPostActionType |
    // ChangeNewTextActionType |
    AddMessagesActionType |
    // updateNewMessageBodyActionType |
    FollowActionType | UnfollowActionType |
    SetUsersActionType | setCurrentPageActionType |
    setTotalUsersCountActionType | updateToggleIsFetchingActionType |
    setUserProfileActionType | setUserDataActionType | followingInProgressActionType |
    setStatusActionType | initializedSuccessActionType

