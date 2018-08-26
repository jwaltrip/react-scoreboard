import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './DATA';
import Header from "./components/Header";
import Player from "./components/Player";

/*
List of components used:

  [] App - stateful
  [x] Header - stateless
  [x] Stats - stateless
  [x] Player - stateless
  [x] Counter - stateless
  [] AddPlayerForm - stateful

 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers
    };
  }

  onScoreChange(index, delta) {
    console.log('onScoreChange', index, delta);
    // TODO refactor this to create a new state, then set state (rather than modify old state and update)
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    console.log('Player added', name);
    // TODO refactor this to create a new state, then set state (rather than modify old state and update
    this.state.players.push({
      name: name,
      score: 0,
      id: nextId
    });
    nextId += 1;
    this.setState(this.state);
  }

  onRemovePlayer(index) {
    console.log('Remove player', index);
    // TODO refactor this to create a new state, then set state (rather than modify old state and update
    // remove the index of the player clicked
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="scoreboard">
        // title is from default props
        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player
                onRemove={()=> {this.onRemovePlayer(index).bind(this)}}
                onScoreChange={(delta)=> {this.onScoreChange(index, delta).bind(this)}}
                name={player.name}
                score={player.score}
                key={player.id}
              />
            );
          }).bind(this)}
        </div>
        // TODO add AddPlayerForm component
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
