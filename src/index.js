import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import reducers from "./reducers"


const store = createStore(combineReducers (reducers),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState())
const Rout = function () {
    return (<Router>
        <Switch>
    <Route path="/" exact component={App} />
    <Route path="/api/:page" />
        </Switch>
</Router>)
};

ReactDOM.render( <Provider store={store}><Rout/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
