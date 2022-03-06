import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const GameLogo = (props) => {
  return (<s.Container>
    <div className='outer-logo-wrapper'>
      <div className='inner-logo-wrapper'>
        <h1>maxi yatzy</h1>
      </div>
    </div>
  </s.Container>);
};

GameLogo.propTypes = {
  //
}