import styled, { createGlobalStyle } from "styled-components";

import BackgroundImage from "./../../assets/login/wallpaper.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: auto;
        background-image: url(${BackgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(48, 1fr);

  section.section_login {
    grid-column: 14/36;
    margin-top: 150px;
    height: auto;
    min-height: 525px;
    padding: 80px 140px 35px 140px;
    background: linear-gradient(
      180deg,
      rgba(6, 106, 170, 0.15) 0%,
      rgba(1, 37, 89, 0.15) 100%
    );
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1200px) {
      grid-column: 8/42;
    }
    @media (max-width: 700px) {
      grid-column: 1/49;
      padding: 80px 80px 35px 80px;
    }

    div.title {
      display: flex;
      width: 100%;

      h3 {
        font-size: 1.375rem;
        color: white;
        font-family: PoppinsLight;
        letter-spacing: 0.5px;
      }
    }

    form {
      width: 100%;
      margin-top: 50px;

      div input {
        width: 100%;
        min-height: 35px;
        height: auto;
        font-size: 1.125rem;
        font-family: PoppinsLight;
        color: white !important;
        background: transparent;
        border: none;
        border-bottom: solid 1px white;
        padding: 0 0 5px 0;

        &::placeholder {
          color: #fff;
          opacity: 1;
        }
      }

      button {
        width: 100%;
        height: 45px;
        margin-top: 50px;
        border: none;
        background: linear-gradient(90deg, #80b6dd 0%, #044e8e 85.4%);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        font-family: PoppinsSemibold;
        font-size: 1.25rem;
        color: #fff;
      }

      div + div input {
        margin-top: 45px;
      }
    }

    div.back {
      height: 30px;
      width: auto;
      margin-right: auto;
      padding: 0 10px;
      margin-top: 30px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;

      img {
        transform: rotateY(180deg);
      }
      p {
        font-size: 1.125rem;
        font-family: PoppinsRegular;
        margin-left: 10px;
        color: white;
      }
    }
  }

  section.section_help {
    grid-column: 1/49;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 25px 0;

    p.privacy_policy {
      margin-top: 50px;
      color: #fff;
      font-size: 1.125rem;
      font-family: PoppinsRegular;
      width: 100%;
      text-align: center;
    }
  }
`;
