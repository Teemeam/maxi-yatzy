import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto 15px auto;
  padding: 0;
  div {
    width: calc(50% - 2.5px);
  }
`;