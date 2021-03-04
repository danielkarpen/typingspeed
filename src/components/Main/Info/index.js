import PropTypes from "prop-types";

const Info = ({ msg }) => <p>{msg}</p>;

Info.propTypes = {
  msg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Info;
