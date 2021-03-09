import PropTypes from "prop-types";

const Row = ({ initials, score }) => {
  return (
    <tr>
      <td>{initials}</td>
      <td>{score}</td>
    </tr>
  );
};

Row.propTypes = {
  initials: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default Row;
