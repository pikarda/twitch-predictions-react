import { useEffect } from "react";
import { clientId } from "../../public/config";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();

  const auth = document.location.hash.split("&")[0].split("=")[1];

  useEffect(() => {
    if (auth) {
      navigate("/predictions?clientID=" + clientId + "&auth=" + auth);
    }
  }, [auth]);

  return (
    <div>
      <a
        href={
          "https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=" +
          clientId +
          "&redirect_uri=http://localhost:5173/test&scope=channel%3Aread%3Apredictions&state=c3ab8aa609ea11e793ae92361f002671"
        }
      >
        Connect with Twitch
      </a>
    </div>
  );
};

export default Test;
