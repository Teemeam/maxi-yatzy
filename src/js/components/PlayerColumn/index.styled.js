import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${ (props) => (`${ 100 / (props.playerCount + 2) }%`) };
  table {
    width: 100%;
    border-spacing:0;
    border-collapse: collapse;
  }
  table > tbody {
    width: 100%;
  }
  table > tbody > tr {
    //
  }
  table > tbody > tr > td {
    margin: 0;
    padding: 0;
    border-top: 1px solid black;
    border-left: 1px solid black;
  }
  table > tbody > tr > td.upper-total,
  table > tbody > tr > td.bonus,
  table > tbody > tr > td.total {
    padding: 3px 8px;
  }
  table > tbody > tr > td > input {
    width: 100%;
    margin: 0;
    padding: 3px 8px;
    border: none;
    box-sizing: border-box;
  }
  table > tbody > tr > td,
  table > tbody > tr > td > input {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.45;
  }
`;