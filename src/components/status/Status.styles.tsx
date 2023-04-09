import { css, keyframes } from "@emotion/react";

export const empty = css``;

export const title = css`
  font-family: Shantell-Sans-Bold;
  font-size: 30px;
  line-height: 110%;
  margin: 0px 0px 10px 0px;
  padding-right: 5%;
  color: rgb(214, 214, 214);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

export const time = css`
  font-family: Shantell-Sans;
  font-size: 20px;
  margin: 0px 0px 5px 0px;
  padding-right: 5%;
  color: rgb(214, 214, 214);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

export const initialOpacity = css`
  opacity: 0;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const fadeOutAfter30Sec = keyframes`
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const ShowEvery4minutes = keyframes`
  0% {
    opacity: 0;
  }
  95.6% {
    opacity: 0;
  }
  96% {
    opacity: 1;
  }
  99.6% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const ShowEvery5seconds = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const divT2 = css`
  animation: ${fadeOut} 1000ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const divT = css`
  animation: ${fadeIn} 1000ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const resolvedFadeout = css`
  animation: ${fadeOutAfter30Sec} 10s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const lockedAnimation = css`
  animation: ${ShowEvery4minutes} 240s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;
