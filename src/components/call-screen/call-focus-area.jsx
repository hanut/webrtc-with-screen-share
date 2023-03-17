import { LocalVideoEleId, RemoteVideoEleId } from "../../utils/media";
import CallTitle from "./call-title";

const CallFocusArea = () => {
  return (
    <div
      id="callFocusArea"
      className="h-full w-full flex flex-col justify-start items-center"
    >
      <CallTitle />
      <video
        id={LocalVideoEleId}
        className="left-0 right-0 -scale-x-100 h-1/2"
        autoPlay
        playsInline
      />
      <video
        id={RemoteVideoEleId}
        className="left-0 right-0 -scale-x-100 h-1/2"
        autoPlay
        playsInline
      />
    </div>
  );
};

export default CallFocusArea;
