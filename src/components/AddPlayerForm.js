import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  // onNameChange(e) {
  //   // console.log('onNameChange', e.target.value);
  //   this.setState({ name: e.target.value });
  // }

  onNameChange = (e) => {
    const newText = e.target.value;
    this.setState({ name: newText });
  };

  onSubmit = (e) => {
    const name = this.state.name;

    e.preventDefault();
    this.props.onAdd(name);
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

AddPlayerForm.defaultProps = {
  name: ""
};

export default AddPlayerForm;