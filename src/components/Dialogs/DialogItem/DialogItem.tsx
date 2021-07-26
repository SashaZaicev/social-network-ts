import {FC} from 'react';
import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
  name: string
  id: string | number
}

export const DialogItem: FC<DialogItemPropsType> = ({
                                                      name,
                                                      id
                                                    }) => {
  let path = '/dialogs/' + id;
  return (
    <div className={style.dialog}>
      <NavLink
        activeClassName={style.active}
        to={path}>
        {name}
      </NavLink>
    </div>
  )
};
