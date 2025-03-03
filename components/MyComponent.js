import { useEffect, useState } from "react";

export default function MyComponent() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return <p>Window width: {width}</p>;
}
