import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import logger from "redux-logger";
import Reducer from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";
import "./static/css/responsive.css";
import Router from './routes'

const store= createStore(Reducer,{},applyMiddleware(logger,thunk))

ReactDOM.render(<Provider store={store} >
        <Router />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
