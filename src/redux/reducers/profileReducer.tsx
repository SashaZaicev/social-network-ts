import {
  ActionsTypes,
  PhotosInfoType, PostType,
  ProfileInfoType,
  ProfilePageType
} from "../store";
import {profileApi} from "../../api/api";
import {Dispatch} from "redux";
import {
  ADD_POST,
  DELETE_POST,
  SAVE_PHOTO,
  SET_STATUS,
  SET_USER_PROFILE
} from "./constants";


let initialState = {
  posts: [
    {
      id: '2',
      message: 'Post1',
      likeCount: 123
    },
    {
      id: '3',
      message: 'Post2',
      likeCount: 22
    },
    {
      id: '4',
      message: 'Post3',
      likeCount: 4
    },
    {
      id: '5',
      message: 'Post4',
      likeCount: 5
    },
  ] as Array<PostType>,
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
    userId: '1'
  } as ProfileInfoType,
  status: ""
};


//  type NewProfilePageType = {
//     // newPostText: string,
//     posts: Array<PostType>,
//     profile: ProfileInfoType
//     status: string
// }
type NewProfilePageType = typeof initialState
const profileReducer = (state: NewProfilePageType = initialState, action: ActionsTypes): NewProfilePageType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: '2',
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
    case DELETE_POST: {
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
    }
    case SAVE_PHOTO: {
      return {...state, profile: {...state.profile, photos: action.photos}};
    }
    default:
      return state
  }
}
type  AddPostActionType = {
  type: "ADD-POST",
  newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => {
  return {type: "ADD-POST", newPostText: newPostText} as const
}
type SetUserProfileActionType = {
  type: "SET_USER_PROFILE",
  profile: ProfileInfoType
}
export const setUserProfile = (profile: ProfileInfoType): SetUserProfileActionType => {
  return {type: "SET_USER_PROFILE", profile} as const
}
type  SetStatusActionType = {
  type: "SET_STATUS", status: string
}
export const setStatus = (status: string): SetStatusActionType => {
  return {type: "SET_STATUS", status} as const
}
type  DeletePostActionType = {
  type: "DELETE_POST", postId: string | number
}
export const deletePost = (postId: string | number): DeletePostActionType => {
  return {type: "DELETE_POST", postId} as const
}
type  SavePhotoSuccessActionType = {
  type: "SAVE_PHOTO", photos: PhotosInfoType
}
export const savePhotoSuccess = (photos: PhotosInfoType): SavePhotoSuccessActionType => {
  return {type: "SAVE_PHOTO", photos} as const
}


export const getUserProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
    profileApi.authUser(userId).then((response) => {
      dispatch(setUserProfile(response))
    })
  }
}
export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.getStatus(userId)
  dispatch(setStatus(response))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  const response = await profileApi.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
  const response = await profileApi.savePhotos(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos))
  }
}

export default profileReducer
