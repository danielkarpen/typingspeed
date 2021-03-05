import { calcWPM } from "lib";
import { useEffect, useRef, useState } from "react";
import Form from "./Form";

function Main() {
  const [secsRemaining, setSecsRemaining] = useState(null);
  const [WPM, setWPM] = useState(0);

  const textareaRef = useRef();
  const startingSecs = useRef();

  useEffect(() => {
    if (secsRemaining) {
      setWPM(() => 0);
      const intervalId = setInterval(() => {
        setSecsRemaining((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  });

  useEffect(() => {
    if (!secsRemaining) {
      setWPM(
        () => `${calcWPM(textareaRef.current.value, startingSecs.current)} WPM`
      );
      textareaRef.current.blur();
      textareaRef.current.disabled = true;
    }
  }, [secsRemaining]);

  function handleKeyUp(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const secs = Number(event.target.elements[0].value);

    setSecsRemaining(secs);
    startingSecs.current = secs;
    textareaRef.current.value = "";
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <Form
        submitHandler={handleSubmit}
        label="How Long Should the Test Run?"
        type="number"
        placeholder="secs"
        buttonTxt="Go!"
      />
      <p className="text-2xl">{WPM ? `${WPM} words/min` : secsRemaining}</p>
      <textarea className="bg-gray-200 h-48 w-96" disabled ref={textareaRef} />
      {WPM ? (
        <Form
          submitHandler={handleSubmit}
          keyUpHandler={handleKeyUp}
          label="Enter Your Initials"
          type="text"
          buttonTxt="Submit"
        />
      ) : null}
    </main>
  );
}

export default Main;
