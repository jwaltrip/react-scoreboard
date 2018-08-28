import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

/*
List of components used:

  [x] App - stateful
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
          score: 23,
          id: 1
        },
        {
          name: "Alex Trebek",
          score: 34,
          id: 2
        },
        {
          name: "Wayne Brady",
          score: 36,
          id: 3
        },
      ],

      winners: [
        {
          name: "",
          id: 0,
          score: 0
        }
      ]
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    if (!this.pollInterval) {
      this.pollInterval = setInterval(()=> this.updateWinner(), 100);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  updateWinner = () => {
    const newState = {...this.state};
    const players = newState.players;
    const winners = newState.winners;

    /* WHITEBOARD

      * Need to loop thru players arr, and find object with highest score (note it's: score & id)
      * Then check to see if any other players have an equal score (meaning a tie) - (note it's: score & id)
      * create an object with the player(s) with the highest score
      * set this object containing the player(s) with the highest score = winners

    */

    // get the highest score of players - using reduce
    const maxScore = players.reduce((prev, current) => {
      return (prev.score > current.score) ? prev : current;
    }).score;

    // get the maxScore player id
    let maxScoreId = null;
    let maxScoreIndex = null;
    players.forEach((player, idx) => {
      if (player.score === maxScore) {
        maxScoreId = player.id;
        maxScoreIndex = idx;
      }
    });

    // check to see if any other players === maxScore
    const areThereTies = players.filter(player => {
      return (player.score === maxScore);
    });

    // create newWinners state var
    const newWinners = [];

    // loop over areThereTies array, and add each object to newWinners
    areThereTies.forEach(player => {
      newWinners.push(player);
    });

    // setState of winners to newWinners
    newState.winners = newWinners;
    this.setState(newState);
  };

  // these MUST be arrow functions in order to automatically bind 'this'
  onScoreChange = (index, delta) => {
    // console.log('onScoreChange', index, delta);

    const newState = {...this.state};
    newState.players[index].score += delta;

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
                winners={this.state.winners}
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
