import React from 'react';
import PropTypes from 'prop-types';

/* Images */
import ones from './../../../img/ones.svg';
import twos from './../../../img/twos.svg';
import threes from './../../../img/threes.svg';
import fours from './../../../img/fours.svg';
import fives from './../../../img/fives.svg';
import sixes from './../../../img/sixes.svg';
import pair from './../../../img/pair.svg';
import twoPairs from './../../../img/two-pairs.svg';
import threePairs from './../../../img/three-pairs.svg';
import threeOfAKind from './../../../img/three-of-a-kind.svg';
import fourOfAKind from './../../../img/four-of-a-kind.svg';
import fiveOfAKind from './../../../img/five-of-a-kind.svg';
import smallStraight from './../../../img/small-straight.svg';
import largeStraight from './../../../img/large-straight.svg';
import fullStraight from './../../../img/full-straight.svg';
import fullHouse from './../../../img/full-house.svg';
import castle from './../../../img/castle.svg';
import tower from './../../../img/tower.svg';
import chance from './../../../img/tower.svg';

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
              <img src={ ones }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='twos'>
            <div>
              <img src={ twos }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='threes'>
            <div>
              <img src={ threes }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='fours'>
            <div>
              <img src={ fours }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='fives'>
            <div>
              <img src={ fives }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='sixes'>
            <div>
              <img src={ sixes }/>
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
              <img src={ pair }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='two-pairs'>
            <div>
              <img src={ twoPairs }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='three-pairs'>
            <div>
              <img src={ threePairs }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='three-of-a-kind'>
            <div>
              <img src={ threeOfAKind }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='four-of-a-kind'>
            <div>
              <img src={ fourOfAKind }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='five-of-a-kind'>
            <div>
              <img src={ fiveOfAKind }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='small-straight'>
            <div>
              <img src={ smallStraight }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='large-straight'>
            <div>
              <img src={ largeStraight }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='full-straight'>
            <div>
              <img src={ fullStraight }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='full-house'>
            <div>
              <img src={ fullHouse }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='castle'>
            <div>
              <img src={ castle }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='tower'>
            <div>
              <img src={ tower }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='chance'>
            <div>
              <img src={ chance }/>
            </div>
          </td>
        </tr>
        <tr>
          <td className='maxi-yatzy'>maxi yatzy</td>
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