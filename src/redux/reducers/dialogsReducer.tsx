import {ActionsTypes, DialogPageType, MessageType} from "../store";
import {ADD_MESSAGE} from "./constants";

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
      id: '1',
      message: 'Hello'
    },
    {
      id: '2',
      message: 'I am fine'
    },
    {
      id: '3',
      message: 'I am God!'
    }
  ],
}
export const dialogsReducer = (state = initialState,
                        action: ActionsTypes): DialogPageType => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newUserMessage: MessageType = {
        id: Math.random(),
        message: action.message,
      }
      let newState = {...state}
      newState.messages = [...state.messages]
      newState.messages.push(newUserMessage)
      return newState;
    }
    //     case UPDATE_NEW_MESSAGE_BODY:{
    //         let newState = {...state}
    //         newState.newMessageBody = action.newMessage
    //         return newState;
    //     }
    default:
      return state
  }
}

export const addMessageAC = (message: string) => {
  return {type: "ADD-MESSAGE", message: message} as const
}
// export const updateNewMessageBodyAC = (newMessage: string) => {
//     return {type: "UPDATE-NEW-MESSAGE-BODY", newMessage: newMessage} as const
// }
