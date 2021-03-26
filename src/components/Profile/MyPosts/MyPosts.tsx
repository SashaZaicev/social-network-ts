import React, {ChangeEvent} from 'react';
//@ts-ignore
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

// export interface PostPropsTypes {
//     message: string,
//     likeCount: number,
//     id: number
// }

export type PostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    updatePostChange: (newPostChange: string) => void
    addPost: (newPostText: string) => void

}
// {id: 2, message: "Post1", likeCount: 123}
// Type 'PostPropsType[]' is not assignable to type 'PostType[]'.

const MyPosts: React.FC<PostsPropsType> = (props) => {
        let postsElements = props.posts.map((p) => (<Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCount={p.likeCount}/>))

        let onAddPost = () => {
            props.addPost(props.newPostText)
        }
        let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let newPostChange = e.currentTarget.value
            props.updatePostChange(newPostChange)
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
                        <button onClick={onAddPost}>Add post</button>
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