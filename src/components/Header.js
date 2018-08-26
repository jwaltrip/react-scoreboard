import PropTypes from 'prop-types';
// need to import Stats component

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