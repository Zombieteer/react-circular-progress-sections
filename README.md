# react-circular-progress-

This library is an extended version of [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar).
Since there are no graph packages out there that can provide such an awesome graph.
Not even the library mentioned above.

## Installation

```sh
npm i react-circular-progress-sections
```

## Usage

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
        <CircularProgressRing
          data={data}
          trailColor={trailColor}
          background={background}
        />
    );
```
##### Inner Text

For including the text inside the Circular Ring, add `innerText` key value pair in the `data` object
The value of key `innerText` can be `jsx` as well

## License

ISC

**Free Software, Hell Yeah!**
