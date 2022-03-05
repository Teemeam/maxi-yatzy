import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import { LoadDataButton } from './../LoadDataButton/index.jsx';
import { SaveScoreButton } from './../SaveScoreButton/index.jsx';

/* Styles */
import * as s from './index.styled.js';

export const GameMenu = (props) => {
  const { data, handleLoad, handleRequest, resetRequested, resetGame } = props;

  return (<s.Container>
    {/* Load data */}
    <LoadDataButton handleLoad={ handleLoad }/>

    {/* Reset data */}
    { resetRequested ?
      <>
        <button onClick={ handleRequest }>Keep playing</button>
        <button onClick={ resetGame }>Reset game</button>
      </> :
        <button onClick={ handleRequest }>Reset game</button> }
    
    {/* Save data */}
    <SaveScoreButton data={ data } />
  </s.Container>);
};

GameMenu.propTypes = {
  data: PropTypes.object.isRequired,
  handleLoad: PropTypes.func.isRequired,
  handleRequest: PropTypes.func.isRequired,
  resetRequested: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
}