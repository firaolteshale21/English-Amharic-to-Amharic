
import PropTypes from "prop-types";

const AmharicDisplay = ({ text }) => {
  return <div>{text}</div>;
};

AmharicDisplay.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AmharicDisplay;
