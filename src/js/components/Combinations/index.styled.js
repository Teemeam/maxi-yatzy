import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${ (props) => (`${ 100 / (props.playerCount + 1) }%`) };
`;