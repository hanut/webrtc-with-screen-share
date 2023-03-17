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
  const [isMuted, setIsMuted] = useState(false);

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
    const localAudioState = getLocalAudioState();
    await setLocalAudioState(!localAudioState);
    setIsOpen(false);
    setIsMuted(localAudioState); // Since the localAudioState is the logical inverse of mutedState
  }, [isMuted]);

  const onCallStart = useCallback(async () => {
    await initializeMediaStream();
    dispatch(setCallStarted([{ name: "Hanut", id: Date.now() }]));
    setIsOpen(false);
  }, []);

  const onJoinCall = useCallback(async () => {
    alert("Joining a call...");
  }, []);

  return (
    <div
      id="callActions"
      className="absolute w-full bottom-0 text-left px-4 pb-3"
    >
      {isRunning && isOpen > 0 && (
        <>
          <ul className="flex flex-row justify-start">
            <CallActionButton
              label={CallActionButtonLabels.ShareScreen}
              onClick={onShareScreen}
            />
            <CallActionButton
              label={CallActionButtonLabels.ShareCallLink}
              onClick={onShareCallLink}
            />
          </ul>
        </>
      )}
      <ul className="flex flex-row w-full justify-start items-center">
        {isRunning && (
          <li>
            <CallActionsFab isOpen={isOpen} onClick={toggleMenu} />
          </li>
        )}
        {isRunning ? (
          <>
            <CallActionButton
              label={CallActionButtonLabels.EndCall}
              onClick={onEndCall}
            />
            <CallActionButton
              label={
                isMuted
                  ? CallActionButtonLabels.UnmuteSelf
                  : CallActionButtonLabels.MuteSelf
              }
              onClick={onMuteSelf}
            />
          </>
        ) : (
          <>
            <CallActionButton
              label={CallActionButtonLabels.StartCall}
              onClick={onCallStart}
            />
            <CallActionButton
              label={CallActionButtonLabels.JoinCall}
              onClick={onJoinCall}
            />
          </>
        )}
      </ul>
    </div>
  );
};

export default CallActions;
