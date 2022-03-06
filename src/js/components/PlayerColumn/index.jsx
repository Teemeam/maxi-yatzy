import React from 'react';
import PropTypes from 'prop-types';

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
              className='ones'
              maxLength={ 2 }
              value={ data[player].score[0] }
              onChange={ e => updateScore(player, 0, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='twos'
              maxLength={ 2 }
              value={ data[player].score[1] }
              onChange={ e => updateScore(player, 1, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='threes'
              maxLength={ 2 }
              value={ data[player].score[2] }
              onChange={ e => updateScore(player, 2, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='fours'
              maxLength={ 2 }
              value={ data[player].score[3] }
              onChange={ e => updateScore(player, 3, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='fives'
              maxLength={ 2 }
              value={ data[player].score[4] }
              onChange={ e => updateScore(player, 4, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='sixes'
              maxLength={ 2 }
              value={ data[player].score[5] }
              onChange={ e => updateScore(player, 5, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td className='upper-total'>
            { upperTotal }
          </td>
        </tr>
        <tr>
          <td className='bonus'>
            { bonus === 50 ? 50 : '-' }
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='pair'
              maxLength={ 2 }
              value={ data[player].score[6] }
              onChange={ e => updateScore(player, 6, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='two-pairs'
              maxLength={ 2 }
              value={ data[player].score[7] }
              onChange={ e => updateScore(player, 7, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='three-pairs'
              maxLength={ 2 }
              value={ data[player].score[8] }
              onChange={ e => updateScore(player, 8, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='three-of-a-kind'
              maxLength={ 2 }
              value={ data[player].score[9] }
              onChange={ e => updateScore(player, 9, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='four-of-a-kind'
              maxLength={ 2 }
              value={ data[player].score[10] }
              onChange={ e => updateScore(player, 10, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='five-of-a-kind'
              maxLength={ 2 }
              value={ data[player].score[11] }
              onChange={ e => updateScore(player, 11, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='small-straight'
              maxLength={ 2 }
              value={ data[player].score[12] }
              onChange={ e => updateScore(player, 12, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='large-straight'
              maxLength={ 2 }
              value={ data[player].score[13] }
              onChange={ e => updateScore(player, 13, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='full-straight'
              maxLength={ 2 }
              value={ data[player].score[14] }
              onChange={ e => updateScore(player, 14, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='full-house'
              maxLength={ 2 }
              value={ data[player].score[15] }
              onChange={ e => updateScore(player, 15, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='castle'
              maxLength={ 2 }
              value={ data[player].score[16] }
              onChange={ e => updateScore(player, 16, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='tower'
              maxLength={ 2 }
              value={ data[player].score[17] }
              onChange={ e => updateScore(player, 17, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='chance'
              maxLength={ 2 }
              value={ data[player].score[18] }
              onChange={ e => updateScore(player, 18, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              className='maxi-yatzy'
              maxLength={ 3 }
              value={ data[player].score[19] }
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