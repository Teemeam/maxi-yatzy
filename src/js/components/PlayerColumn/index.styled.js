import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${ (props) => (`${ 100 / (props.playerCount + 1) }%`) };
  table {
    width: 100%;
  }
  table > tbody {
    width: 100%;
  }
  table > tbody > tr {
    //
  }
  table > tbody > tr > td {
    //
  }
  table > tbody > tr > td > input {
    width: 100%;
  }
`;