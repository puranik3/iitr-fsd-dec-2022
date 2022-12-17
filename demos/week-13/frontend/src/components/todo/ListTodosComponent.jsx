import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService.js";
import moment from "moment";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            message: null,
        };

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username).then((response) => {
            this.setState({ todos: response.data });
        });
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.deleteTodo(username, id).then((response) => {
            this.setState({ message: `Delete of todo ${id} Successful` });
            this.refreshTodos();
        });
    }

    addTodoClicked() {
        this.props.navigate(`/todos/-1`);
    }

    updateTodoClicked(id) {
        this.props.navigate(`/todos/${id}`);
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>List Of Todo Items</h1>
                <div>***********</div>
                {this.state.message && (
                    <div class="alert alert-success">{this.state.message}</div>
                )}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map((todo) => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>
                                        {moment(todo.targetDate).format(
                                            "YYYY-MM-DD"
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-success"
                                            onClick={() =>
                                                this.updateTodoClicked(todo.id)
                                            }
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-warning"
                                            onClick={() =>
                                                this.deleteTodoClicked(todo.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="row">
                        <button
                            className="btn btn-success"
                            onClick={this.addTodoClicked}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;
