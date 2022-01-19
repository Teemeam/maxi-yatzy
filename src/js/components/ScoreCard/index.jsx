import React, { useState } from 'react';

/* Components */
import Column from './../Column/index.jsx';

/* Styles */
import * as s from './index.styled.js';

const ScoreCard = (props) => {
  const [playerCount, setPlayerCount] = useState(0);

  return (<s.Container>
    <h1>Toimii!</h1>
  </s.Container>);
};

export default ScoreCard;