import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';

const popFromTop = keyframes`
  0% { transform: translateY(-50px); }
  10% { transform: translateY(0px); }
  90% { transform: translateY(0px); }
  100% { transform: translateY(-50px); }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  .notification-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #b2bbbb;
    transform: translateY(-50px);
    z-index: 999;
  }
  .notification-wrapper.active {
    animation-name: ${ popFromTop };
    animation-duration: 5000ms;
    animation-fill-mode: linear;
    animation-delay: 0;
  }
  .notification-wrapper > p {
    font-family: 'Montserrat', 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 50px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;