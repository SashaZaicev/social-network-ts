import {Redirect} from "react-router-dom";
import React, {Component} from "react";
import {RootStateType} from "../redux/store";
import {connect} from "react-redux";

type AuthPropsType = {
    isAuth: boolean,
}

let mapStateToPropsForRedirect = (state: RootStateType): AuthPropsType => ({
    isAuth: state.auth.isAuth
})

// export function withAuthRedirect<T>(Component: ComponentType<T>) {


export const withAuthRedirect = (Component: React.ElementType) => {
    class RedirectComponent extends React.Component<AuthPropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}
            />
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

    // let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    //
    // return ConnectedAuthRedirectComponent;
}