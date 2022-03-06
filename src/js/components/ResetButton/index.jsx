import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';
import { Button } from './../Button/index.styled.js';

export const ResetButton = (props) => {
  const { resetRequested, handleRequest, resetGame } = props;

  return (<s.Container>
    { resetRequested ?
      <>
        <div>
          <Button resetButton onClick={ handleRequest }>Keep playing</Button>
        </div>
        <div>
          <Button resetButton onClick={ resetGame }>Reset game</Button>
        </div>
      </> :
        <>
          <div>
            <Button resetButton onClick={ handleRequest }>Reset game</Button> 
          </div>
        </> }
  </s.Container>);
};

ResetButton.propTypes = {
  resetRequested: PropTypes.bool.isRequired,
  handleRequest: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
}