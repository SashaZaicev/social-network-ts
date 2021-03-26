import {addPost, updatePostChange, setUserProfile} from "./profileReducer";
import {addMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress, acceptUnfollow, acceptFollow,
} from "./usersReducer";
import {setAuthUserData} from "./authReducer";

export type MessageType = {
    message: string
    id: number
}
export type DialogType = {
    name: string
    id: number
}

interface PostType {
    id: number,
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
    userId: number
}
export type ProfilePageType = {
    newPostText: string,
    posts: Array<PostType>,
    profile: ProfileInfoType
}

export type LocationType = {
    city: string,
    country: string
}

export type UsersType = {
    userId: number
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
    userId: number
}

export type SidebarType = {}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SidebarType
    usersPage: UsersPageType
    auth: AuthUserType
}
export type AuthUserType = {
    id: null,
    email: null,
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
type ChangeNewTextActionType = ReturnType<typeof updatePostChange>
type AddMessagesActionType = ReturnType<typeof addMessageAC>
type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type updateToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setUserDataActionType = ReturnType<typeof setAuthUserData>
type followingInProgressActionType = ReturnType<typeof toggleFollowingProgress>
export type ActionsTypes =
    AddPostActionType | ChangeNewTextActionType |
    AddMessagesActionType | updateNewMessageBodyActionType |
    FollowActionType | UnfollowActionType |
    SetUsersActionType | setCurrentPageActionType |
    setTotalUsersCountActionType | updateToggleIsFetchingActionType |
    setUserProfileActionType | setUserDataActionType | followingInProgressActionType

