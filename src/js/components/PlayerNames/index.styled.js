import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  table {
    width: 100%;
    border-spacing:0;
    border-collapse: collapse;
  }
  table > thead {
    width: 100%;
  }
  table > thead > tr {
    //
  }
  table > thead > tr > th {
    width: ${ (props) => (`${ 100 / (props.playerCount + 2) }%`) };
    margin: 0;
    padding: 0;
  }
  table > thead > tr > th.player {
    border-top: 1px solid black;
    border-left: 1px solid black;
  }
  table > thead > tr > th > input {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.45;
    width: 100%;
    margin: 0;
    padding: 3px 8px;
    border: none;
    box-sizing: border-box;
  }
`;