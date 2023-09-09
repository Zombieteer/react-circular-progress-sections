import { Fragment, useEffect, useState } from "react";

export const ChangingProgressProvider = ({ values, children }: any) => {
  const [valuesIndex, setValueIndex] = useState(0);
  const interval = 0;

  useEffect(() => {
    setInterval(() => {
      setValueIndex((valuesIndex + 1) % values.length);
    }, interval);
  }, []);

  return <Fragment>{children(values[valuesIndex])}</Fragment>;
};

export default ChangingProgressProvider;
