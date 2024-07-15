import "../styles/AmharicDisplay.css"
import PropTypes from "prop-types";

const AmharicDisplay = ({ text }) => {
  return <div className="amharic-display">{text}</div>;
};

AmharicDisplay.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AmharicDisplay;