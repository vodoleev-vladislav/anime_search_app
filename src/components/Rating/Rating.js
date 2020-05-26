import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Rating = (props) => {
  const [offset, setOffset] = useState(0);
  const { rating } = props;
  const size = 100;
  const strokeWidth = 5;
  const circleOneStroke = "#fff";
  const circleTwoStroke = "#7ea9e1";
  const circleBackgroundFill = "#111";
  const center = size / 2;
  const radiusMain = size / 2 - strokeWidth / 2;
  const radius = radiusMain * 0.8;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const ratingOffset = ((100 - rating) / 100) * circumference;
    setOffset(ratingOffset);
  }, [setOffset, circumference, rating, offset]);

  return (
    <>
      <RatingStyled width={size} height={size}>
        <circle
          fill={circleBackgroundFill}
          cx={center}
          cy={center}
          r={radiusMain}
        />
        <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          transform="rotate(-90 50 50)"
          className="svg-circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text
          className="svg-circle-text"
          alignmentBaseline="central"
          x={center}
          y={center}
          // transform="translate(-50,-50)"
        >
          {rating}%
        </text>
      </RatingStyled>
    </>
  );
};

const RatingStyled = styled.svg`
  display: block;
  /* margin: 20px auto; */
  max-width: 100%;
  position: relative;

  .svg-circle-bg {
    fill: none;
  }

  .svg-circle {
    fill: none;
  }
  .svg-circle-text {
    font-size: 2rem;
    text-anchor: middle;
    fill: #fff;
    font-weight: bold;
    /* position: absolute;
    top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
  }
`;

export default Rating;
