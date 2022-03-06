import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 300px;
  margin: 0 auto 15px auto;
  padding: 0;
  .input-wrapper {
    position: relative;
    width: calc(100% - 110px);
  }
  .button-wrapper {
    position: relative;
    width: 110px;
  }
  div > input {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.45;
    width: 100%;
    border-top: 2px solid black;
    border-right: none;
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    border-radius: 10px 0 0 10px;
    margin: 0;
    padding: 8px 12px;
    outline: none;
    box-sizing: border-box;
  }
  div > input::placeholder {
    font-size: 16px;
  }
`;