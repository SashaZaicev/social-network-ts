import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import {ActionsTypes, addPostAC, onPostChangeAC} from "../../../redux/state";

export type PostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void

}


const MyPosts: React.FC<PostsPropsType> = (props) => {
        let postsElements = props.posts.map((p) => (<Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCount={p.likeCount}/>))


        let addPost = () => {
            props.dispatch(addPostAC(props.newPostText))
        }
        let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(onPostChangeAC(e.currentTarget.value))
        }
        return (
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        )
            ;
    }
;

export default MyPosts;