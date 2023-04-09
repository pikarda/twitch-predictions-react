import { barMask, divSpan, innerBar, mainBar } from "./Bar.styles";

interface Points {
  points: number;
  biggerPoints: number;
  color: string;
}

const Bar = ({ points, biggerPoints, color }: Points) => {
  let width;

  if (biggerPoints === 0) {
    width = 3;
  }
  if (points === 0 && biggerPoints > 0) {
    width = 3;
  }
  if (points > 0 && biggerPoints > 0) {
    width = (points / biggerPoints) * 100;
  }

  let barColor;

  if (color === "PINK") {
    barColor = "#f5009b";
  }
  if (color === "BLUE") {
    barColor = "#387aff";
  }

  let percents;

  if (points === 0) {
    percents = "0%";
  }
  if (points > 0) {
    percents = ((points / biggerPoints) * 100).toFixed(0) + "%";
  }

  return (
    <>
      <div css={mainBar}>
        <div css={barMask}>
          <div css={[innerBar, { width: width + "%", backgroundColor: barColor }]}></div>
        </div>
      </div>
      <div css={divSpan}>
        <span>{percents}</span>
      </div>
    </>
  );
};

export default Bar;
