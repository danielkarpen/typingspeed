import TimerForm from "./TimerForm";
import TypingArea from "./TypingArea";

function Main() {
  return (
    <main className="flex flex-col gap-4 items-center mx-auto w-96">
      <TimerForm />
      <TypingArea />
    </main>
  );
}

export default Main;
