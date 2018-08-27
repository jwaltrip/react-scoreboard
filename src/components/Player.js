import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

// Player component
// const Player = (props) => {
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinner: false
    };
    this.pollInterval = null;
  }

  // returns a winner tag Component
  checkIsWinner = () => {
    // conditional logic to detect if this Player is current winner
    const currentWinnerId = this.props.winner.id;
    const currentId = this.props.id;

    console.log(`currentWinnerID: ${currentWinnerId} || currentId: ${currentId}`);

    // TODO check if there's a tie

    // const allPlayers = this.props.allPlayers;
    // allPlayers.forEach((player, idx) => {
    //
    // });

    if (currentWinnerId === currentId) {
      const newState = {...this.state};
      newState.isWinner = true;
      console.log(newState);
      this.setState(newState);
    } else {
      const newState = {...this.state};
      newState.isWinner = false;
      console.log(newState);
      this.setState(newState);
    }
  };

  setWinnerTag = () => {

  };

  componentDidMount() {
    // this.loadCommentsFromServer();
    // poll backend server for comments every 2 seconds
    if (!this.pollInterval) {
      this.pollInterval = setInterval(()=> this.checkIsWinner(), 500);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  render() {
    // check if current player is winner, then display winner tag
    let winnerTag;
    if (this.state.isWinner) {
      winnerTag = <div className="winner-tag">WINNING!</div>;
    } else {
      winnerTag = <div> </div>;
    }

    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={this.props.onRemove}>✖</a>
          {this.props.name}
        </div>
        {winnerTag}
        <div className="player-score">
          <Counter score={this.props.score} onChange={this.props.onScoreChange} />
        </div>
      </div>
    );
  }

}

// Player propTypes
Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Player;