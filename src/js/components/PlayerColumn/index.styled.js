import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: ${ (props) => (`${ 100 / (props.playerCount + 2) }%`) };
  table {
    position: relative;
    width: 100%;
    border-spacing:0;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-word;
  }
  table > tbody {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  table > tbody > tr {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 29.8667px;
  }
  table > tbody > tr > td {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;
    border-top: 1px dashed black;
    border-right: 2px solid black;
    box-sizing: border-box;
  }
  table > tbody > tr > td.ones {
    border-top: 1px solid black;
  }
  table > tbody > tr > td.upper-total,
  table > tbody > tr > td.bonus,
  table > tbody > tr > td.total {
    height: 31.2px;
    padding: 3px 8px;
  }
  table > tbody > tr > td.upper-total,
  table > tbody > tr > td.total {
    border-top: 2px solid black;
  }
  table > tbody > tr > td.bonus {
    border-top: 1px solid black;
  }
  table > tbody > tr > td > input {
    width: 100%;
    margin: 0;
    padding: 3px 8px;
    border: none;
    outline: none;
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
  table > tbody > tr > td > input.line {
    background-color: rgba(252, 104, 98, .3);
  }
`;