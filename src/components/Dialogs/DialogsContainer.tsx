import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsTypes, DialogPageType, RootStateType} from "../../redux/store";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';


// type DialogsPropsType = {
// store: any
// dispatch: (action: ActionsTypes) => void
// }

// const DialogsContainer: React.FC<DialogsPropsType> = (props) => {
//
//     let addMessage = () => {
//         props.dispatch(addMessageAC(newMessageBody))
//     }
//     let updateNewMessageBody = (body: string) => {
//         props.dispatch(updateNewMessageBodyAC(body));
//     }
//     let newMessageBody = props.store.newMessageBody
//     return (
//         <Dialogs store={props.store.dialogsPage}
//                  newMessageBody={newMessageBody}
//                  addMessage={addMessage}
//                  updateNewMessageBody={updateNewMessageBody}/>
//     );
// };

let mStp = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

let mDtp = (dispatch: any) => {
    return {
        addMessage: (newMessageBody: string) => {
            dispatch(addMessageAC(newMessageBody))
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body));
        }
    }
}

const DialogsContainer = connect(mStp, mDtp)(Dialogs);
export default DialogsContainer;