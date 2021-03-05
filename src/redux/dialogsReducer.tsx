import {v1} from "uuid";
import {ActionsTypes, DialogPageType, MessageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {
    dialogs: [
        {
            id: v1(),
            name: 'Dimych'
        },
        {
            id: v1(),
            name: 'Andrey'
        },
        {
            id: v1(),
            name: 'Sveta'
        },
        {
            id: v1(),
            name: 'Sasha'
        },
        {
            id: v1(),
            name: 'Petr'
        }
    ],
    messages: [
        {
            id: v1(),
            message: 'Hello'
        },
        {
            id: v1(),
            message: 'I am fine'
        },
        {
            id: v1(),
            message: 'I am God!'
        }
    ],
    newMessageBody: 'input message'
}
const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:{
            let newUserMessage: MessageType = {
                id: v1(),
                message: action.message,
            }

            let newState = {...state}
            newState.messages = [...state.messages]
            newState.messages.push(newUserMessage)
            newState.newMessageBody = ''
            return newState;}
        case UPDATE_NEW_MESSAGE_BODY:{
            let newState = {...state}
            newState.newMessageBody = action.newMessage
            return newState;
        }
        default:
            return state
    }
}

export const addMessageAC = (message: string) => {
    return {type: "ADD-MESSAGE", message: message} as const
}
export const updateNewMessageBodyAC = (newMessage: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", newMessage: newMessage} as const
}

export default dialogsReducer;