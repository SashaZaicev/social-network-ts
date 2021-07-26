import {FC} from 'react';
import style from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {ProfilePageType} from "../../../redux/store";
import {Post} from "./Post/Post";

type PostsPropsType = {
  profilePage: ProfilePageType
  // updatePostChange: (newPostChange: string) => void
  addPost: (values: string) => void
}
type FormDataType = {
  newPostText: string
}

export const MyPosts: FC<PostsPropsType> = ({
                                              profilePage,
                                              addPost
                                            }) => {
  let postsElements = profilePage.posts.map(p => (
    <Post
      key={p.id}
      message={p.message}
      likeCount={p.likeCount}
    />))

  let onAddPost = (values: FormDataType) => {
    addPost(values.newPostText)
  }
  // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //     let newPostChange = e.currentTarget.value
  //     props.updatePostChange(newPostChange)
  // }

  return (
    <div className={style.postBlock}>
      <h3 className={style.titleStyle}>My post</h3>
      <div>
        <AddPostReduxForm onSubmit={onAddPost}/>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>

  );
};

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostText'}
               validate={[required, maxLength10]}
               placeholder={'Enter your post'}
        />
      </div>
      <div>
        <button className={style.btnStyle}>Add post</button>
      </div>
    </form>
  )
};
const AddPostReduxForm = reduxForm<FormDataType>({form: 'profileAddPostForm'})(AddPostForm);
