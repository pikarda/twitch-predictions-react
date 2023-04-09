import Bar from "./ui/Bar";
import { barWidth } from "../../public/config";
import { OutcomeData } from "../api-requests/interfaces";
import icon from "../assets/svgexport-6.svg";
import Circle from "./ui/Circle";

import {
  lose,
  divTitle,
  divPoints,
  pointsIcon,
  lockedDiv,
  divForCircles,
  mainDiv,
} from "./Outcome.styles";

interface Data {
  data: OutcomeData[];
  winner?: string;
  status: string;
}

const Outcomes = ({ data, winner, status }: Data) => {
  const calculatepoints = data.reduce((acc: any, current: any) => {
    acc = current.channel_points + acc;
    return acc;
  }, 0);

  let renderOutcomes = <p></p>;

  if (status === "ACTIVE") {
    renderOutcomes = (
      <div css={mainDiv}>
        {data.map((element, index) => {
          return (
            <div key={index}>
              <div>
                <div css={divTitle}>
                  <span>{element.title}</span>
                </div>
                <div css={divPoints}>
                  <span>{element.channel_points}</span>
                  <img css={pointsIcon} src={icon} />
                </div>
              </div>
              <Bar
                color={element.color}
                points={element.channel_points}
                biggerPoints={calculatepoints}
              />
            </div>
          );
        })}
      </div>
    );
  }
  if (status === "LOCKED") {
    renderOutcomes = (
      <div css={[lockedDiv, { opacity: "40%" }]}>
        {data.map((element, index) => {
          return (
            <div
              key={index}
              css={[
                divForCircles,
                { width: barWidth / data.length + "px", height: barWidth / data.length + "px" },
              ]}
            >
              <Circle
                divSize={barWidth / data.length}
                outcomeNumber={index + 1}
                color={element.color}
                points={element.channel_points}
                biggerPoints={calculatepoints}
              />
            </div>
          );
        })}
      </div>
    );
  }
  if (status === "RESOLVED") {
    renderOutcomes = (
      <div css={mainDiv}>
        {data.map((element, index) => {
          return (
            <div key={index} css={element.id === winner ? "" : lose}>
              <div>
                <div css={divTitle}>
                  <span>{element.title}</span>
                </div>
                <div css={divPoints}>
                  <span>{element.channel_points}</span>
                  <img css={pointsIcon} src={icon} />
                </div>
              </div>
              <Bar
                color={element.color}
                points={element.channel_points}
                biggerPoints={calculatepoints}
              />
            </div>
          );
        })}
      </div>
    );
  }
  if (status === "CANCELED") {
    renderOutcomes = (
      <div css={mainDiv}>
        {data.map((element, index) => {
          return (
            <div key={index} css={lose}>
              <div>
                <div css={divTitle}>
                  <span>{element.title}</span>
                </div>
                <div css={divPoints}>
                  <span>{element.channel_points}</span>
                  <img css={pointsIcon} src={icon} />
                </div>
              </div>
              <Bar
                color={element.color}
                points={element.channel_points}
                biggerPoints={calculatepoints}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return renderOutcomes;
};

export default Outcomes;
