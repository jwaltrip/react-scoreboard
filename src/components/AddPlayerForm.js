import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
  onNameChange(e) {
    console.log('onNameChange', e.target.value);
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onAdd(this.state.name);
    this.setState({ "name": "" });
  }

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

AddPlayerForm.defaultProps = {
  name: ""
};

export default AddPlayerForm;