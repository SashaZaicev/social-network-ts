import React from 'react';
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {DialogPageType} from "../../redux/store";


type DialogsPropsType = {
  dialogsPage: DialogPageType
  // dispatch: (action: ActionsTypes) => void
  updateNewMessageBody: (body: string) => void
  addMessage: (newMessageBody: string) => void
  newMessageBody: string
  isAuth: boolean
  addNewMessage: (values: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  let messagesElements = props.dialogsPage.messages.map(m => <Message
    key={m.id}
    message={m.message}
  />)
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem
    key={d.id}
    id={d.id}
    name={d.name}
  />)

  let addNewMessage = (values:any) => {
    props.addMessage(values.newMessageBody)
  }
  // let changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //     let body = e.currentTarget.value
  //     props.updateNewMessageBody(body);
  // }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsTitle}>Messages</div>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
      <br/>
      <div className={style.textAreaDialogs}>
        <div>
          <AddMessageForm onSubmit={addNewMessage}/>
        </div>
      </div>

    </div>
  );
};

export default Dialogs;
