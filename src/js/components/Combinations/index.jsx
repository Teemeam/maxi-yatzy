import React from 'react';
import PropTypes from 'prop-types';

/* Images */
import logo from './../../../img/maxi-yatzy-logo.jpg';

/* Styles */
import * as s from './index.styled.js';

export const Combinations = (props) => {
  const { playerCount } = props;

  return (<s.Container playerCount={ playerCount }>
    <table>
      <tbody>
        <tr>
          <td className='ones'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='twos'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='threes'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='fours'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='fives'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='sixes'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='upper-total'>TOTAL</td>
        </tr>
        <tr>
          <td className='bonus'>Bonus</td>
        </tr>
        <tr>
          <td className='pair'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='two-pairs'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='three-pairs'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='three-of-a-kind'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='four-of-a-kind'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='five-of-a-kind'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='small-straight'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='large-straight'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='full-straight'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='full-house'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='castle'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='tower'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='chance'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='maxi-yatzy'>
            <div>
              <img src={ logo }/>
            </div>
          </td>
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