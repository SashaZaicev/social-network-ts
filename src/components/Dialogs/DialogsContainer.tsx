import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsTypes, DialogPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


type DialogsPropsType = {
    store: any
    dispatch: (action: ActionsTypes) => void
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageAC(newMessageBody))
    }
    let updateNewMessageBody = (body: string) => {
        props.dispatch(updateNewMessageBodyAC(body));
    }
    let newMessageBody = props.store.newMessageBody
    return (
        <Dialogs store={props.store}
                 newMessageBody={newMessageBody}
                 addMessage={addMessage}
                 updateNewMessageBody={updateNewMessageBody}/>
    );
};

export default DialogsContainer;