import React from "react";
import { AnimatedSwitch, spring } from "react-router-transition";

const switchRule = `
  position: relative;
  & > div {
    position: absolute;
    overflow: hidden;
  }
`;

function glide(val) {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
}

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

export default (props) => {
  return (
    <AnimatedSwitch
      css={switchRule}
      mapStyles={(styles) => ({
        transform: `translateX(${styles.offset}%)`,
      })}
      {...pageTransitions}
    >
      {props.children}
    </AnimatedSwitch>
  );
};
