import style from "../Dialogs.module.css";
import React, {FC} from "react";

type MessagePropsType = {
  message: string
}
export const Message: FC<MessagePropsType> = ({
                                                message,
                                              }) => {
  return (
    <div className={style.message}>
      {message}
    </div>)
}
