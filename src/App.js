import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import InitialData from './DATA';
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: "Jake Waltrip",
          score: 31,
          id: 1,
        },
        {
          name: "Laurie Hansson",
          score: 100,
          id: 2,
        },
        {
          name: "Bob Saget",
          score: 150,
          id: 3,
        },
      ]
    };

    // this.onScoreChange = this.onScoreChange.bind(this);
    // this.onPlayerAdd = this.onPlayerAdd.bind(this);
    // this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }

  onScoreChange = (index, delta) => {
    console.log('onScoreChange', index, delta);
    // TODO refactor this to create a new state, then set state (rather than modify old state and update)
    //refactor
    let newState = [...this.state.players];
    newState[index].score += delta;
    // let newScore = this.state.players[index].score;
    // newScore += delta;
    // this.state.players[index].score += delta;
    this.setState({ newState });
  };

  onPlayerAdd = (name) => {
    console.log('Player added', name);
    // TODO refactor this to create a new state, then set state (rather than modify old state and update
    this.state.players.push({
      name: name,
      score: 0,
      id: InitialData.nextId
    });

    // refactor of update state
    // const oldPlayers = this.state.players;
    // const newPlayers = oldPlayers.push({
    //   name: name,
    //   score: 0,
    //   id: InitialData.nextId
    // });

    InitialData.nextId += 1;
    this.setState(this.state);
    // this.setState({ players: newPlayers });
  };

  onRemovePlayer = (index) => {
    console.log('Remove player', index);
    // TODO refactor this to create a new state, then set state (rather than modify old state and update
    // remove the index of the player clicked
    this.state.players.splice(index, 1);
    this.setState(this.state);
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
  title: PropTypes.string,
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequred,
    id: PropTypes.number.isRequred,
  })).isRequired
};

App.defaultProps = {
  title: "Scoreboard"
};

export default App;
