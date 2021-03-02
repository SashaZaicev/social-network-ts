import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
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
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}
export const addPostAC = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText: newPostText} as const
}
export const onPostChangeAC = (newText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newText: newText} as const
}
export default profileReducer;