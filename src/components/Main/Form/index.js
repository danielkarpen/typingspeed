import PropTypes from "prop-types";

const Form = ({ handler, type, label, placeholder, buttonTxt }) => {
  return (
    <form className="flex flex-col gap-3 items-center" onSubmit={handler}>
      <label htmlFor="secs" className="text-2xl">
        {label}
      </label>
      <input type={type} id="secs" placeholder={placeholder} className="w-24" />
      <button className="bg-neon-green cursor-pointer h-16 p-2 rounded-full text-2xl  text-gray-700 w-16 hover:animate-pulse focus:animate-pulse">
        {buttonTxt}
      </button>
    </form>
  );
};

Form.propTypes = {
  handler: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  buttonTxt: PropTypes.string,
};

Form.defaultProps = { type: "text", placeholder: "", buttonTxt: "Submit" };

export default Form;
