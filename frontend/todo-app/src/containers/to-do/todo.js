import React, { Component } from 'react';
import './todo.css'
import { connect } from 'react-redux'
import Notifications, { notify } from 'react-notify-toast';
//Components
import Tile from '../../components/tile/tile';
//Actions
import { createTodo, getTodos, deleteTodo } from '../../actions/todoActions'


class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todo: {
        title: '',
        description: '',
        todoDate: '',
      },
      count: 0,
      color: "",
      error: false
    }
    this.handleWordCount = this.handleWordCount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  //Send the data form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state.todo).then(response => {
      if (response.type !== "CREATE_TODO_FAILURE") {
        console.log(this.inputTitle)
        this.inputTitle.value = '';
        this.inputDescription.value = '';
        this.inputTodoDate.value = '';
        notify.show("To-do has been added", "success", 3000);
      }
    })

  }

  //get the values from the inputs
  handleChange = (e) => {
    const field = e.target.name;
    const todos = this.state.todo;
    todos[field] = e.target.value;
  }

  //Count the words inside the textarea
  handleWordCount = (e) => {
    const field = e.target.name;
    const todos = this.state.todo;
    todos[field] = e.target.value;
    if (todos[field].length >= 0) {
      this.setState({ count: todos[field].length })
    }
    if (todos[field].length > 200) {
      this.setState({ color: "#FF0000" })
    } else {
      this.setState({ color: "#fff" })
    }
  }
  _handleDeleted = id => {
    this.props.deleteTodo(id);
    notify.show("To-do has been eliminated", "success", 3000);
  }

  render() {
    return (
      <div className="container">
        <Notifications />
        {this.props.todos.isError && <div className="error-message">
          <strong>{this.props.todos.error.response.data.message || this.props.todos.error.message}</strong>
        </div>}
        <div className="wrapper">
          <div className="todo-form">
            <h1 className="title">Create a to-do</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="title" className="col-2 col-form-label">Title</label>
                <div className="col-10">
                  <input
                    ref={el => this.inputTitle = el}
                    type="text"
                    value={this.state.title}
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Enter a title"
                    onChange={this.handleChange} required="true"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="description" className="col-2 col-form-label">Description</label>
                <div className="col-10">
                  <textarea
                    ref={el => this.inputDescription = el}
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Enter a description"
                    rows="3"
                    onChange={this.handleWordCount}
                    required></textarea>
                  <small className="count" id="description">
                    <strong style={{ color: this.state.color }}>{this.state.count}</strong>/200
                  </small>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="todoDate" className="col-2 col-form-label">Date</label>
                <div className="col-10">
                  <input className="form-control"
                    ref={el => this.inputTodoDate = el}
                    type="date"
                    data-date-format="DD MMMM YYYY"
                    id="todoDate"
                    name="todoDate"
                    onChange={this.handleChange} />
                </div>
              </div>
              <button type="submit"
                className="btn btn-primary float-right"
                onClick={this.handleSubmit}>Guardar</button>
            </form>
          </div>
          <div className="container-bottom">
            <h1 className="title_bottom">To-do list</h1>
            <div className="row">
              <div className="col-12">
                {this.props.todos.isLoading && <div className="loader"></div>}
                {this.props.todos.data.map((todo, index) => (
                  <Tile key={index} {...todo} handleDeleted={this._handleDeleted.bind(this)} isLoading={this.props.isLoading} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default connect(
  state => ({
    todos: state.todo
  }),
  { createTodo, getTodos, deleteTodo }
)(Todo);

