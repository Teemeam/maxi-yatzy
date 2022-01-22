import React, { useState } from 'react';

/* Styles */
import * as s from './index.styled.js';

const Player1 = (props) => {
  const [score, setScore] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  /* Update score */
  function handleChange(value, i) {
    let newArr = [...score];
    if (value) {
      newArr[i] = parseInt(value);
    } else {
      newArr[i] = 0;
    }
    setScore(newArr);
    console.log(newArr);
  }

  return (<s.Container>
    <table>
      <tbody>
        <tr>
          <td>
            <input
              type='number'
              className='ones'
              min='1'
              max='6'
              defaultValue='0'
              onChange={ e => handleChange(e.target.value, 0) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='twos'
              min='1'
              max='6'
              defaultValue='0'
              onChange={ e => handleChange(e.target.value, 1) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='threes'
              min='1'
              max='6'
              defaultValue='0'
              onChange={ e => handleChange(e.target.value, 2) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='fours'
              min='1'
              max='6'
              defaultValue='0'
              onChange={ e => handleChange(e.target.value, 3) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='fives'
              min='1'
              max='6'
              defaultValue='0'
              onChange={ e => handleChange(e.target.value, 4) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='sixes'
              min='1'
              max='6'
              defaultValue='0'
              onChange={ e => handleChange(e.target.value, 5) }/>
          </td>
        </tr>
      </tbody>
    </table>
  </s.Container>);
};

export default Player1;