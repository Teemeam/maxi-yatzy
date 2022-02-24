import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  table {
    width: 100%;
  }
  table > thead {
    width: 100%;
  }
  table > thead > tr {
    //
  }
  table > thead > tr > th {
    width: ${ (props) => (`${ 100 / (props.playerCount + 1) }%`) };
  }
  table > thead > tr > th > input {
    width: 100%;
    padding: 0;
    border: 0;
  }
`;