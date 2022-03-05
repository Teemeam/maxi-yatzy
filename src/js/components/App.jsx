import React from 'react';
import styled from '@emotion/styled';

/* Components */
import { GameLogo } from './GameLogo/index.jsx';
import { ScoreCard } from './ScoreCard/index.jsx';

/* Styles */
const AppContainer = styled.div`
  position: relative;
  width: 100%;
`;

const App = (props) => {
  return (
    <AppContainer>
      <GameLogo/>
      <ScoreCard/>
    </AppContainer>
  );
};

export default App;
