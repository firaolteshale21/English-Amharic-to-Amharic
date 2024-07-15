import PropTypes from "prop-types";
import "../styles/TextBox.css";

const TextBox = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Type in English..."
      className="text-box"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TextBox;
