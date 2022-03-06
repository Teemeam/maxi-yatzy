import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';
import { Button } from './../Button/index.styled.js';

export const LoadDataButton = (props) => {
  const { handleLoad } = props;

  const loadDataInput = useRef();

  return (<s.Container>
    <div className='input-wrapper'>
      <input ref={ loadDataInput } type='text' maxLength={ 1000 } defaultValue='Paste game data...'/>
    </div>
    <div className='button-wrapper'>
      <Button loadDataButton onClick={ () => handleLoad(loadDataInput.current?.value) }>Load game</Button>
    </div>
  </s.Container>);
};

LoadDataButton.propTypes = {
  handleLoad: PropTypes.func.isRequired,
}