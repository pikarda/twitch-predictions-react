import { useState, useEffect } from "react";

import { UseSwitch } from "./interfaces";

const useSwitchStatus = ({
  component,
  title,
  status,
  data,
  divT,
  divT2,
  resolvedFadeout,
  lockedAnimation,
  animationLength,
  switchLocked,
  switchResolved,
  switchCanceled,
  switchActive,
}: UseSwitch) => {
  const [fadeClass, setFadeClass] = useState<typeof title | null>(null);
  const [statusTimeouted, setStatusTimeouted] = useState(status);

  if (component === "Active" || component === "Canceled" || component === "Resolved")
    useEffect(() => {
      setFadeClass(divT);
    }, []);

  useEffect(() => {
    if (component === "Canceled") {
      setTimeout(() => {
        if (typeof resolvedFadeout !== "undefined") {
          setFadeClass(resolvedFadeout);
        }
      }, animationLength);
    }
    if (component === "Locked") {
      setTimeout(() => {
        if (typeof lockedAnimation !== "undefined") {
          setFadeClass(lockedAnimation);
        }
      }, animationLength);
    }
    if (component === "Resolved") {
      setTimeout(() => {
        if (typeof resolvedFadeout !== "undefined") {
          setFadeClass(resolvedFadeout);
        }
      }, animationLength);
    }

    const interval = setInterval(() => {
      if (
        (component === "Locked" || component === "Resolved" || component === "Canceled") &&
        status === "ACTIVE"
      ) {
        setTimeout(() => {
          if (component === "Locked") {
            switchLocked(true);
          }
          if (component === "Resolved") {
            switchResolved(true);
          }
          if (component === "Canceled") {
            switchCanceled(true);
          }
          switchActive(false);
          setStatusTimeouted(status);
          setFadeClass(null);
        }, animationLength);
      }
      if (
        (component === "Active" || component === "Resolved" || component === "Canceled") &&
        status === "LOCKED"
      ) {
        if (component === "Active" || component === "Canceled") {
          if (typeof divT2 !== "undefined") {
            setFadeClass(divT2);
          }
        }
        setTimeout(() => {
          if (component === "Active") {
            switchActive(true);
          }
          if (component === "Resolved") {
            switchResolved(true);
          }
          if (component === "Canceled") {
            switchCanceled(true);
          }
          switchLocked(false);
          setStatusTimeouted(status);
          setFadeClass(null);
        }, animationLength);
      }
      if (
        (component === "Active" || component === "Locked" || component === "Canceled") &&
        status === "RESOLVED"
      ) {
        if (component === "Active") {
          if (typeof divT2 !== "undefined") {
            setFadeClass(divT2);
          }
        }
        setTimeout(() => {
          if (component === "Active") {
            switchActive(true);
          }
          if (component === "Locked") {
            switchLocked(true);
          }
          if (component === "Canceled") {
            switchCanceled(true);
          }
          switchResolved(false);
          setStatusTimeouted(status);
          setFadeClass(null);
        }, animationLength);
      }
      if (
        (component === "Active" || component === "Locked" || component === "Resolved") &&
        status === "CANCELED"
      ) {
        if (component === "Active") {
          if (typeof divT2 !== "undefined") {
            setFadeClass(divT2);
          }
        }
        setTimeout(() => {
          if (component === "Active") {
            switchActive(true);
          }
          if (component === "Locked") {
            switchLocked(true);
          }
          if (component === "Resolved") {
            switchResolved(true);
          }
          switchCanceled(false);
          setStatusTimeouted(status);
          setFadeClass(null);
        }, animationLength);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [data]);

  let remainingTime;
  if (+data.remainingTime <= 0) {
    remainingTime = "";
  } else {
    remainingTime =
      +data.remainingTime - Math.floor(+data.remainingTime / 60) * 60 < 10
        ? `${
            Math.floor(+data.remainingTime / 60).toString() +
            ":0" +
            (+data.remainingTime - Math.floor(+data.remainingTime / 60) * 60)
          }`
        : `${
            Math.floor(+data.remainingTime / 60).toString() +
            ":" +
            (+data.remainingTime - Math.floor(+data.remainingTime / 60) * 60)
          }`;
  }

  return { fadeClass, statusTimeouted, remainingTime };
};

export default useSwitchStatus;
