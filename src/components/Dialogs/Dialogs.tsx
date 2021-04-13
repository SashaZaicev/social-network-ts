import React from 'react';
//@ts-ignore
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/store";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {reduxForm} from 'redux-form';


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
    let messagesElements = props.dialogsPage.messages.map((m: any) => <Message
        key={m.id}
        id={m.id}
        message={m.message}
    />)
    let dialogsElements = props.dialogsPage.dialogs.map((d: any) => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />)

    let addNewMessage = (values: any) => {
        props.addMessage(values.newMessageBody)
    }
    // let changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.updateNewMessageBody(body);
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <br/>
            <div className={s.textAreaDialogs}>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;