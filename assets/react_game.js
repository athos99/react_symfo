import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/react_game.scss';


import React from 'react';
import ReactDOM from 'react-dom/client';
import MorpGame from './components/MorpGame';

console.log('run react_game.js');

const root = ReactDOM.createRoot(document.getElementById("react-game"));
root.render(<MorpGame />);

