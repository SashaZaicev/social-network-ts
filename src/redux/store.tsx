import {addPostAC, onPostChangeAC} from "./profileReducer";
import {addMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "./usersReducer";

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
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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
    currentPage: number
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
type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUserAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof onPostChangeAC>
type AddMessagesActionType = ReturnType<typeof addMessageAC>
type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type ActionsTypes =
    AddPostActionType | ChangeNewTextActionType |
    AddMessagesActionType | updateNewMessageBodyActionType |
    FollowActionType | UnfollowActionType | SetUsersActionType | setCurrentPageActionType |
    setTotalUsersCountActionType

//
// let store: StoreType = {
// _state: {
//     profilePage:
//         {
//             posts: [
//                 {
//                     id: v1(),
//                     message: 'Post1',
//                     likeCount: 123
//                 },
//                 {
//                     id: v1(),
//                     message: 'Post2',
//                     likeCount: 22
//                 },
//                 {
//                     id: v1(),
//                     message: 'Post3',
//                     likeCount: 4
//                 },
//                 {
//                     id: v1(),
//                     message: 'Post4',
//                     likeCount: 5
//                 },
//             ],
//             newPostText: 'input message'
//         },
//     dialogsPage: {
//         dialogs: [
//             {
//                 id: v1(),
//                 name: 'Dimych'
//             },
//             {
//                 id: v1(),
//                 name: 'Andrey'
//             },
//             {
//                 id: v1(),
//                 name: 'Sveta'
//             },
//             {
//                 id: v1(),
//                 name: 'Sasha'
//             },
//             {
//                 id: v1(),
//                 name: 'Petr'
//             }
//         ],
//         messages: [
//             {
//                 id: v1(),
//                 message: 'Hello'
//             },
//             {
//                 id: v1(),
//                 message: 'I am fine'
//             },
//             {
//                 id: v1(),
//                 message: 'I am God!'
//             }
//         ],
//         newMessageBody: 'input message'
//     },
//     sideBar: {}
// },
// _onChange() {
//     console.log('state changed')
// },
//
// subscribe(callback: any) {
//     this._onChange = callback
// },
// getState() {
//     return this._state
// },
//
// dispatch(action: any) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     // this._state.sideBar = sidebarReducer(this._state.sideBar, action)
//     this._onChange()
//
// if (action.type === ADD_POST) {
//     let newPost: PostType = {
//         id: v1(),
//         message: action.newPostText,
//         likeCount: 0
//     }
//     this._state.profilePage.posts.push(newPost)
//     this._state.profilePage.newPostText = ''
//     this._onChange()
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.profilePage.newPostText = action.newText
//     this._onChange()
// } else if (action.type === ADD_MESSAGE) {
//     let newUserMessage: MessageType = {
//         id: v1(),
//         message: action.message,
//     }
//     this._state.dialogsPage.messages.push(newUserMessage)
//     this._state.dialogsPage.newMessageBody = ''
//     this._onChange()
// } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//     this._state.dialogsPage.newMessageBody = action.newMessage
//     this._onChange()
// }
//     },
// }
// window.store: = store
// export default store