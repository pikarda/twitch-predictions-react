import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import Active from "./status/Active";
import Locked from "./status/Locked";
import Canceled from "./status/Canceled";
import Resolved from "./status/Resolved";

import { FetchData } from "../api-requests/interfaces";

import getPredictions from "../api-requests/twitch-api";
import Guide from "./Guide";
import { clientId } from "../../public/config";

const DUMMY_DATA: FetchData = {
  title: "",
  winning_outcome_id: "null",
  status: "",
  remainingTime: "",
  outcomes: [],
  createdAt: "",
};

const Prediction = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<FetchData>(DUMMY_DATA);
  const [status, setStatus] = useState("");
  const [activeNotAllowed, setActiveNotAlloved] = useState(false);
  const [canceledNotAllowed, setCanceledNotAlloved] = useState(true);
  const [lockedNotAllowed, setLockedNotAlloved] = useState(true);
  const [resolvedNotAllowed, setResolvdNotAlloved] = useState(true);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const clientIdParam = searchParams.get("clientID");
  const auth = searchParams.get("auth");
  const authHash = document.location.hash.split("&")[0].split("=")[1];

  if (!authHash && (clientIdParam === null || auth === null)) {
    return <Guide />;
  }

  useEffect(() => {
    if (authHash) {
      navigate("/predictions?clientID=" + clientId + "&auth=" + authHash);
    }
    const apiCall = async () => {
      try {
        if (typeof clientIdParam === "string" && typeof auth === "string") {
          const predictionData = await getPredictions(clientIdParam, auth);
          setData(predictionData);
          setStatus(predictionData.status);
          setError("");
        }
      } catch (error: any) {
        setError(error);
      }
    };

    if (!authHash && (clientIdParam !== null || auth !== null)) {
      apiCall();
      const timeout = setInterval(apiCall, 1000);
      return () => {
        clearInterval(timeout);
      };
    }
  }, [authHash]);

  const switchAllowActive = (bool: boolean) => {
    setActiveNotAlloved(bool);
  };
  const switchAllowLocked = (bool: boolean) => {
    setLockedNotAlloved(bool);
  };
  const switchAllowCanceled = (bool: boolean) => {
    setCanceledNotAlloved(bool);
  };
  const switchAllowResolved = (bool: boolean) => {
    setResolvdNotAlloved(bool);
  };
  if (error) {
    return <h1 css={{ color: "red" }}>{error.toString()}</h1>;
  }
  if (!data.title) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        {!activeNotAllowed && (
          <Active
            switchActive={switchAllowActive}
            switchCanceled={switchAllowCanceled}
            switchLocked={switchAllowLocked}
            switchResolved={switchAllowResolved}
            status={status}
            data={data}
          />
        )}
        {!canceledNotAllowed && (
          <Canceled
            switchActive={switchAllowActive}
            switchCanceled={switchAllowCanceled}
            switchLocked={switchAllowLocked}
            switchResolved={switchAllowResolved}
            status={status}
            data={data}
          />
        )}
        {!lockedNotAllowed && (
          <Locked
            switchActive={switchAllowActive}
            switchCanceled={switchAllowCanceled}
            switchLocked={switchAllowLocked}
            switchResolved={switchAllowResolved}
            status={status}
            data={data}
          />
        )}
        {!resolvedNotAllowed && (
          <Resolved
            switchActive={switchAllowActive}
            switchCanceled={switchAllowCanceled}
            switchLocked={switchAllowLocked}
            switchResolved={switchAllowResolved}
            status={status}
            data={data}
          />
        )}
      </>
    );
  }
};

export default Prediction;
