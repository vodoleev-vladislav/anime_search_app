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

const Rating = React.memo((props) => {
  const [offset, setOffset] = useState(0);
  const { rating } = props;
  const circumference = 2 * Math.PI * 42;

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
    <RatingStyled colors={chooseCircleColors()}>
      <svg className="svg-container">
        <circle className="background" cx="50%" cy="50%" r="50%" />
        <circle
          className="circle-bg"
          cx="50%"
          cy="50%"
          r="42%"
          strokeWidth="8%"
        />
        <circle
          className="circle"
          cx="50%"
          cy="50%"
          r="42%"
          strokeWidth="8%"
          strokeDasharray={`${circumference}%`}
          strokeDashoffset={`${offset}%`}
        />
        <text
          className="text"
          x="50%"
          y="50%"
          alignmentBaseline="central"
          dominantBaseline="central"
          textAnchor="middle"
        >
          {Math.round(rating)}
          <tspan className="percentage">%</tspan>
        </text>
      </svg>
    </RatingStyled>
  );
});

const RatingStyled = styled.div`
  height: 6rem;
  width: 6rem;
  .svg-container {
    display: block;
    max-width: 100%;
    position: relative;
    font-family: "Asap", sans-serif;
    height: 100%;
    width: 100%;
  }

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
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  .text {
    font-size: ${(props) => props.theme.fontSizes.medium};
    fill: #fff;
    font-weight: bold;
  }

  .percentage {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export default Rating;
