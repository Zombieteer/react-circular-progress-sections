import React, {useState} from "react";
import { storiesOf } from "@storybook/react";

import CircularProgressRing from "../components/CircularProgressRing";

const stories = storiesOf("APP TEST", module);

stories.add("App", () => {
  const [data, setData] = useState([
    { name: "Water", total: 200, completed: 150, color: "#4892FF", innerText: '11' },
    { name: "Rent", total: 300, completed: 200, color: "#EB1B52" },
    { name: "Wifi + Cable", total: 400, completed: 400, color: "#68C600" },
    { name: "Gas + Electric", total: 500, completed: 410, color: "#FFD609" },
    { name: "Other", total: 100, completed: 70, color: "#8B572A" },
  ]);

  const [trailColor, setTrailColor] = useState("#fff");
  const [background, setBackground] = useState("#22C880");
  return (
    <CircularProgressRing
      data={data}
      trailColor={trailColor}
      background={background}
    />
  );
});
