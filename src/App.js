import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

/*
List of components used:

  [] App - stateful
  [x] Header - stateless
  [x] Stats - stateless
  [x] Player - stateless
  [x] Counter - stateless
  [x] AddPlayerForm - stateful

 */

// TODO add a highlight marker of some type to point out the winning player

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: "Jake Waltrip",
          score: 23,
          id: 1
        },
        {
          name: "Alex Trebek",
          score: 31,
          id: 2
        },
        {
          name: "Wayne Brady",
          score: 35,
          id: 3
        },
      ],

      winner: {
        id: 3,
        score: 35,
        playerArrIndex: 3
      }


    };
  }

  updateWinnerBadge = (index) => {
    const newState = {...this.state};

    // update this.winnerId
    const updatedScore = newState.players[index].score;
    const currentWinnerId = newState.winner.id;
    const currentWinnerScore = newState.winner.score;
    const currentWinnerArrIdx = newState.winner.playerArrIndex;

    let newWinnerId = currentWinnerId;
    let newWinnerScore = currentWinnerScore;
    let newWinnerArrIdx = currentWinnerArrIdx;

    let playerHighestScore = currentWinnerScore;
    // get highest score player
    newState.players.forEach((player, idx) => {
      if (updatedScore >= currentWinnerScore && index === idx) {
        newWinnerId = player.id;
        newWinnerScore = player.score;
        newWinnerArrIdx = idx;
      }
    });

    newState.winner.id = newWinnerId;
    newState.winner.score = newWinnerScore;
    newState.winner.playerArrIndex = newWinnerArrIdx;

    this.setState(newState);
  };

  // these MUST be arrow functions in order to automatically bind 'this'
  onScoreChange = (index, delta) => {
    // console.log('onScoreChange', index, delta);

    const newState = {...this.state};
    newState.players[index].score += delta;

    this.updateWinnerBadge(index);

    this.setState(newState);
  };

  // these MUST be arrow functions in order to automatically bind 'this'
  onPlayerAdd = (name) => {
    // console.log('Player added', name);

    const newState = {...this.state};
    newState.players.push({
      name: name,
      score: 0,
      id: Date.now().toString()
    });

    this.setState(newState);
  };

  // these MUST be arrow functions in order to automatically bind 'this'
  onRemovePlayer = (index) => {
    // console.log('Remove player', index);

    const newState = {...this.state};
    newState.players.splice(index, 1);
    this.setState(newState);
  };

  render() {
    return (
      <div className="scoreboard">
        {/* title is from default props*/}
        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onRemove={()=> {this.onRemovePlayer(index)}}
                onScoreChange={(delta)=> {this.onScoreChange(index, delta)}}
                name={player.name}
                score={player.score}
                winner={this.state.winner}
                allPlayers={this.state.players}
                id={player.id}
                key={player.id}
              />
            );
          })}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

App.defaultProps = {
  title: "Scoreboard"
};

export default App;
