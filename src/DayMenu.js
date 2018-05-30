import React from 'react'

import {getCurrentDay, getPreviousDay, getNextDay} from "./day/DayUtil";

export default class DayMenu extends React.Component {
    constructor(props) {
        super(props);

        this.currentDay = getCurrentDay(this.props.params.day);
    }

    render() {
        return <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a href="/sprint" className="nav-link">Sprint</a>
            </li>

            <li className="nav-item">
                <a href={'/day/' + getPreviousDay(this.currentDay)} className="nav-link">Previous Day</a>
            </li>

            <li className="nav-item">
                <a href={'/day/' + getNextDay(this.currentDay)} className="nav-link">Next Day</a>
            </li>
        </ul>
    }
}
