import React, { useState } from 'react';

/* Components */
import { PlayerNames } from './../PlayerNames/index.jsx';
import { Combinations } from './../Combinations/index.jsx';
import { PlayerColumn } from './../PlayerColumn/index.jsx';

/* Styles */
import * as s from './index.styled.js';

export const ScoreCard = (props) => {
  const [playerCount, setPlayerCount] = useState(4);
  const [data, setData] = useState({
    0: {
      name: 'Player 1',
      score: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      upperTotal: 0,
      bonus: 0,
      total: 0,
    },
    1: {
      name: 'Player 2',
      score: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      upperTotal: 0,
      bonus: 0,
      total: 0,
    },
    2: {
      name: 'Player 3',
      score: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      upperTotal: 0,
      bonus: 0,
      total: 0,
    },
    3: {
      name: 'Player 4',
      score: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      upperTotal: 0,
      bonus: 0,
      total: 0,
    },
  });

  /* Update score */
  function updateScore(player, i, value) {
    let newObj = {...data};

    /* Update value if there is one */
    if (value) {
      newObj[player].score[i] = parseInt(value);
    } else {
      newObj[player].score[i] = 0;
    }

    /* Sum upper total */
    let upperTotal = 0;
    for (let y = 0; y < 6; y += 1) {
      upperTotal += newObj[player].score[y];
    }
    newObj[player].upperTotal = upperTotal;

    /* Add bonus if upper total is 75 or more */
    let bonus = 0;
    if (upperTotal >= 75) {
      bonus = 50;
    } else {
      bonus = 0;
    }
    newObj[player].bonus = bonus;

    /* Sum total */
    let total = newObj[player].score.reduce((partialSum, a) => partialSum + a, 0);
    total += bonus;
    newObj[player].total = total;

    setData(newObj);
    console.log(newObj);
  }

  /* Update player name */
  function updateName(player, value) {
    let newObj = {...data};

    /* Update value if there is one */
    if (value) {
      newObj[player].name = value;
    } else {
      newObj[player].name = `Player ${ player + 1 }`;
    }

    setData(newObj);
  }

  return (<s.Container>
    <PlayerNames
      playerCount={ playerCount }
      data={ data }
      updateName={ updateName }/>

    <div className='tbody-wrapper'>
      <Combinations playerCount={ playerCount }/>

      {/* Player 1 column */}
      { playerCount > 0 &&
        <PlayerColumn
          playerCount={ playerCount }
          player={ 0 }
          upperTotal={ data[0].upperTotal }
          bonus={ data[0].bonus }
          total={ data[0].total }
          updateScore={ updateScore }/> }

      {/* Player 2 column */}
      { playerCount > 1 &&
        <PlayerColumn 
          playerCount={ playerCount }
          player={ 1 }
          upperTotal={ data[1].upperTotal }
          bonus={ data[1].bonus }
          total={ data[1].total }
          updateScore={ updateScore }/> }
      
      {/* Player 3 column */}
      { playerCount > 2 &&
        <PlayerColumn
          playerCount={ playerCount }
          player={ 2 }
          upperTotal={ data[2].upperTotal }
          bonus={ data[2].bonus }
          total={ data[2].total }
          updateScore={ updateScore }/> }

      {/* Player 4 column */}
      { playerCount > 3 &&
        <PlayerColumn
          playerCount={ playerCount }
          player={ 3 }
          upperTotal={ data[3].upperTotal }
          bonus={ data[3].bonus }
          total={ data[3].total }
          updateScore={ updateScore }/> }
    </div>
  </s.Container>);
};