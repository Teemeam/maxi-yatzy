import React, { useState } from 'react';
import styled from '@emotion/styled';

/* Components */
import { Notification } from './Notification/index.jsx';
import { GameLogo } from './GameLogo/index.jsx';
import { ScoreCard } from './ScoreCard/index.jsx';
import { Footer } from './Footer/index.jsx';

/* Styles */
const AppContainer = styled.div`
  position: relative;
  width: 100%;
`;

const App = (props) => {
  const [showNotification, setShowNotification] = useState(false);

  /* Toggle pop from top notification */
  function handleNotification() {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }

  return (
    <AppContainer>
      <Notification showNotification={ showNotification }/>
      <GameLogo/>
      <ScoreCard handleNotification={ handleNotification }/>
      <Footer/>
    </AppContainer>
  );
};

export default App;
