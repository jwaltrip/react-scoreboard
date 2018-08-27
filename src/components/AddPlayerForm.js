import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  // these MUST be arrow functions in order to automatically bind 'this'
  onNameChange = (e) => {
    const newName = e.target.value;
    this.setState({ name: newName });
  };

  // these MUST be arrow functions in order to automatically bind 'this'
  onSubmit = (e) => {
    e.preventDefault();

    const name = this.state.name;
    this.props.onAdd(name);
    // reset new player name entry form back to empty string
    this.setState({ "name": "" });
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddPlayerForm;