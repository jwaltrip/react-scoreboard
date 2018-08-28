import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

// Player component
// holds state determining whether current player instance is winning or not (including a tie)
// contains the Counter component
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinner: false
    };
    this.pollInterval = null;
  }

  // life cycle method - on mount, checks to see if current player instance is a winner, and sets state (every 0.25sec)
  componentDidMount() {
    if (!this.pollInterval) {
      this.pollInterval = setInterval(()=> this.updateIsWinnerState(), 250);
    }
  }

  // life cycle method - on dismount, remove the interval updating the state
  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  // updates the current state and checks whether or not current player instance is winning or tied
  // this func is called on an interval in the life cycle methods
  updateIsWinnerState = () => {

    /* WHITEBOARD

      * get array of current winners
      * get id of current player component
      * loop over winners array, and see if current player is in array
      * if player is in array, then set this.isWinner = true
      * update state

     */

    // create newState obj
    const newState = {...this.state};

    // array of current winning players
    const winnersArr = this.props.winners;
    // id of current player instance
    const instanceId = this.props.id;

    // loop over each winning player, and check and see if current instance is a winning instance
    let isWinner = false;
    winnersArr.forEach(winner => {
      if (winner.id === instanceId) {
        isWinner = true;
      }
    });

    // update this.state.isWinner with new value
    newState.isWinner = isWinner;
    // set newState
    this.setState(newState);
  };

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
  winners: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Player;