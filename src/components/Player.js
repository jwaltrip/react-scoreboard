import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

// Player component
const Player = (props) => {
  // conditional logic to detect if this Player is current winner
  const currentWinnerId = props.winner.id;
  const currentId = props.id;
  const currentArrIdx = props.winner.playerArrIndex;
  let winnerTag;

  if (currentWinnerId === currentId) {
    winnerTag = <div className="winner-tag">WINNING!</div>;
  }

  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>✖</a>
        {props.name}
      </div>
      {winnerTag}
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
};

// Player propTypes
Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Player;