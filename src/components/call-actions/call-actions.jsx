import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { CallActionButtonLabels } from "../../labels";

const CallActionButton = ({ label = "No Label", onClick }) => {
  return (
    <li
      className="my-1 px-2 py-1 rounded-md text-center bg-red-900 cursor-pointer hover:bg-red-600 hover:scale-110 hover:translate-x-100"
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

const CallActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onShareCallLink = useCallback(() => {
    alert("Sharing...");
    setIsOpen(false);
  }, []);

  const onEndCall = useCallback(() => {
    alert("Ending the call...");
    setIsOpen(false);
  }, []);

  return (
    <div className="absolute text-left left-4 bottom-8">
      <ul
        className={`flex flex-col mb-6 transition delay-150 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <CallActionButton
          label={CallActionButtonLabels.ShareCallLink}
          onClick={onShareCallLink}
        />
        <CallActionButton
          label={CallActionButtonLabels.EndCall}
          onClick={onEndCall}
        />
      </ul>
      <button
        className={`rounded-full w-10 h-10 pb-1 text-3xl text-center bg-red-900 transition delay-150 hover:scale-110 hover:translate-x-100 ${
          isOpen ? "-rotate-45 opacity-100" : "opacity-30 hover:opacity-100"
        }`}
        onClick={toggleMenu}
      >
        +
      </button>
    </div>
  );
};

export default CallActions;
