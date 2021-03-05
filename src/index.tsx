import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';
import store, {AppStateType} from "./redux/reduxStore";
import {Provider} from "react-redux";

// export let renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
// }

// store.subscribe(() => {
//     renderTree()
// })
// renderTree()