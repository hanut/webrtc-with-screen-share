import PropTypes from "prop-types";

const CallActionsFab = ({ isOpen, onClick }) => {
  const className = `rounded-full w-12 h-12 pb-1 text-2xl text-center bg-red-900 transition delay-150 hover:scale-110 hover:translate-x-100 ${
    isOpen ? "-rotate-45 opacity-100" : "opacity-30 hover:opacity-100"
  }`;

  return (
    <button className={className} onClick={onClick}>
      +
    </button>
  );
};

CallActionsFab.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CallActionsFab;
