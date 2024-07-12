import PropTypes from "prop-types";

const TextBox = ({ onChange }) => {
  return (
    <input
      type="text"
      placeholder="Type in English..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

  TextBox.propTypes = {
    onChange: PropTypes.func.isRequired,
  };

export default TextBox;
