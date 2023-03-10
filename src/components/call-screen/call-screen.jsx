import { useSelector } from "react-redux";
import { selectCallTitle } from "../../store/call.slice";
import CallActions from "../call-actions/call-actions";
import TalkingHead from "./talking-head";

const CallScreen = () => {
  const title = useSelector(selectCallTitle);

  return (
    <div className="pr-4 flex flex-col justify-center items-center md:flex-1">
      <h1 className="absolute top-2 tracking-wide left-4 text-3xl font-thin text-center md:text-right">
        {title}
      </h1>
      <TalkingHead name="Hanut" />
      <CallActions />
    </div>
  );
};

export default CallScreen;
