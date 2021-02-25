import React from 'react';
import s from './Post.module.css'

const imgLogo = 'https://image.freepik.com/free-vector/rabbit-gaming-mascot-e-sports-logo_74154-31.jpg'

export type PostPropsType = {
    message: string,
    likeCount: number,
    id: string
}


const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={imgLogo} alt=""/>{props.message}
            <div><span>Like {props.likeCount}</span></div>
        </div>
    );
};

export default Post;