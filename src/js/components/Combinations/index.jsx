import React, { useState } from 'react';

/* Styles */
import * as s from './index.styled.js';

const Combinations = (props) => {
  return (<s.Container>
    <table>
      <tbody>
        <tr>
          <td>Ones</td>
        </tr>
        <tr>
          <td>Twos</td>
        </tr>
        <tr>
          <td>Threes</td>
        </tr>
        <tr>
          <td>Fours</td>
        </tr>
        <tr>
          <td>Fives</td>
        </tr>
        <tr>
          <td>Sixes</td>
        </tr>
      </tbody>
    </table>
  </s.Container>);
};

export default Combinations;