/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import ProgressMap from "./ProgressMap";
import "./index.css";

const CircularSections = ({
  data,
  trailColor = "#fff",
  background = "#22C880",
}) => {
  const [activeData, setActiveData] = useState(0);

  const [localData, setLocalData] = useState([]);

  const changeActive = (e, i) => setActiveData(i);

  useEffect(() => {
    let total = 0;
    let totalTemp = [0];
    let gapPercent = (data.length * 0.7 * 100) / 360;
    for (let i = 0; i < data.length; i++) {
      total += data[i].total;
    }

    let localTempData = [];
    data.forEach((item, id) => {
      let completePercent = (item.completed / item.total) * 100;
      let totalPercent = (item.total / total) * 100;
      localTempData = [
        ...localTempData,
        {
          ...item,
          totalPercent: totalPercent - gapPercent,
          completePercent: completePercent,
          startPercent: totalTemp[id] + gapPercent,
        },
      ];
      totalTemp.push(totalTemp[id] + totalPercent);
    });
    setLocalData(localTempData);
  }, [data]);

  return (
    <Fragment>
      <ProgressMap
        data={localData}
        activeData={activeData}
        trailColor={trailColor}
        background={background}
      />

      <div className="WidgetUtils">
        {data.map((item, id) => {
          return (
            <div
              key={id}
              item
              className={
                activeData === id ? "WidgetActiveUtil" : "WidgetInactiveUtil"
              }
              onClick={(e) => changeActive(e, id)}
            >
              {item.icon ? <img src={item.icon} alt={item.name} /> : <></>}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CircularSections;
