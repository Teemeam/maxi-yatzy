import styled from '@emotion/styled';

export const Container = styled.div`
  .outer-logo-wrapper {
    width: 100%;
  }
  .outer-logo-wrapper > .inner-logo-wrapper {
    width: 94%;
    margin: 0 auto;
  }
  .outer-logo-wrapper > .inner-logo-wrapper > h1 {
    font-family: 'Kavoon', 'Montserrat', 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 60px;
    font-weight: 400;
    line-height: 1;
    margin: 30px 0;
    padding: 0;
    text-align: center;
    @media (max-width: 350px) {
      font-size: 50px;
    }
    @media (max-width: 300px) {
      font-size: 70px;
      line-height: .9;
      margin: 20px 0 30px 0;
    }
  }
`;