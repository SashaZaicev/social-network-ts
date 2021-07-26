import {FC} from 'react';
import style from './Post.module.css'

const imgLogo = 'https://image.freepik.com/free-vector/rabbit-gaming-mascot-e-sports-logo_74154-31.jpg'

export type PostPropsType = {
  message: string,
  likeCount: number
}

export const Post: FC<PostPropsType> = ({
                                          message,
                                          likeCount
                                        }) => {
  return (
    <div className={style.item}>
      <img src={imgLogo} alt=""/>{message}
      <div><span>Like {likeCount}</span></div>
    </div>
  );
};
