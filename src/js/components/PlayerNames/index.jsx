import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const PlayerNames = (props) => {
  const { playerCount, data, updateName } = props;

  return (<s.Container playerCount={ playerCount }>
    <table>
      <thead>
        <tr>
          <th className='logo'>maxi yatzy</th>
          <th>
            <input
              type='text'
              className='player1'
              maxLength={ 10 }
              value={ data[0].name }
              onChange={ e => updateName(0, e.target.value) }/>
          </th>
          <th>
            <input
              type='text'
              className='player2'
              maxLength={ 10 }
              value={ data[1].name }
              onChange={ e => updateName(1, e.target.value) }/>
          </th>
          <th>
            <input
              type='text'
              className='player3'
              maxLength={ 10 }
              value={ data[2].name }
              onChange={ e => updateName(2, e.target.value) }/>
          </th>
          <th>
            <input
              type='text'
              className='player4'
              maxLength={ 10 }
              value={ data[3].name }
              onChange={ e => updateName(3, e.target.value) }/>
          </th>
        </tr>
      </thead>
    </table>
  </s.Container>);
};

PlayerNames.propTypes = {
  playerCount: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  updateName: PropTypes.func.isRequired,
}