import React from 'react'
import Calendar from "./Calendar";
import {INSTANCE} from "./LocalStorageDataProvider";
import {getDayString} from "./day/DayUtil";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";


export default class Day extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.newTaskNameTypedHandler = this.newTaskNameTypedHandler.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateDueDate = this.updateDueDate.bind(this);
        this.completeTask = this.completeTask.bind(this);

        this.dayString = getDayString(this.props.params.day);
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

                <td className="vertical-aligned">
                    {task.isCompleted}
                </td>

                <td>
                    <DatePicker
                        selected={moment(task.dueDay)}
                        onChange={(date) =>
                            this.updateDueDate(task, date)}
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
                                        <td colSpan="5">
                                            <div className="input-group mb-3">
                                                <input className="form-control" placeholder="New task..."
                                                       ref={input => {this.newTaskTitle = input}}
                                                       onKeyPress={this.newTaskNameTypedHandler.bind(this)}/>
                                                <div className="input-group-append">
                                                  <button onClick={this.addTask} className="btn btn-outline-secondary">
                                                    Add
                                                  </button>
                                                </div>
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

    updateDueDate(task, date) {
        task.dueDay = date.format("YYYYMMDD");
        INSTANCE.updateTasks();
        this.setState({
            tasks: INSTANCE.getTasksFor(this.dayString)
        });
    }

    newTaskNameTypedHandler(event) {
        var code = event.keyCode || event.which;
        if (code === 13) {
            this.addTask();
        }
    }

    addTask() {
        const title = this.newTaskTitle.value;

        let task = {title: title, dueDay: this.dayString, isCompleted: false};
        INSTANCE.addTask(task);
        this.setState({tasks: INSTANCE.getTasksFor(this.dayString)});

        this.newTaskTitle.value = "";
    }

    deleteTask(task) {
        INSTANCE.removeTask(task);
        this.setState({tasks: INSTANCE.getTasksFor(this.dayString)});
    }

    completeTask(task) {
        task.isCompleted = true;
        INSTANCE.updateTasks();
        this.setState({tasks: INSTANCE.getTasksFor(this.dayString)});
    }

    completeBlock(task) {
        if (task.isCompleted) {
            return <i className="fa fa-check"/>
        }
        return (
            <button className="btn btn-secondary" onClick={() => {this.completeTask(task)}}>
                Complete
            </button>
        )
    }
}
