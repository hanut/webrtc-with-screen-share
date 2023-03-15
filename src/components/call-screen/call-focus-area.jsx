import { useSelector } from "react-redux";
import { selectCallTitle } from "../../store/call.slice";

const CallFocusArea = () => {
  const title = useSelector(selectCallTitle);

  return (
    <div
      id="callFocusArea"
      className="absolute h-screen w-screen flex flex-col justify-start items-stretch"
    >
      <h1 className="tracking-wide text-3xl font-thin z-10 pl-4 pt-4 text-shadow">
        {title}
      </h1>
      <video id="videoPlayer" className="absolute w-screen h-screen" autoPlay />
    </div>
  );
};

export default CallFocusArea;
