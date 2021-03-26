import {Redirect} from "react-router-dom";
import React, {Component} from "react";

type AuthPropsType = {
    isAuth: boolean
}

export const withAuthRedirect = (Component:any) => {

    class RedirectComponent extends React.Component<AuthPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}
            />
        }
    }

    return RedirectComponent
}