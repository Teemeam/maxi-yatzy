import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 15px 0;
  text-align: center;
  form > #form-input {
    display: none;
  }
  form > button {
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.45;
    margin: 0;
    padding: 8px 12px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: ${ props => props.showLoadSaveMenu ? 'black' : 'white' };
    color: ${ props => props.showLoadSaveMenu ? 'white' : 'black' };
    cursor: pointer;
    :hover {
      background-color: black;
      color: white;
    }
  }
  form > button::-moz-focus-inner {
    border: 0;
  }
`;