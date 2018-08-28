import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

// Player component
class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWinner: false
    };
    this.pollInterval = null;
  }

  checkIsWinner = () => {

    /* WHITEBOARD

      * get array of current winners
      * get id of current player component
      * loop over winners array, and see if current player is in array
      * if player is in array, then set this.isWinner = true

     */
    const newState = {...this.state};

    const winnersArr = this.props.winners;
    const instanceId = this.props.id;

    let isWinner = false;
    winnersArr.forEach(winner => {
      if (winner.id === instanceId) {
        isWinner = true;
      }
    });

    newState.isWinner = isWinner;
    this.setState(newState);

  };

  componentDidMount() {
    if (!this.pollInterval) {
      this.pollInterval = setInterval(()=> this.checkIsWinner(), 250);
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