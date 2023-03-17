import PropTypes from "prop-types";
import { useMemo } from "react";

const CallActionsFab = ({ isOpen, onClick }) => {
  const className = useMemo(() => {
    let rotClass = "";
    if (isOpen) rotClass = "-rotate-45";
    return `rounded-full w-8 h-8 mx-1 my-1 pb-1 text-center bg-white text-black hover:bg-blue-600 outline outline-1 outline-transparent hover:outline-white hover:text-white drop-shadow-xl transition hover:scale-105 ${rotClass}`;
  }, [isOpen]);

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
