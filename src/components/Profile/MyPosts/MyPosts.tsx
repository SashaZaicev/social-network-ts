import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type PostsPropsType = {
    posts: Array<PostPropsType>
    addPost: (messagePost: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void

}

const MyPosts: React.FC<PostsPropsType> = (props) => {
        let postsElements = props.posts.map((p: any) => (<Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCount={p.likeCount}/>))


        let addPost = () => {
            props.addPost(props.newPostText);
        }
        let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
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