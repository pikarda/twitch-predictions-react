import { Global } from "@emotion/react";
import regular from "../assets/ShantellSans-Regular.ttf";
import bold from "../assets/ShantellSans-Bold.ttf";
import italic from "../assets/ShantellSans-Italic.ttf";
import { clientId } from "../../public/config";

const Guide = () => {
  return (
    <>
      <Global
        styles={[
          {
            "#root": {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "2rem",
              textAlign: "center",
              minWidth: "500px",
            },
          },
          {
            "body": {
              backgroundColor: "#4c3253",
            },
          },
          {
            "p": {
              fontFamily: "Shantell-Sans-Italic",
              fontSize: "22px",
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
        ]}
      />
      <div
        css={{
          display: "block",
          backgroundColor: "rgba(209, 196, 196, 0.774)",
          borderRadius: "50px",
        }}
      >
        <h2 css={{ fontFamily: "Shantell-Sans-Bold", fontSize: "30px", paddingTop: "30px" }}>
          Generate Custom Scope Token
        </h2>
        <a
          href={
            "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=" +
            clientId +
            "&redirect_uri=http://localhost:5173/predictions&scope=channel%3Aread%3Apredictions&state=c3ab8aa609ea11e793ae92361f002671"
          }
        >
          Connect with Twitch
        </a>
        <p>Only “channel:read:predictions” scope is REQUIRED!</p>
        <div
          css={{
            display: "flex",
            backgroundColor: "rgba(7, 7, 7, 0.774)",
            borderRadius: "10px",
            margin: "20px",
            padding: "10px 20px",
          }}
        >
          <span
            css={{
              display: "block",
              width: "100%",
              color: "white",
              fontSize: "200%",
              fontFamily: "Shantell-Sans",
            }}
            style={{ wordWrap: "break-word" }}
            contentEditable
            suppressContentEditableWarning={true}
          >
            https://pikarda-predictions.web.app/predictions?username=
            <span css={{ color: "purple" }}>yourUsername</span>&clientID=
            <span css={{ color: "blue" }}>asfs7f7bfjfkmlnd933k2l</span>&auth=
            <span css={{ color: "red" }}>h4lc82lld005j4n2l56</span>
          </span>
        </div>
        <p>
          Replace <span css={{ color: "purple" }}>purple text</span> with your Twitch username.
        </p>
        <p>
          Replace <span css={{ color: "blue" }}>blue text</span> with your ClientID.
        </p>
        <p>
          Replace <span css={{ color: "red" }}>red text</span> with your Access Token.
        </p>
        <p>Then copy the link.</p>

        <p css={{ paddingBottom: "30px" }}>In OBS add new Browser ⇒ use this link as URL.</p>
      </div>
    </>
  );
};

export default Guide;
