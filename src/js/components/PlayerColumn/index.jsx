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
          <td>
            <input
              type='number'
              className='ones'
              min='1'
              max='6'
              value={ data[player].score[0] }
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
              value={ data[player].score[1] }
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
              value={ data[player].score[2] }
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
              value={ data[player].score[3] }
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
              value={ data[player].score[4] }
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
              value={ data[player].score[5] }
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
              value={ data[player].score[6] }
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
              value={ data[player].score[7] }
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
              value={ data[player].score[8] }
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
              value={ data[player].score[9] }
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
              value={ data[player].score[10] }
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
              value={ data[player].score[11] }
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
              value={ data[player].score[12] }
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
              value={ data[player].score[13] }
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
              value={ data[player].score[14] }
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
              value={ data[player].score[15] }
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
              value={ data[player].score[16] }
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
              value={ data[player].score[17] }
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
              value={ data[player].score[18] }
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
              value={ data[player].score[19] }
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
  data: PropTypes.object.isRequired,
  player: PropTypes.number.isRequired,
  upperTotal: PropTypes.number.isRequired,
  bonus: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
}