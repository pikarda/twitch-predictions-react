import { circle, index } from "./Circle.styles";

interface Points {
  points: number;
  biggerPoints: number;
  color: string;
  outcomeNumber: number;
  divSize: number;
}

const Circle = ({ points, biggerPoints, color, outcomeNumber, divSize }: Points) => {
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

  let circleColor;

  if (color === "PINK") {
    circleColor = "#f5009b";
  }
  if (color === "BLUE") {
    circleColor = "#387aff";
  }

  let percents;

  if (points === 0) {
    percents = "0%";
  }
  if (points > 0) {
    percents = (points / biggerPoints) * 100 + "%";
  }

  return (
    <>
      <div css={[circle, { backgroundColor: circleColor }]}>
        <span css={{ fontSize: divSize * 0.23 }}>{percents}</span>
      </div>
      <span css={[index, { fontSize: divSize * 0.28 }]}>{outcomeNumber}</span>
    </>
  );
};

export default Circle;
