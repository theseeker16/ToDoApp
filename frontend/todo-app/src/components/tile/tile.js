import React, { Component } from 'react';
import './tile.css';
import todoImg from '../../../src/todo.png';
import ModalTile from '../../components/modal/modalTile'
class Tile extends Component {
  constructor(props) {
    super(props);
    this._handleDeleted = this._handleDeleted.bind(this);
    this.state ={
      idTodo: ''
    }
  }

  _handleDeleted = id => {
    this.props.handleDeleted(id);
  }

  render() {

    if (this.props.todos.length === 0) {
      return <div className="empyList"><h1><img src={todoImg} alt="" />To-do list empty</h1></div>
    }
    return (

      <div className="tile_container">
        {this.props.todos.map((todo, key) =>
          <li key={key}>
            <ModalTile  handleDeleted={() => this._handleDeleted(todo._id)} />
            <div className="tile">
              <button type="button"
                className="close"
                aria-label="Close"
                data-toggle="modal"
                data-target="#modalTodo">
                <span aria-hidden="true">&times;</span>
              </button>

              <div className="tile_title">

                {todo.title}
              </div>
              <div className="tile_description">
                <div>
                  {todo.description}
                </div>
                <div>
                  {todo.todoDate}
                </div>
              </div>
            </div>
          </li>
        )}
      </div>
    );
  }
}

export default Tile;

