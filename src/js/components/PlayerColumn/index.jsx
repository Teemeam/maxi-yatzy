import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const PlayerColumn = (props) => {
  const { playerCount, player, upperTotal, bonus, total, updateScore } = props;

  return (<s.Container playerCount={ playerCount }>
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
              onChange={ e => updateScore(player, 0, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='twos'
              min='1'
              max='12'
              defaultValue='0'
              onChange={ e => updateScore(player, 1, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='threes'
              min='1'
              max='18'
              defaultValue='0'
              onChange={ e => updateScore(player, 2, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='fours'
              min='1'
              max='24'
              defaultValue='0'
              onChange={ e => updateScore(player, 3, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='fives'
              min='1'
              max='30'
              defaultValue='0'
              onChange={ e => updateScore(player, 4, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='sixes'
              min='1'
              max='36'
              defaultValue='0'
              onChange={ e => updateScore(player, 5, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            { upperTotal }
          </td>
        </tr>
        <tr>
          <td>
            { bonus === 50 ? 50 : '-' }
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='pair'
              min='1'
              max='36'
              defaultValue='0'
              onChange={ e => updateScore(player, 6, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='two-pairs'
              min='1'
              max='22'
              defaultValue='0'
              onChange={ e => updateScore(player, 7, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='three-pairs'
              min='1'
              max='30'
              defaultValue='0'
              onChange={ e => updateScore(player, 8, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='three-of-a-kind'
              min='1'
              max='18'
              defaultValue='0'
              onChange={ e => updateScore(player, 9, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='four-of-a-kind'
              min='1'
              max='24'
              defaultValue='0'
              onChange={ e => updateScore(player, 10, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='five-of-a-kind'
              min='1'
              max='30'
              defaultValue='0'
              onChange={ e => updateScore(player, 11, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='small-straight'
              min='1'
              max='15'
              defaultValue='0'
              onChange={ e => updateScore(player, 12, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='large-straight'
              min='1'
              max='20'
              defaultValue='0'
              onChange={ e => updateScore(player, 13, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='full-straight'
              min='1'
              max='21'
              defaultValue='0'
              onChange={ e => updateScore(player, 14, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='full-house'
              min='1'
              max='27'
              defaultValue='0'
              onChange={ e => updateScore(player, 15, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='castle'
              min='1'
              max='33'
              defaultValue='0'
              onChange={ e => updateScore(player, 16, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='tower'
              min='1'
              max='34'
              defaultValue='0'
              onChange={ e => updateScore(player, 17, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='chance'
              min='1'
              max='36'
              defaultValue='0'
              onChange={ e => updateScore(player, 18, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='number'
              className='maxi-yatzy'
              min='1'
              max='100'
              defaultValue='0'
              onChange={ e => updateScore(player, 19, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            { total }
          </td>
        </tr>
      </tbody>
    </table>
  </s.Container>);
};

PlayerColumn.propTypes = {
  playerCount: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
  upperTotal: PropTypes.number.isRequired,
  bonus: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
}