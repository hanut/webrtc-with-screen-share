import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CallActionButtonLabels } from "../../labels";
import {
  callIsRunning,
  resetCall,
  setCallStarted,
} from "../../store/call.slice";
import {
  destroyMediaStream,
  getLocalAudioState,
  initializeMediaStream,
  setLocalAudioState,
} from "../../utils/media";
import CallActionButton from "./call-action-button";
import CallActionsFab from "./call-actions-fab";

const CallActions = () => {
  const isRunning = useSelector(callIsRunning);
  const dispatch = useDispatch();

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

  const onEndCall = useCallback(async () => {
    destroyMediaStream();
    dispatch(resetCall());
    setIsOpen(false);
  }, []);

  const onMuteSelf = useCallback(async () => {
    await setLocalAudioState(!getLocalAudioState());
    setIsOpen(false);
  }, []);

  const onCallStart = useCallback(async () => {
    await initializeMediaStream();
    dispatch(
      setCallStarted({
        participants: [{ name: "Hanut", id: Date.now() }],
        title: "My Call",
      })
    );
    setIsOpen(false);
  }, []);

  const { menuActions, callActions } = useMemo(() => {
    const menuActions = [],
      callActions = [];
    if (isRunning) {
      menuActions.push(
        {
          label: CallActionButtonLabels.ShareScreen,
          onClick: onShareScreen,
        },
        {
          label: CallActionButtonLabels.ShareCallLink,
          onClick: onShareCallLink,
        }
      );
      callActions.push(
        {
          label: CallActionButtonLabels.EndCall,
          onClick: onEndCall,
        },
        {
          label: CallActionButtonLabels.MuteSelf,
          onClick: onMuteSelf,
        }
      );
    } else {
      menuActions.push({
        label: CallActionButtonLabels.StartCall,
        onClick: onCallStart,
      });
    }
    return { menuActions, callActions };
  }, [isRunning]);

  return (
    <div id="callActions" className="absolute text-left left-4 bottom-8">
      <ul
        className={`flex flex-col mb-6 transition delay-150 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {menuActions.map(({ label, onClick }) => (
          <CallActionButton label={label} onClick={onClick} key={label} />
        ))}
      </ul>
      <CallActionsFab isOpen={isOpen} onClick={toggleMenu} />
      <ul className="flex flex-row w-full">
        {callActions.map(({ label, onClick }) => (
          <CallActionButton label={label} onClick={onClick} key={label} />
        ))}
      </ul>
    </div>
  );
};

export default CallActions;
