import React from 'react'

export default  React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    render() {
        var calendarUrl = 'https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=DAY&wkst=1&bgcolor=%23FFFFFF&src=andrey.vokin%40gmail.com&color=%231B887A&ctz=Europe%2FBerlin&dates=' + this.props.day + '/' + this.props.day;
        return <iframe src={calendarUrl} width="100%" height="500" style={{border: 0}} frameBorder="0" scrolling="no"/>
    }
})
