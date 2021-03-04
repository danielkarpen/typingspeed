import { calcWPM } from "lib";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";

function Main() {
  const [secsRemaining, setSecsRemaining] = useState(null);
  const [currentMsg, setCurrentMsg] = useState("");

  const textareaRef = useRef();
  const startingSecs = useRef();

  useEffect(() => {
    if (secsRemaining) {
      const intervalId = setInterval(() => {
        setSecsRemaining((prev) => prev - 1);
        setCurrentMsg(() => `${secsRemaining} second(s) remain!`);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  });

  useEffect(() => {
    if (!secsRemaining) {
      setCurrentMsg(
        () => `${calcWPM(textareaRef.current.value, startingSecs.current)} WPM`
      );
      textareaRef.current.blur();
      textareaRef.current.disabled = true;
    }
  }, [secsRemaining]);

  function handleSubmit(event) {
    event.preventDefault();

    const secs = Number(event.target.elements[0].value);

    setSecsRemaining(secs);
    startingSecs.current = secs;
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <Form
        handler={handleSubmit}
        label="How Long Should the Test Run?"
        type="number"
        placeholder="secs"
        buttonTxt="Go!"
      />
      <p className="text-2xl">{currentMsg}</p>
      <textarea className="bg-gray-200 h-48 w-96" disabled ref={textareaRef} />
      <Form
        handler={handleSubmit}
        label="Enter Your Initials"
        type="text"
        buttonTxt="Submit"
      />
    </main>
  );
}

export default Main;
