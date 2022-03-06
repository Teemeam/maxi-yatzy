import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Components */
import { ResetButton } from './../ResetButton/index.jsx';
import { ShowLoadSaveButton } from './../ShowLoadSaveButton/index.jsx';
import { LoadDataButton } from './../LoadDataButton/index.jsx';
import { SaveScoreButton } from './../SaveScoreButton/index.jsx';

/* Styles */
import * as s from './index.styled.js';

export const GameMenu = (props) => {
  const { data, handleLoad, handleRequest, resetRequested, resetGame } = props;

  const [showLoadSaveMenu, setShowLoadSaveMenu] = useState(false);

  function handleLoadSaveMenu() {
    if (showLoadSaveMenu) {
      setShowLoadSaveMenu(false);
    } else {
      setShowLoadSaveMenu(true);
    }
  }

  return (<s.Container>
    {/* Reset data */}
    <ResetButton resetRequested={ resetRequested } handleRequest={ handleRequest } resetGame={ resetGame }/>
    
    <ShowLoadSaveButton showLoadSaveMenu={ showLoadSaveMenu } handleLoadSaveMenu={ handleLoadSaveMenu }/>

    {/* Load data */}
    { showLoadSaveMenu && (
      <LoadDataButton handleLoad={ handleLoad }/>
    )}

    {/* Save data */}
    { showLoadSaveMenu && (
      <SaveScoreButton data={ data } />
    )}
  </s.Container>);
};

GameMenu.propTypes = {
  data: PropTypes.object.isRequired,
  handleLoad: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  resetRequested: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
}