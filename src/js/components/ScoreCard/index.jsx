import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { testRegex } from './../../lib/sanitize.js';

/* Components */
import { GameMenu } from './../GameMenu/index.jsx';
import { PlayerNames } from './../PlayerNames/index.jsx';
import { Combinations } from './../Combinations/index.jsx';
import { PlayerColumn } from './../PlayerColumn/index.jsx';

/* Styles */
import * as s from './index.styled.js';

export const ScoreCard = (props) => {
  const { handleNotification } = props;
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
  const [resetRequested, setResetRequested] = useState(false);
  const [focusedInput, setFocusedInput] = useState([null, null]);

  /* Get game data from localStorage */
  useEffect(() => {
    const gameData = localStorage.getItem('gameData');
    if (gameData) {
      setData(JSON.parse(gameData));
    }
  }, []);

  /* Load data */
  function handleLoad(data) {
    if (testRegex(data)) {
      setData(JSON.parse(data));
    } else {
      console.log('Data not valid!');
    }
  }

  /* Update score */
  function updateScore(player, i, value) {
    let newObj = {...data};

    /* Update value if there is one */
    if (value) {
      if (value.includes('-')) {
        newObj[player].score[i] = '-';
      } else if (!isNaN(value)) {
        newObj[player].score[i] = parseInt(value);
      } else {
        newObj[player].score[i] = 0;
      }
    } else {
      newObj[player].score[i] = 0;
    }

    /* Sum upper total */
    let upperTotal = 0;
    for (let y = 0; y < 6; y += 1) {
      if (newObj[player].score[y] !== '-') {
        upperTotal += newObj[player].score[y];
      }
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
    let total = newObj[player].score
      .filter((score) => score !== '-')
      .reduce((partialSum, a) => partialSum + a, 0);
    total += bonus;
    newObj[player].total = total;

    setData(newObj);
    localStorage.setItem('gameData', JSON.stringify(newObj));
  }

  /* Update player name */
  function updateName(player, value) {
    let newObj = {...data};

    /* Update value if there is one */
    if (value) {
      newObj[player].name = value;
    } else {
      newObj[player].name = '';
    }

    setData(newObj);
    localStorage.setItem('gameData', JSON.stringify(newObj));
  }

  /* Request reset */
  function handleRequest() {
    if (resetRequested) {
      setResetRequested(false)
    } else {
      setResetRequested(true)
    }
  }

  /* Handle focus */
  function handleFocus(player, i) {
    const focused = [player, i];
    if (focused !== focusedInput) {
      setFocusedInput(focused);
    }
  }

  /* Handle blur */
  function handleBlur() {
    if (focusedInput !== [null, null]) {
      setFocusedInput([null, null]);
    }
  }

  /* Handle keydown */
  function handleKeyDown(player, i, key) {
    switch(key) {
      case 'ArrowUp':
        if (i > 0) {
          setFocusedInput([player, i - 1]);
        }
        break;
      case 'ArrowRight':
        if (player < 3) {
          setFocusedInput([player + 1, i]);
        }
        break;
      case 'ArrowDown':
        if (i < 19) {
          setFocusedInput([player, i + 1]);
        }
        break;
      case 'ArrowLeft':
        if (player > 0) {
          setFocusedInput([player - 1, i]);
        }
    }
  }

  /* Reset game */
  function resetGame() {
    setPlayerCount(4);
    const defaultData = {
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
    };
    setData(defaultData);
    localStorage.removeItem('gameData');
    handleRequest();
  }

  return (<s.Container>
    <GameMenu
      data={ data }
      handleLoad={ handleLoad }
      handleRequest={ handleRequest }
      resetRequested={ resetRequested }
      resetGame={ resetGame }
      handleNotification={ handleNotification }/>

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
          data={ data }
          player={ 0 }
          upperTotal={ data[0].upperTotal }
          bonus={ data[0].bonus }
          total={ data[0].total }
          focusedInput={ focusedInput }
          handleFocus={ handleFocus }
          handleBlur={ handleBlur }
          handleKeyDown={ handleKeyDown }
          updateScore={ updateScore }/>
      }

      {/* Player 2 column */}
      { playerCount > 1 &&
        <PlayerColumn 
          playerCount={ playerCount }
          data={ data }
          player={ 1 }
          upperTotal={ data[1].upperTotal }
          bonus={ data[1].bonus }
          total={ data[1].total }
          focusedInput={ focusedInput }
          handleFocus={ handleFocus }
          handleBlur={ handleBlur }
          handleKeyDown={ handleKeyDown }
          updateScore={ updateScore }/>
      }
      
      {/* Player 3 column */}
      { playerCount > 2 &&
        <PlayerColumn
          playerCount={ playerCount }
          data={ data }
          player={ 2 }
          upperTotal={ data[2].upperTotal }
          bonus={ data[2].bonus }
          total={ data[2].total }
          focusedInput={ focusedInput }
          handleFocus={ handleFocus }
          handleBlur={ handleBlur }
          handleKeyDown={ handleKeyDown }
          updateScore={ updateScore }/>
      }

      {/* Player 4 column */}
      { playerCount > 3 &&
        <PlayerColumn
          playerCount={ playerCount }
          data={ data }
          player={ 3 }
          upperTotal={ data[3].upperTotal }
          bonus={ data[3].bonus }
          total={ data[3].total }
          focusedInput={ focusedInput }
          handleFocus={ handleFocus }
          handleBlur={ handleBlur }
          handleKeyDown={ handleKeyDown }
          updateScore={ updateScore }/>
      }
    </div>
  </s.Container>);
};

ScoreCard.propTypes = {
  handleNotification: PropTypes.func.isRequired
}