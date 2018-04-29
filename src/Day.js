import React from 'react'
import Calendar from "./Calendar";
import {INSTANCE} from "./LocalStorageDataProvider";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";


export default class Day extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.dayString = this.getDayString();
        let tasks = INSTANCE.getTasksFor(this.dayString);

        this.state = {tasks: tasks, today: moment()}
    }

    render() {
        const listItems = this.state.tasks.map((task) =>
            <tr key={task.id}>
                <td className="vertical-aligned text-center">
                    {this.completeBlock(task)}
                </td>
                <td className="vertical-aligned">
                    {task.title}
                </td>

                <td>
                    <DatePicker
                        selected={moment(task.dueDay)}
                        onChange={(date) =>
                            this.handleChange(task, date)}
                        dateFormat="YYYY-MM-DD"
                        className="form-control"
                    />
                </td>

                <td onClick={() => this.deleteTask(task)} className="text-right vertical-aligned">
                    <button className="btn btn-secondary">Delete</button>
                </td>
            </tr>
        );

        return <div className="container-fluid">
            <div className="row">
                <div className="col col-md-4">
                    <Calendar day={this.dayString}/>
                </div>
                <div className="col col-md-8">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col col-md-12">
                                <table className="table table-striped">
                                    <tbody>
                                    {listItems}
                                    <tr>
                                        <td colSpan="4">
                                            <div className="input-group">
                                                <input className="form-control" placeholder="New task..."
                                                       ref={input => this.newTaskTitle = input}/>
                                                <span className="input-group-btn">
                                                  <button onClick={this.addTask} className="btn btn-secondary">
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

    handleChange(task, date) {
        task.dueDay = date.format("YYYYMMDD");
        INSTANCE.updateTasks();
        this.setState({
            tasks: this.state.tasks
        });
    }

    addTask() {
        const title = this.newTaskTitle.value;

        let task = {title: title, dueDay: this.dayString, isComplete: false};
        INSTANCE.addTask(task);
        this.setState({tasks: INSTANCE.getTasksFor(this.dayString)});
    }

    deleteTask(task) {
        INSTANCE.removeTask(task);
        this.setState({tasks: INSTANCE.getTasksFor(this.dayString)});
    }

    completeTask(task) {

    }

    completeBlock(task) {
        if (task.isComplete) {
            return <i className="fa fa-check"/>
        }
        return (
            <button className="btn btn-secondary" onClick={this.completeTask(task)}>
                Complete
            </button>
        )
    }

    getDayString() {
        if (this.props.day != null) {
            return this.props.day;
        } else {
            const today = new Date();
            return today.getFullYear() + Day.formatTwoDigits(today.getMonth() + 1) + Day.formatTwoDigits(today.getDate());
        }
    }

    static formatTwoDigits(number) {
        return ("0" + number).slice(-2)
    }
}
