import { useEffect, useState } from "react";

export default function Typewriter({ text }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return <p>{display}</p>;
}