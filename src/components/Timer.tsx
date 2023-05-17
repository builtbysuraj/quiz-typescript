import { useState, useEffect } from "react";

export default function Timer() {
  const [timer, setTimer] = useState<number>(30);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{timer}</>;
}
