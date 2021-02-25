import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
    sendMessage: (newMessage: string) => void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let messagesElements = props.state.messages.map((m) => <Message
        key={m.id}
        id={m.id}
        message={m.message}
    />)
    let dialogsElements = props.state.dialogs.map((d) => <DialogItem
        key={d.id}
        id={d.id}
        name={d.name}
    />)
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let newMessage = () => {
        if (newMessageElement.current) {
            props.sendMessage(newMessageElement.current.value);
            newMessageElement.current.value = '';
        }
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
                    <textarea ref={newMessageElement} name="" id=""></textarea>
                </div>
                <div>
                    <button onClick={newMessage}>Add message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;