import Outcomes from "../Outcomes";

import { Data } from "../../api-requests/interfaces";
import { barWidth, animationLength } from "../../../public/config";
import useSwitchStatus from "../../api-requests/useSwitchStatus";
import { initialOpacity, lockedAnimation, time, title, divT } from "./Status.styles";

const Locked = ({
  data,
  status,
  switchActive,
  switchCanceled,
  switchLocked,
  switchResolved,
}: Data) => {
  const args = {
    component: "Locked",
    title,
    status,
    data,
    divT,
    lockedAnimation,
    animationLength,
    switchLocked,
    switchResolved,
    switchCanceled,
    switchActive,
  };

  const { fadeClass, statusTimeouted } = useSwitchStatus(args);

  return (
    <div css={fadeClass || initialOpacity} style={{ width: barWidth + "px" }}>
      <h2 css={title}>{data.title} </h2>
      <p css={time}>Prediction Locked</p>
      <Outcomes status={statusTimeouted} winner={data.winning_outcome_id} data={data.outcomes} />
    </div>
  );
};

export default Locked;
