import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

// Header component
const Header = (props) => {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>{props.title}</h1>
    </div>
  );
};

// Header propTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};

export default Header;