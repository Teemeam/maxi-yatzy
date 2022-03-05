import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const Combinations = (props) => {
  const { playerCount } = props;

  return (<s.Container playerCount={ playerCount }>
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
        <tr>
          <td className='upper-total'>TOTAL</td>
        </tr>
        <tr>
          <td className='bonus'>Bonus</td>
        </tr>
        <tr>
          <td>Pair</td>
        </tr>
        <tr>
          <td>Two pairs</td>
        </tr>
        <tr>
          <td>Three pairs</td>
        </tr>
        <tr>
          <td>Three of a kind</td>
        </tr>
        <tr>
          <td>Four of a kind</td>
        </tr>
        <tr>
          <td>Five of a kind</td>
        </tr>
        <tr>
          <td>Small straight</td>
        </tr>
        <tr>
          <td>Large straight</td>
        </tr>
        <tr>
          <td>Full straight</td>
        </tr>
        <tr>
          <td>Full house</td>
        </tr>
        <tr>
          <td>Castle</td>
        </tr>
        <tr>
          <td>Tower</td>
        </tr>
        <tr>
          <td>Chance</td>
        </tr>
        <tr>
          <td>Maxi Yatzy</td>
        </tr>
        <tr>
          <td className='total'>TOTAL</td>
        </tr>
      </tbody>
    </table>
  </s.Container>);
};

Combinations.propTypes = {
  playerCount: PropTypes.number.isRequired,
}