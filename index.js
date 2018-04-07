import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from './modules/App'
import Day from "./modules/Day";

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/day" component={Day}/>
            <Route path="/day/:day" component={Day}/>
        </Route>
    </Router>
), document.getElementById('app'));
