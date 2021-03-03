import PropTypes from "prop-types";

const Info = ({ msg }) => <p>{msg}</p>;

Info.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Info;
