import { useEffect, useRef } from "react"

export const usePrev = (value) => {
  const ref = useRef(0);
  console.log("re-render happend with new value " + value);
  useEffect(() => {
    console.log("updated the ref to be " + value);
    ref.current = value;
  }, [value]);
  console.log("returned " + ref.current);
  return ref.current;
}
