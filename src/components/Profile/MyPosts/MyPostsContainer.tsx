import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
// import {AppStateType} from "../../../redux/reduxStore";
// import {ActionsTypes} from "../../../redux/store";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";

// export type PostsPropsType = {
//     store: any
//     // posts: Array<PostPropsType>
//     // newPostText: any
//     dispatch: (action: ActionsTypes) => void

// }

//
// const MyPostsContainer = (props: any) => {
//
//         let addPost = () => {
//             props.dispatch(addPostAC(props.store.newPostText))
//         }
//         let updatePostChange = (newPostChange: string) => {
//             props.dispatch(onPostChangeAC(newPostChange))
//         }
//         return (
//             <MyPosts posts={props.store.posts}
//                      updatePostChange={updatePostChange}
//                      addPost={addPost}
//                      newPostText={props.store.newPostText}/>
//         )
//     }
// ;
let mStp = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mDtp = (dispatch: any) => {
    return {
        updatePostChange: (newPostChange: string) => {
            dispatch(onPostChangeAC(newPostChange))
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mStp, mDtp)(MyPosts);
export default MyPostsContainer;