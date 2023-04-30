import { css } from "@emotion/react";
import regular from "./assets/ShantellSans-Regular.ttf";
import bold from "./assets/ShantellSans-Bold.ttf";
import italic from "./assets/ShantellSans-Italic.ttf";

export const global = css([
  {
    "#root": {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "2rem",
      textAlign: "center",
    },
  },
  {
    "@font-face": {
      fontFamily: "Shantell-Sans-Italic",
      src: `url(${italic})`,
    },
  },
  {
    "@font-face": {
      fontFamily: "Shantell-Sans-Bold",
      src: `url(${bold})`,
    },
  },
  {
    "@font-face": {
      fontFamily: "Shantell-Sans",
      src: `url(${regular})`,
    },
  },
  {
    "body": {
      margin: "0",
      display: "flex",
      placeItems: "top",
      minWidth: "320px",
      minHeight: "100vh",
    },
  },
  {
    ":root": {
      lineHeight: "1.5",
      fontWeight: "400",
    },
  },
]);
