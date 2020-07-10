import styled from "styled-components";

import { theme } from './../../styles';

export const Loading = styled.div`
  @import "https://fonts.googleapis.com/css?family=Orbitron";

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .text_loading {
    font-family: 'Orbitron', sans-serif;
    font-size: 5px;
    animation: blink 0.9s ease-in-out infinite;
  }

  .triangle {
    stroke-dasharray: 17;
    animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 136;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
