import React from 'react';
import PropTypes from 'prop-types';

// Stats component
const Stats = (props) => {
  // calculate total num of players and sum their point total
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalPoints}</td>
      </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.array.isRequired
};

export default Stats;