import { css } from "@emotion/react";
import { barHeigh } from "../../../public/config";

export const mainBar = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${barHeigh}px;
  width: 90%;
  background-color: rgba(220, 224, 224, 0.7);
  border-radius: 10px;
  float: left;
`;

export const barMask = css`
  display: flex;
  height: 90%;
  width: 98%;
  border-radius: 9px;
  overflow: hidden;
`;

export const innerBar = css`
  display: flex;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: width 0.4s ease-in-out;
`;

export const divSpan = css`
  display: flex;
  height: 100%;
  width: 8%;
  height: ${barHeigh}px;
  float: left;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;

  span {
    font-family: Shantell-Sans-Italic;
    font-size: ${(barHeigh / 4) * 2.2}px;
    color: rgb(214, 214, 214);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
`;
