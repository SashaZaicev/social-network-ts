import {ActionsTypes, ProfileInfoType, ProfilePageType} from "./store";
import {profileApi} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = "SET_STATUS"
// const UPDATE_STATUS = "UPDATE_STATUS"

let initialState = {
    posts: [
        {
            id: 2,
            message: 'Post1',
            likeCount: 123
        },
        {
            id: 3,
            message: 'Post2',
            likeCount: 22
        },
        {
            id: 4,
            message: 'Post3',
            likeCount: 4
        },
        {
            id: 5,
            message: 'Post4',
            likeCount: 5
        },
    ],
    // newPostText: 'input message',
    profile: {
        aboutMe: "Write a little about yourself",
        contacts: {
            facebook: "Write here your account facebook.com",
            website: "Write here your account webSite.com",
            vk: "Write here your account vk.com",
            twitter: "Write here your account twitter.com",
            instagram: "Write here your account instagram.com",
            github: "Write here your account github.com",
            mainLink: "Write here your account mainLink.com",
            youtube: "Write here your account youtube.com",
        },
        fullName: "Write here your full name",
        lookingForAJob: true,
        lookingForAJobDescription: "",
        photos: {
            small: "",
            large: ""
        },
        userId: 1
    },
    status: ""
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 2,
                message: action.newPostText,
                likeCount: 0
            }

            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            // newState.newPostText = ''
            return newState;
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     let newState = {...state}
        //     newState.newPostText = action.newText
        //     return newState;
        // }
        case SET_STATUS: {
            let newState = {...state}
            newState.status = action.status
            return newState;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state
    }
}
export const addPost = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText: newPostText} as const
}
export const setUserProfile = (profile: ProfileInfoType) => {
    return {type: "SET_USER_PROFILE", profile} as const
}
export const setStatus = (status: string) => {
    return {type: "SET_STATUS", status} as const
}
export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.authUser(userId).then((response) => {
            dispatch(setUserProfile(response))
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(userId).then((response) => {
            dispatch(setStatus(response))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer