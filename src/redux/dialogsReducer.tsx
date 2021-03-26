import {ActionsTypes, DialogPageType, MessageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let initialState = {
    dialogs: [
        {
            id: 6,
            name: 'Dimych'
        },
        {
            id: 5,
            name: 'Andrey'
        },
        {
            id: 1,
            name: 'Sveta'
        },
        {
            id: 2,
            name: 'Sasha'
        },
        {
            id: 3,
            name: 'Petr'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hello'
        },
        {
            id: 2,
            message: 'I am fine'
        },
        {
            id: 3,
            message: 'I am God!'
        }
    ],
    newMessageBody: 'input message'
}
const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_MESSAGE:{
            let newUserMessage: MessageType = {
                id: 2,
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