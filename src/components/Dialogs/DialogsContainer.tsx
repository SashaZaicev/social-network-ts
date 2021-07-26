import React from 'react';
import {addMessageAC} from "../../redux/reducers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {DialogPageType} from "../../redux/store";

type MapStatePropsType = {
  dialogsPage: DialogPageType
}
let mStp = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
    // newMessageBody: state.dialogsPage.newMessageBody,
    // isAuth: state.auth.isAuth
  }
}
// (props:any) => {
// if (!props.isAuth) return <Redirect to={"/login"}/>
// return <Dialogs {...props}/>
// }
let mDtp = (dispatch: Dispatch) => {
  return {
    addMessage: (newMessageBody: string) => {
      dispatch(addMessageAC(newMessageBody))
    },
    // updateNewMessageBody: (body: string) => {
    //     dispatch(updateNewMessageBodyAC(body));
    // }
  }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mStp, mDtp)(AuthRedirectComponent);
// export default DialogsContainer;
export default compose<React.ComponentType>(connect(mStp, mDtp), withAuthRedirect)(Dialogs);
