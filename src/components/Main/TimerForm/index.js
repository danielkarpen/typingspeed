import PropTypes from "prop-types";

function TimerForm({ handler }) {
  return (
    <form className="flex flex-col gap-3 items-center" onSubmit={handler}>
      <label htmlFor="secs" className="text-2xl">
        How Long Should the Test Run?
      </label>
      <input type="number" id="secs" placeholder="secs" className="w-24" />
      <button className="bg-neon-green cursor-pointer h-16 p-2 rounded-full text-2xl  text-gray-700 w-16 hover:animate-pulse focus:animate-pulse">
        Go!
      </button>
    </form>
  );
}

TimerForm.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default TimerForm;
