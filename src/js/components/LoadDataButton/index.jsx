import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const LoadDataButton = (props) => {
  const { handleLoad } = props;

  const loadDataInput = useRef();

  return (<s.Container>
    <input ref={ loadDataInput } type='text' maxLength={ 1000 } defaultValue='Game data'/>
    <button onClick={ () => handleLoad(loadDataInput.current?.value) }>Load game</button>
  </s.Container>);
};

LoadDataButton.propTypes = {
  handleLoad: PropTypes.func.isRequired,
}