import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';
import store, {AppStateType} from "./redux/reduxStore";

export let renderTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                // state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.subscribe(() => {
    let state = store.getState();
    renderTree(state)
})
renderTree(store.getState())