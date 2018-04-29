import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from "./App";
import Day from "./Day";

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/day" component={Day}/>
        <Route path="/day/:day" component={Day}/>
    </Router>
), document.getElementById('root'));

