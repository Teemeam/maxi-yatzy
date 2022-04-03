import React, { useRef, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { upperPartReady } from './../../lib/playerReady.js';

/* Styles */
import * as s from './index.styled.js';

export const PlayerColumn = (props) => {
  const {
    playerCount,
    data,
    player,
    upperTotal,
    bonus,
    total,
    focusedInput,
    showTotal,
    handleFocus,
    handleBlur,
    handleKeyDown,
    updateScore
  } = props;

  /* Store all input refs inside an array */
  let inputRefs = useRef([]);

  /* Create input refs */
  useEffect(() => {
    inputRefs.current = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((ref, i) =>
      inputRefs.current[i] = createRef()
    )
  }, []);

  /* Focus to correct input  */
  useEffect(() => {
    if (focusedInput[0] === player) {
      inputRefs.current[focusedInput[1]]?.current.focus();
    }
  }, [focusedInput]);

  return (<s.Container playerCount={ playerCount }>
    <table>
      <tbody>
        <tr>
          <td className='ones'>
            <input
              ref={ inputRefs.current[0] }
              type='text'
              className={ 'ones' + (data[player].score[0] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[0] === 0 ? '' : data[player].score[0] }
              onFocus={ () => handleFocus(player, 0) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 0, e.key) }
              onChange={ e => updateScore(player, 0, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[1] }
              type='text'
              className={ 'twos' + (data[player].score[1] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[1] === 0 ? '' : data[player].score[1] }
              onFocus={ () => handleFocus(player, 1) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 1, e.key) }
              onChange={ e => updateScore(player, 1, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[2] }
              type='text'
              className={ 'threes' + (data[player].score[2] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[2] === 0 ? '' : data[player].score[2] }
              onFocus={ () => handleFocus(player, 2) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 2, e.key) }
              onChange={ e => updateScore(player, 2, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[3] }
              type='text'
              className={ 'fours' + (data[player].score[3] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[3] === 0 ? '' : data[player].score[3] }
              onFocus={ () => handleFocus(player, 3) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 3, e.key) }
              onChange={ e => updateScore(player, 3, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[4] }
              type='text'
              className={ 'fives' + (data[player].score[4] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[4] === 0 ? '' : data[player].score[4] }
              onFocus={ () => handleFocus(player, 4) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 4, e.key) }
              onChange={ e => updateScore(player, 4, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[5] }
              type='text'
              className={ 'sixes' + (data[player].score[5] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[5] === 0 ? '' : data[player].score[5] }
              onFocus={ () => handleFocus(player, 5) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 5, e.key) }
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
              ref={ inputRefs.current[6] }
              type='text'
              className={ 'pair' + (data[player].score[6] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[6] === 0 ? '' : data[player].score[6] }
              onFocus={ () => handleFocus(player, 6) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 6, e.key) }
              onChange={ e => updateScore(player, 6, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[7] }
              type='text'
              className={ 'two-pairs' + (data[player].score[7] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[7] === 0 ? '' : data[player].score[7] }
              onFocus={ () => handleFocus(player, 7) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 7, e.key) }
              onChange={ e => updateScore(player, 7, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[8] }
              type='text'
              className={ 'three-pairs' + (data[player].score[8] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[8] === 0 ? '' : data[player].score[8] }
              onFocus={ () => handleFocus(player, 8) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 8, e.key) }
              onChange={ e => updateScore(player, 8, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[9] }
              type='text'
              className={ 'three-of-a-kind' + (data[player].score[9] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[9] === 0 ? '' : data[player].score[9] }
              onFocus={ () => handleFocus(player, 9) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 9, e.key) }
              onChange={ e => updateScore(player, 9, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[10] }
              type='text'
              className={ 'four-of-a-kind' + (data[player].score[10] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[10] === 0 ? '' : data[player].score[10] }
              onFocus={ () => handleFocus(player, 10) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 10, e.key) }
              onChange={ e => updateScore(player, 10, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[11] }
              type='text'
              className={ 'five-of-a-kind' + (data[player].score[11] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[11] === 0 ? '' : data[player].score[11] }
              onFocus={ () => handleFocus(player, 11) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 11, e.key) }
              onChange={ e => updateScore(player, 11, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[12] }
              type='text'
              className={ 'small-straight' + (data[player].score[12] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[12] === 0 ? '' : data[player].score[12] }
              onFocus={ () => handleFocus(player, 12) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 12, e.key) }
              onChange={ e => updateScore(player, 12, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[13] }
              type='text'
              className={ 'large-straight' + (data[player].score[13] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[13] === 0 ? '' : data[player].score[13] }
              onFocus={ () => handleFocus(player, 13) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 13, e.key) }
              onChange={ e => updateScore(player, 13, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[14] }
              type='text'
              className={ 'full-straight' + (data[player].score[14] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[14] === 0 ? '' : data[player].score[14] }
              onFocus={ () => handleFocus(player, 14) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 14, e.key) }
              onChange={ e => updateScore(player, 14, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[15] }
              type='text'
              className={ 'full-house' + (data[player].score[15] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[15] === 0 ? '' : data[player].score[15] }
              onFocus={ () => handleFocus(player, 15) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 15, e.key) }
              onChange={ e => updateScore(player, 15, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[16] }
              type='text'
              className={ 'castle' + (data[player].score[16] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[16] === 0 ? '' : data[player].score[16] }
              onFocus={ () => handleFocus(player, 16) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 16, e.key) }
              onChange={ e => updateScore(player, 16, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[17] }
              type='text'
              className={ 'tower' + (data[player].score[17] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[17] === 0 ? '' : data[player].score[17] }
              onFocus={ () => handleFocus(player, 17) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 17, e.key) }
              onChange={ e => updateScore(player, 17, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[18] }
              type='text'
              className={ 'chance' + (data[player].score[18] === '-' && ' line') }
              maxLength={ 2 }
              value={ data[player].score[18] === 0 ? '' : data[player].score[18] }
              onFocus={ () => handleFocus(player, 18) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 18, e.key) }
              onChange={ e => updateScore(player, 18, e.target.value) }/>
          </td>
        </tr>
        <tr>
          <td>
            <input
              ref={ inputRefs.current[19] }
              type='text'
              className={ 'maxi-yatzy' + (data[player].score[19] === '-' && ' line') }
              maxLength={ 3 }
              value={ data[player].score[19] === 0 ? '' : data[player].score[19] }
              onFocus={ () => handleFocus(player, 19) }
              onBlur={ () => handleBlur() }
              onKeyDown={ e => handleKeyDown(player, 19, e.key) }
              onChange={ e => updateScore(player, 19, e.target.value) }/>
          </td>
        </tr>
        { showTotal && (
          <tr>
            <td className='total'>
              { total }
            </td>
          </tr>
        )}
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
  focusedInput: PropTypes.array.isRequired,
  showTotal: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
}