import React from 'react';

/* Styles */
import * as s from './index.styled.js';

export const Footer = () => {
  return (<s.Container>
    <p className='copyright'><a href='https://kakkoteemu.fi/' target='_blank'>&copy; 2022</a></p>
  </s.Container>);
};