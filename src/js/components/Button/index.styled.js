import styled from '@emotion/styled';

export const Button = styled.button`
  font-family: 'Montserrat', 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.45;
  width: ${ props => props.resetButton || props.loadDataButton ? '100%' : 'auto' };
  margin: 0;
  padding: 8px 12px;
  border: 2px solid black;
  border-radius: ${ props => props.loadDataButton ? '0 10px 10px 0' : '10px' };
  background-color: ${ props => props.showLoadSaveMenu || props.showTotal ? 'black' : 'white' };
  color: ${ props => props.showLoadSaveMenu || props.showTotal ? 'white' : 'black' };
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
  ::-moz-focus-inner {
    border: 0;
  }
`;