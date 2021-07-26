import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";

type AuthPropsType = {
    isAuth: boolean,
}

let mapStateToPropsForRedirect = (state: AppStateType): AuthPropsType => ({
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
