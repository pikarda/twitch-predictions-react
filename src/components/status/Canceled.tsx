import Outcomes from "../Outcomes";

import { Data } from "../../api-requests/interfaces";
import { barWidth, animationLength } from "../../../public/config";
import useSwitchStatus from "../../api-requests/useSwitchStatus";
import { divT, divT2, initialOpacity, resolvedFadeout, title, time } from "./Status.styles";

const Canceled = ({
  data,
  status,
  switchActive,
  switchCanceled,
  switchLocked,
  switchResolved,
}: Data) => {
  const args = {
    component: "Canceled",
    title,
    status,
    data,
    divT,
    divT2,
    resolvedFadeout,
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
      <p css={time}>Prediction Caceled</p>
      <Outcomes status={statusTimeouted} winner={data.winning_outcome_id} data={data.outcomes} />
    </div>
  );
};

export default Canceled;
