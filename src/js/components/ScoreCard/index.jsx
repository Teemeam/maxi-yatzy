import React, { useState } from 'react';

/* Components */
import PlayerNames from './../PlayerNames/index.jsx';
import Combinations from './../Combinations/index.jsx';
import Player1 from './../Player1/index.jsx';
import Player2 from './../Player2/index.jsx';
import Player3 from './../Player3/index.jsx';
import Player4 from './../Player4/index.jsx';

/* Styles */
import * as s from './index.styled.js';

const ScoreCard = (props) => {
  const [playerCount, setPlayerCount] = useState(0);

  return (<s.Container>
    <PlayerNames/>
    <div className='tbody-wrapper'>
      <Combinations/>
      <Player1/>
      <Player2/>
      <Player3/>
      <Player4/>
    </div>
  </s.Container>);
};

export default ScoreCard;