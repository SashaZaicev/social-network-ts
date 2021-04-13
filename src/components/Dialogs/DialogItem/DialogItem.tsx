import React from 'react';
//@ts-ignore
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active}
                     to={path}>{props.name}
            </NavLink></div>
    )
}