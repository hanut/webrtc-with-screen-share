import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { CallActionButtonLabels } from "../../labels";
import { callIsRunning } from "../../store/call.slice";
import { initializeMediaStream } from "../../utils/media";
import CallActionButton from "./call-action-button";

const CallActions = () => {
  const isRunning = useSelector(callIsRunning);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onShareScreen = useCallback(() => {
    recordScreen();
    setIsOpen(false);
  }, []);

  const onShareCallLink = useCallback(() => {
    alert("Sharing...");
    setIsOpen(false);
  }, []);

  const onEndCall = useCallback(() => {
    alert("Ending the call...");
    setIsOpen(false);
  }, []);

  const onCallStart = useCallback(async () => {
    await initializeMediaStream();
    setIsOpen(false);
  }, []);

  const actions = useMemo(() => {
    const actions = [];
    if (isRunning) {
      actions.push({
        label: CallActionButtonLabels.ShareScreen,
        onClick: onShareScreen,
      });
      actions.push({
        label: CallActionButtonLabels.ShareCallLink,
        onClick: onShareCallLink,
      });
      actions.push({
        label: CallActionButtonLabels.EndCall,
        onClick: onEndCall,
      });
    } else {
      actions.push({
        label: CallActionButtonLabels.StartCall,
        onClick: onCallStart,
      });
    }
    return actions;
  }, [isRunning]);

  return (
    <div className="absolute text-left left-4 bottom-8">
      <ul
        className={`flex flex-col mb-6 transition delay-150 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {actions.map(({ label, onClick }) => (
          <CallActionButton label={label} onClick={onClick} key={label} />
        ))}
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
