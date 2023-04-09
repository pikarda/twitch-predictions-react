import { css } from "@emotion/react";

export const divSpan = css`
  display: flex;
  height: 100%;
  width: 8%;
  float: left;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2%;

  span {
    font-family: Shantell-Sans-Italic;
    color: rgb(214, 214, 214);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
`;

export const circle = css`
  display: flex;
  width: 65%;
  height: 65%;
  border-radius: 50%;
  border: 1px solid rgb(240, 232, 232);

  align-items: center;
  justify-content: center;
  overflow-wrap: break-word;

  span:nth-of-type(1) {
    color: rgb(214, 214, 214);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    font-family: Shantell-Sans-Italic;
    /* font-size: 200%; */
  }
`;

export const index = css`
  font-family: Shantell-Sans-Italic;
  /* font-size: 300%; */
  color: rgb(214, 214, 214);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  position: relative;
  top: 30%;
  right: 25%;
`;
