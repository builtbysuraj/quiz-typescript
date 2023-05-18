import { useEffect } from "react";

type Props = {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  handleNext: () => void;
};

export default function Timer({ timer, setTimer, handleNext }: Props) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          handleNext();
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return <>{timer}</>;
}
