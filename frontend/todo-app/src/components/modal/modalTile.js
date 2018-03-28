import React, { Component } from 'react';

class ModalTile extends Component {
  constructor(props) {
    super(props);
    this._handleDeleted = this._handleDeleted.bind(this);
  }

  _handleDeleted = id => {
    this.props.handleDeleted(id);
  }

  render() {

    return (
      <div className="modal fade" id="modalTodo" tabIndex="-1" role="dialog" aria-labelledby="todo" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="todo">Eliminate to-do</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ¿Are you sure to delete the to-do?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this._handleDeleted()}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalTile;
