import React, { Component } from 'react';
import PropTypes from 'prop-types';

// contains the text input and submit button at bottom of scoreboard
// the text of the input field is handled by the state
class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  // these MUST be arrow functions in order to automatically bind 'this'
  // this is called anytime text is changed inside the text input
  // and updates the state with the new text input value
  onNameChange = (e) => {
    const newName = e.target.value;
    this.setState({ name: newName });
  };

  // these MUST be arrow functions in order to automatically bind 'this'
  // this handles the submit of the new name to be added to the players list
  // and resets the text input state back to empty
  onSubmit = (e) => {
    e.preventDefault();

    // get current state of text input
    const name = this.state.name;
    // callback function to add the player in a parent component
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