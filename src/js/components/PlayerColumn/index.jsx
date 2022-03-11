import React from 'react';
import PropTypes from 'prop-types';
import { upperPartReady } from './../../lib/playerReady.js';

/* Styles */
import * as s from './index.styled.js';

export const PlayerColumn = (props) => {
  const { playerCount, data, player, upperTotal, bonus, total, updateScore } = props;

  return (<s.Container playerCount={ playerCount }>
    <table>
      <tbody>
        <tr>
          <td className='ones'>
            <input
              type='text'
              className={ 'ones' + (data[player].score[0] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[0] === 0 ? '' : data[player].score[0] }
              onChange={ e => updateScore(player, 0, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'twos' + (data[player].score[1] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[1] === 0 ? '' : data[player].score[1] }
              onChange={ e => updateScore(player, 1, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'threes' + (data[player].score[2] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[2] === 0 ? '' : data[player].score[2] }
              onChange={ e => updateScore(player, 2, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'fours' + (data[player].score[3] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[3] === 0 ? '' : data[player].score[3] }
              onChange={ e => updateScore(player, 3, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'fives' + (data[player].score[4] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[4] === 0 ? '' : data[player].score[4] }
              onChange={ e => updateScore(player, 4, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'sixes' + (data[player].score[5] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[5] === 0 ? '' : data[player].score[5] }
              onChange={ e => updateScore(player, 5, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td className='upper-total'>
            { upperTotal === 0 ? '' : upperTotal }
          </td>
        </tr>
        <tr>
          <td className={ 'bonus' + (upperPartReady(data[player].score) && bonus === 0 ? ' line' : '') }>
            { upperPartReady(data[player].score) && bonus === 0 ? '-' : bonus === 50 ? 50 : '' }
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'pair' + (data[player].score[6] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[6] === 0 ? '' : data[player].score[6] }
              onChange={ e => updateScore(player, 6, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'two-pairs' + (data[player].score[7] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[7] === 0 ? '' : data[player].score[7] }
              onChange={ e => updateScore(player, 7, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'three-pairs' + (data[player].score[8] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[8] === 0 ? '' : data[player].score[8] }
              onChange={ e => updateScore(player, 8, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'three-of-a-kind' + (data[player].score[9] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[9] === 0 ? '' : data[player].score[9] }
              onChange={ e => updateScore(player, 9, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'four-of-a-kind' + (data[player].score[10] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[10] === 0 ? '' : data[player].score[10] }
              onChange={ e => updateScore(player, 10, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'five-of-a-kind' + (data[player].score[11] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[11] === 0 ? '' : data[player].score[11] }
              onChange={ e => updateScore(player, 11, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'small-straight' + (data[player].score[12] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[12] === 0 ? '' : data[player].score[12] }
              onChange={ e => updateScore(player, 12, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'large-straight' + (data[player].score[13] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[13] === 0 ? '' : data[player].score[13] }
              onChange={ e => updateScore(player, 13, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'full-straight' + (data[player].score[14] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[14] === 0 ? '' : data[player].score[14] }
              onChange={ e => updateScore(player, 14, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'full-house' + (data[player].score[15] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[15] === 0 ? '' : data[player].score[15] }
              onChange={ e => updateScore(player, 15, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'castle' + (data[player].score[16] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[16] === 0 ? '' : data[player].score[16] }
              onChange={ e => updateScore(player, 16, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'tower' + (data[player].score[17] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[17] === 0 ? '' : data[player].score[17] }
              onChange={ e => updateScore(player, 17, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'chance' + (data[player].score[18] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[18] === 0 ? '' : data[player].score[18] }
              onChange={ e => updateScore(player, 18, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className={ 'maxi-yatzy' + (data[player].score[19] === '-' && ' line') }
              maxLength={ 3 }
              value={ data[player].score[19] === 0 ? '' : data[player].score[19] }
              onChange={ e => updateScore(player, 19, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td className='total'>
            { total }
          </td>
        </tr>
      </tbody>
    </table>
  </s.Container>);
};

PlayerColumn.propTypes = {
  playerCount: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  player: PropTypes.number.isRequired,
  upperTotal: PropTypes.number.isRequired,
  bonus: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
}