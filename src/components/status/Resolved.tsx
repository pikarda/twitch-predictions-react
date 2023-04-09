import Outcomes from "../Outcomes";

import { Data } from "../../api-requests/interfaces";
import { barWidth, animationLength } from "../../../public/config";
import useSwitchStatus from "../../api-requests/useSwitchStatus";
import { divT, initialOpacity, resolvedFadeout, time, title } from "./Status.styles";

const Resolved = ({
  data,
  status,
  switchActive,
  switchCanceled,
  switchLocked,
  switchResolved,
}: Data) => {
  const args = {
    component: "Resolved",
    title,
    status,
    data,
    divT,
    resolvedFadeout,
    animationLength,
    switchLocked,
    switchResolved,
    switchCanceled,
    switchActive,
  };

  const { fadeClass, statusTimeouted } = useSwitchStatus(args);

  const amountOfPointsWinned = data.outcomes
    .filter((element) => element.id !== data.winning_outcome_id)
    .reduce((acc, curr) => acc + curr.channel_points, 0);

  return (
    <div css={fadeClass || initialOpacity} style={{ width: barWidth + "px" }}>
      <h2 css={title}>{data.title} </h2>
      <p css={time}>{`${amountOfPointsWinned} points goes to the winners`}</p>
      <Outcomes status={statusTimeouted} winner={data.winning_outcome_id} data={data.outcomes} />
    </div>
  );
};

export default Resolved;
