import PropTypes from "prop-types";

const CallActionButton = ({ label = "No Label", onClick }) => {
  return (
    <li
      className="my-1 mx-1 w-24 text-xs py-1 px-3 rounded-sm text-center bg-white text-black hover:text-white drop-shadow-md hover:drop-shadow-xl cursor-pointer hover:bg-blue-600 hover:scale-110 hover:z-10 outline outline-1 outline-transparent hover:outline-white"
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
