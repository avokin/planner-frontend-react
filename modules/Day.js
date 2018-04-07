import React from 'react'
import Calendar from "./Calendar";

export default class Day extends React.Component {
    render() {
        const dayString = this.getDayString();

        return <div className="container-fluid">
            <div className="row">
                <div className="col col-md-4">
                    <Calendar day={dayString}/>
                </div>
                <div className="col col-md-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-md-12">
                                <table className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <td className="vertical-aligned text-center">
                                            {/*<i className="fa fa-check"></i>*/}
                                            <button className="btn btn-secondary">
                                                Complete
                                            </button>
                                        </td>
                                        <td className="vertical-aligned">
                                            Task1
                                        </td>
                                        <td className="vertical-aligned">
                                            <div className="input-group vertical-aligned">
                                                <input type="text" className="form-control"
                                                       placeholder="Due date"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary"
                                                            type="button">
                                                        <i className="fa fa-calendar"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-right vertical-aligned">
                                            <button className="btn btn-secondary">Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4">
                                            <div className="input-group">
                                                <input className="form-control" placeholder="New task..."/>
                                                <span className="input-group-btn">
                                                  <button className="btn btn-secondary">
                                                    Add
                                                  </button>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    getDayString() {
        if (this.props.params.day != null) {
            return this.props.params.day;
        } else {
            const today = new Date();
            console.log(Day.formatTwoDigits(today.getMonth()));
            return today.getFullYear() + Day.formatTwoDigits(today.getMonth() + 1) + Day.formatTwoDigits(today.getDay() + 1);
        }
    }

    static formatTwoDigits(number) {
        return ("0" + number).slice(-2)
    }
}
