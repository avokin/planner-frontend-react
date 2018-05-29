import React from 'react'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    render() {
        return <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a href="/sprint" className="nav-link">Sprint</a>
            </li>

            <li className="nav-item">
                <a href="/day" className="nav-link">Previous Day</a>
            </li>

            <li className="nav-item">
                <a href="/day" className="nav-link">Next Day</a>
            </li>
        </ul>
    }
})
