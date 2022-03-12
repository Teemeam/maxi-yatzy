import React from 'react';

/* Styles */
import * as s from './index.styled.js';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (<s.Container>
    <p className='copyright'><a href='https://kakkoteemu.fi/' target='_blank'>&copy; { year }</a></p>
  </s.Container>);
};