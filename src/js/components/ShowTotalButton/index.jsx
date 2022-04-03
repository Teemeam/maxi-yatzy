import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';
import { Button } from './../Button/index.styled.js';

export const ShowTotalButton = (props) => {
  const { showTotal, handleShowTotal } = props;

  return (<s.Container>
    <Button showTotal={ showTotal } onClick={ handleShowTotal }>Show total</Button>
  </s.Container>);
};

ShowTotalButton.propTypes = {
  showTotal: PropTypes.bool.isRequired,
  handleShowTotal: PropTypes.func.isRequired,
}