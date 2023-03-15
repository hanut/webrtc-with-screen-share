import PropTypes from "prop-types";

const CallActionButton = ({ label = "No Label", onClick }) => {
  return (
    <li
      className="my-1 mx-1 w-28 py-1 rounded-md text-center bg-red-900 cursor-pointer hover:bg-red-600 hover:scale-110 hover:translate-x-100"
      onClick={onClick}
    >
      {label}
    </li>
  );
};

CallActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CallActionButton;
