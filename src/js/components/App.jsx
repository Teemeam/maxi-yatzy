import React from 'react';
import styled from '@emotion/styled';

/* Components */
import ScoreCard from './ScoreCard/index.jsx';

/* Styles */
const AppContainer = styled.div`
  /* */
`;

const App = (props) => {
  return (
    <AppContainer>
      <ScoreCard/>
    </AppContainer>
  );
};

export default App;
