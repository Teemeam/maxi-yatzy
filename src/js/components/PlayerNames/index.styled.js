import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0 0 0;
  table {
    position: relative;
    width: 100%;
    border-spacing:0;
    border-collapse: collapse;
    table-layout: fixed;
    word-break: break-word;
  }
  table > thead {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  table > thead > tr {
    position: relative;
    display: inline-block;
    width: 100%;
  }
  table > thead > tr > th {
    position: relative;
    display: inline-block;
    width: ${ (props) => (`${ 100 / (props.playerCount + 2) }%`) };
    margin: 0;
    padding: 0;
    border-top: 2px solid black;
    border-right: 2px solid black;
    box-sizing: border-box;
  }
  table > thead > tr > th.logo {
    width: ${ (props) => (`${ 100 / (props.playerCount - 1) }%`) };
    height: 31.2px;
    padding: 3px 8px;
    border-top: none;
  }
  table > thead > tr > th > input {
    width: 100%;
    margin: 0;
    padding: 3px 8px;
    border: none;
    box-sizing: border-box;
  }
  table > thead > tr > th,
  table > thead > tr > th > input {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.45;
  }
`;