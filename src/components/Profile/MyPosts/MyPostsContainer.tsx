import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
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
        // newPostText: state.profilePage.newPostText
    }
}

// let mDtp = (dispatch: Dispatch) => {
//     return {
//         updatePostChange: (newPostChange: string) => {
//             dispatch(updatePostChange(newPostChange))
//         },
//         addPost: (newPostText: string) => {
//             dispatch(addPost(newPostText))
//         }
//     }
// }

const MyPostsContainer = connect(mStp, {addPost})(MyPosts);
export default MyPostsContainer;