import { useEffect } from "react";

type Props = {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
};

export default function Timer({ timer, setTimer }: Props) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{timer}</>;
}
