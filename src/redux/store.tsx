import {addPostAC, onPostChangeAC, setUserProfile} from "./profileReducer";
import {addMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./usersReducer";

export type MessageType = {
    message: string
    id: string
}
export type DialogType = {
    name: string
    id: string
}
export type PostType = {
    message: string,
    likeCount: number,
    id: string
}

export type PhotosInfoType = {
    small: string
    large: any
}
export type ContactsInfoType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string
}
export type ProfileInfoType = {
    profile: string | undefined
    aboutMe: string
    contacts: Array<ContactsInfoType>
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: Array<PhotosInfoType>
    userId: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null,
}


export type LocationType = {
    city: string,
    country: string
}

export type UsersType = {
    id: string
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
    isFetching: boolean
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
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
//
type FollowActionType = ReturnType<typeof follow>
type UnfollowActionType = ReturnType<typeof unfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof onPostChangeAC>
type AddMessagesActionType = ReturnType<typeof addMessageAC>
type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type updateToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
export type ActionsTypes =
    AddPostActionType | ChangeNewTextActionType |
    AddMessagesActionType | updateNewMessageBodyActionType |
    FollowActionType | UnfollowActionType |
    SetUsersActionType | setCurrentPageActionType |
    setTotalUsersCountActionType | updateToggleIsFetchingActionType |
    setUserProfileActionType

