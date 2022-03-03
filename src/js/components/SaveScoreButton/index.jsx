import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Styles */
import * as s from './index.styled.js';

export const SaveScoreButton = (props) => {
  const { data } = props;

  const form = useRef();
  const [formUrl, setFormUrl] = useState('https://docs.google.com/forms/d/e/1FAIpQLSdO7gEH9oXZmy6jXkit_x6wnt_7oXT-6I2cQGeqyFJ7nirKUA/formResponse');
  const [inputEntry, setInputEntry] = useState('entry.1032790450');

  /* Submit form */
  function submitForm(e) {
    e.preventDefault();
    if (form.current) {
      form.current.submit();
    }
  }

  return (<s.Container>
    <form ref={ form } action={ formUrl } method='post' target='hidden-iframe'>
      <input id='form-input' type='text' name={ inputEntry } value={ JSON.stringify(data) } readOnly></input>
      <button type='submit' onClick={ e => submitForm(e) }>Save game</button>
    </form>
    <iframe title='hidden-iframe' name='hidden-iframe' style={{ display: 'none' }}/>
  </s.Container>);
};

SaveScoreButton.propTypes = {
  data: PropTypes.object.isRequired,
}