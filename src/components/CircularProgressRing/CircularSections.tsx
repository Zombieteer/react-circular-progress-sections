/* eslint-disable no-unused-vars */
import { Fragment, SetStateAction, useEffect, useState } from "react";
import ProgressMap from "./ProgressMap";
import "./index.css";

const CircularSections = ({
  data,
  trailColor = "#fff",
  background = "#22C880",
}: any) => {
  const [activeData, setActiveData] = useState(0);

  const [localData, setLocalData]: any[] = useState([]);

  const changeActive = (i: SetStateAction<number>) => setActiveData(i);

  useEffect(() => {
    let total = 0;
    let totalTemp = [0];
    let gapPercent = (data.length * 0.7 * 100) / 360;
    for (let i = 0; i < data.length; i++) {
      total += data[i].total;
    }

    let localTempData: any[] = [];
    data.forEach((item: { completed: number; total: number }, id: number) => {
      let completePercent = (item.completed / item.total) * 100;
      let totalPercent = (item.total / total) * 100;
      localTempData.push({
        ...item,
        totalPercent: totalPercent - gapPercent,
        completePercent: completePercent,
        startPercent: totalTemp[id] + gapPercent,
      });
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
        {data.map((item: any, id: number) => {
          return (
            <div
              key={id}
              className={
                activeData === id ? "WidgetActiveUtil" : "WidgetInactiveUtil"
              }
              onClick={() => changeActive(id)}
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
