import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

type MessageType = {
    message: string
    id: string
}
type DialogType = {
    name: string
    id: string
}
type PostType = {
    message: string,
    likeCount: number,
    id: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type SidebarType = {}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sideBar: SidebarType
}


let state: RootStateType = {
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
}
export let addPost = () => {
    debugger
    let newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText: string) => {
    debugger
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export let sendMessages = (newMessage: string) => {
    let newUserMessage: MessageType = {
        id: v1(),
        message: newMessage,
    }
    state.dialogsPage.messages.push(newUserMessage)
    rerenderEntireTree(state)
}
export default state