import {v1} from "uuid";

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
export type SidebarType = {}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    // updateNewPostText: (newText: string) => void
    // addPost: (newPostText: string) => void
    sendMessages: (newMessage: string) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// type AddPostActionType = {
//     type: 'ADD-POST'
//     newPostText: string
// }
type AddPostActionType = ReturnType<typeof addPostAC>

type ChangeNewTextActionType = ReturnType<typeof onPostChangeAC>
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

export const addPostAC = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText: newPostText} as const
}
export const onPostChangeAC = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: newText} as const
}

let store: StoreType = {
    _state: {
        profilePage:
            {
                posts: [
                    {
                        id: v1(),
                        message: 'Post1',
                        likeCount: 123
                    },
                    {
                        id: v1(),
                        message: 'Post2',
                        likeCount: 22
                    },
                    {
                        id: v1(),
                        message: 'Post3',
                        likeCount: 4
                    },
                    {
                        id: v1(),
                        message: 'Post4',
                        likeCount: 5
                    },
                ],
                newPostText: 'input message'
            },
        dialogsPage: {
            dialogs: [
                {
                    id: v1(),
                    name: 'Dimych'
                },
                {
                    id: v1(),
                    name: 'Andrey'
                },
                {
                    id: v1(),
                    name: 'Sveta'
                },
                {
                    id: v1(),
                    name: 'Sasha'
                },
                {
                    id: v1(),
                    name: 'Petr'
                }
            ],
            messages: [
                {
                    id: v1(),
                    message: 'Hello'
                },
                {
                    id: v1(),
                    message: 'I am fine'
                },
                {
                    id: v1(),
                    message: 'I am God!'
                }
            ]
        },
        sideBar: {}
    },
    _onChange() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
    },

    // addPost(newPostText: string) {
    //     let newPost: PostType = {
    //         id: v1(),
    //         message: newPostText,
    //         likeCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._onChange()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._onChange()
    // },
    sendMessages(newMessage: string) {
        let newUserMessage: MessageType = {
            id: v1(),
            message: newMessage,
        }
        this._state.dialogsPage.messages.push(newUserMessage)
        this._onChange()
    },

}
// let state: RootStateType = {
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
//         ]
//     },
//     sideBar: {}
// }
// window.store: = store
export default store