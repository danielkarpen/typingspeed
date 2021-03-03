import { useEffect, useState } from "react";
import TimerForm from "./TimerForm";
import TypingArea from "./TypingArea";

function Main() {
  const [secsRemaining, setSecsRemaining] = useState(5);

  useEffect(() => {
    if (secsRemaining) {
      const intervalId = setInterval(() => {
        setSecsRemaining((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [secsRemaining]);

  function handleSubmit(event) {
    event.preventDefault();
    setSecsRemaining(event.target.elements[0].value);
  }

  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <TimerForm handler={handleSubmit} />
      <TypingArea />
    </main>
  );
}

export default Main;
