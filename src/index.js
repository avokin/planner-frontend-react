import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import App from "./App";
import Day from "./Day";
import Menu from "./Menu";
import DayMenu from "./DayMenu";
import Sprint from "./Sprint";

render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" components={{main: Day, menu: Menu}}/>
            <Route path="/sprint" components={{main: Sprint, menu: Menu}}/>
            <Route path="/day" components={{main: Day, menu: DayMenu}}/>
            <Route path="/day/:day" components={{main: Day, menu: DayMenu}}/>
        </Route>
    </Router>
), document.getElementById('root'));
