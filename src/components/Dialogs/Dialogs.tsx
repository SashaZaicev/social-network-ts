import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsTypes, DialogPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";


type DialogsPropsType = {
    store: any
    // dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (body: string) => void
    addMessage: () => void
    newMessageBody: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let messagesElements = props.store.messages.map((m: any) => <Message
        key={m.id}
        id={m.id}
        message={m.message}
    />)
    let dialogsElements = props.store.dialogs.map((d: any) => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />)

    let addNewMessage = () => {
        props.addMessage()
    }
    let changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body);
    }

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
                    <textarea
                        onChange={changeMessage}
                        placeholder='Enter your message'
                        value={props.newMessageBody}
                        name=""
                        id=""/>
                </div>
                <div>
                    <button onClick={addNewMessage}>Add message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;