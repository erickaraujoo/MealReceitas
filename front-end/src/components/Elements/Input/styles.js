import styled from "styled-components";

import { theme } from "../../../styles";

export const InputSearch = styled.div`
  position: relative;
  display: inline-flex;
  width: ${(props) => props.width}%;
  height: ${(props) => (props.height ? props.height : "50px")};
  margin-top: ${(props) => (props.margin ? props.margin.top : "1.5em")};

  input {
    flex: 1 0 auto;
    -webkit-tap-highlight-color: ${theme.colors.white};
    border-radius: 0.28571429rem 0 0 0.28571429rem;
  }

  button {
    display: flex;
    padding: 0 1.08571429em;
    border: none;
    background: ${theme.colors.pattensBlue} none;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 0 0.28571429rem 0.28571429rem 0;
    -webkit-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${theme.colors.lightGray};
    }
  }

  button img {
    opacity: 0.7;
    height: 17.5px;
  }
`;

export const InputBorderLeft = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: 20px;
  border-left: ${(props) => props.borderLeft};
  border-right: solid 0px;
  border-bottom: solid 0px;
  border-top: solid 0px;
  background: ${(props) => props.background};
  font-size: 1rem;
  font-family: PoppinsRegular;

  &::placeholder {
    color: #B6B6B6;
    opacity: 1;
  }
`;
