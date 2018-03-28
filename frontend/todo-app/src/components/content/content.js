import React, { Component } from 'react';

import './content.css'
import Todo from '../../containers/to-do/todo'
class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Todo />
      </div>

    );
  }
}

export default Content;