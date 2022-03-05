import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${ (props) => (`${ 100 / (props.playerCount - 1) }%`) };
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
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.45;
    margin: 0;
    padding: 3px 8px;
    border-top: 1px solid black;
    border-left: 1px solid black;
  }
  table > tbody > tr > td.upper-total,
  table > tbody > tr > td.bonus,
  table > tbody > tr > td.total {
    font-weight: 700;
  }
`;