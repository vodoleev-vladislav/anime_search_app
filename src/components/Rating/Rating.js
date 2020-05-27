import React, { useEffect, useState } from "react";
import styled from "styled-components";

const colors = {
  green: {
    bright: "#45ff2f",
    dark: "#13af00",
  },
  yellow: {
    bright: "#ffff00",
    dark: "#b3b300",
  },
  red: {
    bright: "#ff0000",
    dark: "#b30000",
  },
};

const Rating = (props) => {
  const [offset, setOffset] = useState(0);
  const { rating } = props;
  const size = 75;
  const strokeWidth = size * 0.1;
  const center = size / 2;
  const radiusMain = size / 2 - strokeWidth / 2;
  const radius = radiusMain * 0.8;
  const circumference = 2 * Math.PI * radius;

  const chooseCircleColors = () => {
    if (rating < 50) return colors.red;
    if (rating < 75) return colors.yellow;
    return colors.green;
  };

  useEffect(() => {
    const ratingOffset = ((100 - rating) / 100) * circumference;
    setOffset(ratingOffset);
  }, [setOffset, circumference, rating, offset]);

  if (!rating) return null;

  return (
    <>
      <RatingStyled width={size} height={size} colors={chooseCircleColors()}>
        <circle className="background" cx={center} cy={center} r={radiusMain} />
        <circle
          className="circle-bg"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="circle"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          className="text"
          x={center}
          y={center}
          alignmentBaseline="central"
          dominantBaseline="central"
          textAnchor="middle"
        >
          {Math.round(rating)}
          <tspan className="percentage">%</tspan>
        </text>
      </RatingStyled>
    </>
  );
};

const RatingStyled = styled.svg`
  display: block;
  max-width: 100%;
  position: relative;
  font-family: "Asap", sans-serif;

  .background {
    fill: ${(props) => props.theme.colors.primaryDark};
  }

  .circle-bg {
    stroke: ${(props) => props.colors.dark};
    fill: none;
  }

  .circle {
    stroke: ${(props) => props.colors.bright};
    fill: none;
  }
  .text {
    font-size: ${(props) => `${props.height / 3}px`};

    fill: #fff;
    font-weight: bold;
  }

  .percentage {
    font-size: ${(props) => `${props.height / 6}px`};
  }
`;

export default Rating;
