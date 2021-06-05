import React from "react";
import styled from "styled-components";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

const Div = styled.div`
  /* Circular progress Div */
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.background};
  width: fit-content;
  margin: 0 auto;
  border-radius: 50%;
  padding: 4%;
  & > div:not(:last-child) {
    position: absolute;
  }
`;

const Divn = styled.div`
  transform: ${(props) =>
    props.activeData === null || props.activeData === props.id
      ? "scale(1.1)"
      : "scale(1)"};
  transition: unset;
`;

const CircularProgress = styled(CircularProgressbarWithChildren)`
  filter: drop-shadow(1.5px 1.5px 1px ${(props) => props.borderColor})
    drop-shadow(-1px 1px 0.4px ${(props) => props.borderColor})
    drop-shadow(1px -1px 0.4px ${(props) => props.borderColor})
    drop-shadow(-1px -1px 0.4px ${(props) => props.borderColor});
`;

export const ProgressMap = ({ data, activeData, trailColor, background }) => {
  return (
    <div style={{ position: "relative" }}>
      <Div background={background}>
        {data.map((item, id) => (
          <Divn key={id} activeData={activeData} id={id}>
            <ChangingProgressProvider values={[0, item.completePercent]}>
              {(values) => (
                <CircularProgress
                  borderColor={item.color}
                  value={values}
                  circleRatio={item.totalPercent / 100}
                  strokeWidth={activeData === id ? 14.9 : 12}
                  styles={buildStyles({
                    rotation: item.startPercent / 100,
                    strokeLinecap: "butt",
                    pathColor: `${item.color}`,
                    trailColor: trailColor,
                  })}
                >
                  {activeData === id ? item.innerText || <></> : <></>}
                </CircularProgress>
              )}
            </ChangingProgressProvider>
          </Divn>
        ))}
      </Div>
    </div>
  );
};

export default ProgressMap;
