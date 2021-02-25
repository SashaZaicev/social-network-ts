import s from "../Dialogs.module.css";
import React from "react";
import {PostsPropsType} from "../../Profile/MyPosts/MyPosts";

export type MessagePropsType = {
    message: string
    id:string
}
export const Message:React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>)
}