import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';
import { Button } from './../Button/index.styled.js';

export const ShowLoadSaveButton = (props) => {
  const { showLoadSaveMenu, handleLoadSaveMenu } = props;

  return (<s.Container>
    <Button showLoadSaveMenu={ showLoadSaveMenu } onClick={ handleLoadSaveMenu }>Show load and save buttons</Button>
  </s.Container>);
};

ShowLoadSaveButton.propTypes = {
  showLoadSaveMenu: PropTypes.bool.isRequired,
  handleLoadSaveMenu: PropTypes.func.isRequired,
}