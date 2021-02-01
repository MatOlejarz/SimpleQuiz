import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/liliana-szabados.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    color: #ffffff;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    background: linear-gradient(90deg, #56ccff, #6eafb4);
    border: none;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
    box-shadow: 5px 5px 20px 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease;
  }
  .start {
    max-width: 200px;
  }
`;
