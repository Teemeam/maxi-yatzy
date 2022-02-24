import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const GameMenu = (props) => {
  const { handleRequest, resetRequested, resetGame } = props;

  return (<s.Container>
    { resetRequested ?
      <>
        <button onClick={ handleRequest }>Keep playing</button>
        <button onClick={ resetGame }>Reset game</button>
      </> :
        <button onClick={ handleRequest }>Reset game</button> }
  </s.Container>);
};

GameMenu.propTypes = {
  handleRequest: PropTypes.func.isRequired,
  resetRequested: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
}