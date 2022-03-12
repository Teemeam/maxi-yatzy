import React from 'react';
import styled from '@emotion/styled';

/* Components */
import { GameLogo } from './GameLogo/index.jsx';
import { ScoreCard } from './ScoreCard/index.jsx';
import { Footer } from './Footer/index.jsx';

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
      <Footer/>
    </AppContainer>
  );
};

export default App;
