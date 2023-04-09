import Outcomes from "../Outcomes";

import { Data } from "../../api-requests/interfaces";
import { barWidth, animationLength } from "../../../public/config";
import { divT, divT2, initialOpacity, time, title } from "./Status.styles";
import useSwitchStatus from "../../api-requests/useSwitchStatus";

const Active = ({
  data,
  status,
  switchActive,
  switchCanceled,
  switchLocked,
  switchResolved,
}: Data) => {
  const args = {
    component: "Active",
    title,
    status,
    data,
    divT,
    divT2,
    animationLength,
    switchLocked,
    switchResolved,
    switchCanceled,
    switchActive,
  };

  const { fadeClass, statusTimeouted, remainingTime } = useSwitchStatus(args);

  return (
    <div css={fadeClass || initialOpacity} style={{ width: barWidth + "px" }}>
      <h2 css={title}>{data.title} </h2>
      <p css={time}>{remainingTime}</p>
      <Outcomes status={statusTimeouted} winner={data.winning_outcome_id} data={data.outcomes} />
    </div>
  );
};

export default Active;
