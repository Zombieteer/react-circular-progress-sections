# react-circular-progress-sections

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![npm](https://img.shields.io/npm/v/react-circular-progress-sections)](https://www.npmjs.com/package/react-circular-progress-sections)
[![GitHub repo size](https://img.shields.io/github/repo-size/zombieteer/react-circular-progress-sections)](https://github.com/Zombieteer/react-circular-progress-sections)
[![GitHub followers](https://img.shields.io/github/followers/zombieteer?style=social)](https://github.com/Zombieteer)

![Sample Image](https://github.com/Zombieteer/react-circular-progress-sections/blob/master/sample.png).

This library is an extended version of [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar).
Since there are no graph packages out there that can provide such an awesome graph.
Not even the library mentioned above.

## Installation

```sh
npm i react-circular-progress-sections
```

## Usage

Wrap the Component inside a `div` and provide it with a width

Set the `data` as array of objects,
Each object having 

- `name`, 
- `total` i.e. total value, 
- `completed` i.e. completed out of `total`,
- `color` i.e. color of that object,
- `innerText` i.e. jsx of the data inside the Ring

```
import CircularProgressRing from "react-circular-progress-sections";

    const [data, setData] = useState([
        { name: "Water", total: 200, completed: 150, color: "#4892FF" },
        { name: "Rent", total: 300, completed: 200, color: "#EB1B52" },
        { name: "Wifi + Cable", total: 400, completed: 400, color: "#68C600" },
        { name: "Gas + Electric", total: 500, completed: 410, color: "#FFD609" },
        { name: "Other", total: 100, completed: 70, color: "#8B572A" },
    ]);
    
    const [trailColor, setTrailColor] = useState("#fff");
    const [background, setBackground] = useState("#22C880");
  
    return (
	<div style={{ width: 800 }}>
		<CircularProgressRing
		  data={data}
		  trailColor={trailColor}
		  background={background}
		/>
	</div>
    );
```
##### Inner Text

For including the text inside the Circular Ring, add `innerText` key value pair in the `data` object
The value of key `innerText` can be `jsx` as well

## License

ISC

**Free Software, Hell Yeah!**
