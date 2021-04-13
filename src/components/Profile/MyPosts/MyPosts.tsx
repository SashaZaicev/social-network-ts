import React, {ChangeEvent} from 'react';
//@ts-ignore
import s from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

// export interface PostPropsTypes {
//     message: string,
//     likeCount: number,
//     id: number
// }

export type PostsPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    updatePostChange: (newPostChange: string) => void
    addPost: (values: string) => void

}
// {id: 2, message: "Post1", likeCount: 123}
// Type 'PostPropsType[]' is not assignable to type 'PostType[]'.

const MyPosts: React.FC<PostsPropsType> = (props) => {
        let postsElements = props.posts.map((p) => (<Post
            key={p.id}
            id={p.id}
            message={p.message}
            likeCount={p.likeCount}/>))

        let onAddPost = (values: any) => {
            props.addPost(values.newPostText)
        }
        // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     let newPostChange = e.currentTarget.value
        //     props.updatePostChange(newPostChange)
        // }

        return (
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <AddPostReduxForm onSubmit={onAddPost}/>
                    {/*<div>*/}
                    {/*    <textarea*/}
                    {/*        onChange={onPostChange}*/}
                    {/*        value={props.newPostText}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <button onClick={onAddPost}>Add post</button>*/}
                    {/*</div>*/}
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

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name={'newPostText'}
                        validate={[required,maxLength10]} placeholder={'Enter your post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}
const AddPostReduxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);