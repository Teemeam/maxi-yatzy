import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  width: ${ (props) => (`${ 100 / (props.playerCount - 1) }%`) };
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
    overflow: hidden;
  }
  table > tbody > tr > td {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 29.8667px;
    border-top: 1px dashed black;
    border-right: 2px solid black;
    box-sizing: border-box;
    white-space: nowrap;
  }
  table > tbody > tr > td.ones {
    border-top: 1px solid black;
  }
  table > tbody > tr > td.upper-total,
  table > tbody > tr > td.bonus,
  table > tbody > tr > td.total {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.45;
    margin: 0;
    padding: 3px 8px;
    text-align: right;
  }
  table > tbody > tr > td.upper-total {
    height: 29.8667px;
  }
  table > tbody > tr > td.upper-total,
  table > tbody > tr > td.total {
    font-weight: 700;
    border-top: 2px solid black;
  }
  table > tbody > tr > td.bonus {
    border-top: 1px solid black;
  }
  table > tbody > tr > td.maxi-yatzy {
    font-family: 'Kavoon', 'Montserrat', 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    overflow: hidden;
    @media (max-width: 350px) {
      font-size: 16px;
    }
    @media (max-width: 300px) {
      font-size: 15px;
    }
  }
  table > tbody > tr > td > div {
    position: relative;
    height: 29.8667px;
    width: 85%;
    margin: 0;
    @media (max-width: 800px) {
      width: 94%;
    }
    @media (max-width: 500px) {
      width: 98%;
    }
  }
  table > tbody > tr > td > div > img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, calc(-50% - 1px));
  }
`;