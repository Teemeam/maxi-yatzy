import React, { useState } from 'react';
import styled from '@emotion/styled';

/* Components */
import PlayerInfo from './PlayerInfo/index.jsx';
import ScoreCard from './ScoreCard/index.jsx';

/* Styles */
const AppContainer = styled.div`
  /* */
`;

const App = (props) => {
  const [playerCount, setPlayerCount] = useState(0);
  const [players, setPlayers] = useState([
    { playerId: 0, name: '' },
    { playerId: 1, name: '' },
    { playerId: 2, name: '' },
    { playerId: 3, name: '' }
  ]);
  const [scores, setScores] = useState([
    { playerId: 0, a: 0, b: 0, c: 0 },
    { playerId: 1, a: 0, b: 0, c: 0 },
    { playerId: 2, a: 0, b: 0, c: 0 },
    { playerId: 3, a: 0, b: 0, c: 0 }
  ]);

  function handlePlayers(name, playerId) {
    console.log(name, playerId);
  }

  return (
    <AppContainer>
      <PlayerInfo
        handlePlayers={ handlePlayers }>
      </PlayerInfo>
      <ScoreCard/>
    </AppContainer>
  );
};

export default App;
