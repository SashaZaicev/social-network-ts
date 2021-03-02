import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/reduxStore";
import {ActionsTypes} from "../../../redux/store";

export type PostsPropsType = {
    store: any
    // posts: Array<PostPropsType>
    // newPostText: any
    dispatch: (action: ActionsTypes) => void

}


const MyPostsContainer = (props:any) => {

        let addPost = () => {
            props.dispatch(addPostAC(props.store.newPostText))
        }
        let updatePostChange = (newPostChange:string) => {
            props.dispatch(onPostChangeAC(newPostChange))
        }
        return (
            <MyPosts posts={props.store.posts}
                     updatePostChange={updatePostChange}
                     addPost={addPost}
                     newPostText={props.store.newPostText}/>
        )
    }
;
export default MyPostsContainer;