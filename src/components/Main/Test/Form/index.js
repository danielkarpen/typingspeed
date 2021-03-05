import { removeNonLettersAndSpaces, toKebabCase } from "lib";
import PropTypes from "prop-types";
import { forwardRef } from "react";
console.log(forwardRef);
const Form = forwardRef(function Form(
  { keyUpHandler, submitHandler, type, label, placeholder, buttonTxt },
  ref
) {
  const kebab = toKebabCase(removeNonLettersAndSpaces(label));

  return (
    <form className="flex flex-col gap-3 items-center" onSubmit={submitHandler}>
      <label htmlFor={kebab} className="text-2xl">
        {label}
      </label>
      <input
        onKeyUp={keyUpHandler}
        type={type}
        id={kebab}
        placeholder={placeholder}
        className="w-24 focus:bg-gray-900"
        ref={ref}
      />
      <button className="bg-neon-green cursor-pointer h-16 p-2 rounded text-2xl  text-gray-700 w-40 hover:animate-pulse focus:animate-pulse">
        {buttonTxt}
      </button>
    </form>
  );
});

Form.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  keyUpHandler: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  buttonTxt: PropTypes.string,
};

Form.defaultProps = {
  type: "text",
  placeholder: "",
  buttonTxt: "Submit",
  onKeyUpHandler: () => {},
};

export default Form;
