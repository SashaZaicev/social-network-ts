import {
  addPost,
  setUserProfile,
  setStatus,
  deletePost,
  savePhotoSuccess
} from "./reducers/profileReducer";
import {addMessageAC} from "./reducers/dialogsReducer";
import {
  setCurrentPage,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress, acceptUnfollow, acceptFollow,
} from "./reducers/usersReducer";
import {setAuthUserData} from "./reducers/authReducer";
import {initializedSuccess} from "./reducers/appReducer";
//App Page
export type AppType = {
  initialized: boolean
}
//ProfilePage
export type PhotosInfoType = {
  small: string;
  large: string;
}

export type PostType = {
  id: string | number,
  message: string,
  likeCount: number

}
type ContactsInfoType = {
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
  userId: string
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

export type UserType = {
  userId: string
  followed: boolean,
  fullName: string,
  status: string,
  location: LocationType
  photos: string
}
// export type UsersPageType = {
//   users: Array<UsersType>,
//   pageSize: number,
//   totalUsersCount: number,
//   currentPage: number,
//   isFetching: boolean,
//   followingInProgress: Array<number>
// }
// export type FollowingInProgress = {
//     isFetching: boolean,
//     userId: string | number
// }

// export type SidebarType = {}

//DialogPage
export type MessageType = {
  message: string
  id: any
}
export type DialogType = {
  name: string
  id: string | number
}
export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  // newMessageBody: string
}

export type AuthUserType = {
  id: any,
  email: string,
  login: string,
  isAuth: boolean,
  captchaUrl: string,
}

type FollowActionType = ReturnType<typeof acceptFollow>
type UnfollowActionType = ReturnType<typeof acceptUnfollow>
type SetUsersActionType = ReturnType<typeof setUsers>
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type AddPostActionType = ReturnType<typeof addPost>
type DeletePostActionType = ReturnType<typeof deletePost>
// type ChangeNewTextActionType = ReturnType<typeof updatePostChange>
type AddMessagesActionType = ReturnType<typeof addMessageAC>
// type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type updateToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type setUserProfileActionType = ReturnType<typeof setUserProfile>
type setUserDataActionType = ReturnType<typeof setAuthUserData>
type followingInProgressActionType = ReturnType<typeof toggleFollowingProgress>
type setStatusActionType = ReturnType<typeof setStatus>
type initializedSuccessActionType = ReturnType<typeof initializedSuccess>
type savePhotoActionType = ReturnType<typeof savePhotoSuccess>
export type ActionsTypes =
  AddPostActionType
  |
  // ChangeNewTextActionType |
  AddMessagesActionType
  |
  // updateNewMessageBodyActionType |
  FollowActionType
  | UnfollowActionType
  |
  SetUsersActionType
  | setCurrentPageActionType
  |
  setTotalUsersCountActionType
  | updateToggleIsFetchingActionType
  |
  setUserProfileActionType
  | setUserDataActionType
  | followingInProgressActionType
  |
  setStatusActionType
  | initializedSuccessActionType
  | DeletePostActionType
  |
  savePhotoActionType

