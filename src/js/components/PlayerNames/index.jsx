import React, { useState } from 'react';

/* Styles */
import * as s from './index.styled.js';

const PlayerNames = (props) => {
  return (<s.Container>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Nimi</th>
          <th>Nimi</th>
          <th>Nimi</th>
          <th>Nimi</th>
        </tr>
      </thead>
    </table>
  </s.Container>);
};

export default PlayerNames;