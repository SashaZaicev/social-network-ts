import {v1} from "uuid";
import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    newPostText: 'input message',
    profile: null,
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likeCount: 0
            }

            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = ''
            return newState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let newState = {...state}
            newState.newPostText = action.newText
            return newState;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
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
export const setUserProfile = (profile: any) => {
    return {type: "SET_USER_PROFILE", profile} as const
}
export default profileReducer;