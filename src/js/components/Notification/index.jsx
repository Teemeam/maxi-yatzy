import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const Notification = (props) => {
  const { showNotification } = props;

  return (<s.Container>
    <div className={ 'notification-wrapper' + (showNotification ? ' active' : '') }>
      <p>Saved!</p>
    </div>
  </s.Container>);
};

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired
}