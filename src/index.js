import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import InitialData from './DATA'; // initial scoreboard data + global var to keep track of ID's

ReactDOM.render(<App initialPlayers={InitialData.PLAYERS} />, document.getElementById('root'));
registerServiceWorker();
