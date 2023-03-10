import { useSelector } from "react-redux";
import { selectCallTitle } from "../../store/call.slice";

const TalkingHead = ({ name }) => {
  return (
    <div className="rounded-full p-8 bg-red-100">
      <div className="rounded-full p-8 h-28 w-28 bg-red-900 text-5xl text-center items:center justify-center">
        {name.charAt(0)}
      </div>
    </div>
  );
};

const CallScreen = () => {
  const title = useSelector(selectCallTitle);

  return (
    <div className="pr-4 flex flex-col justify-center items-center md:flex-1">
      <h1 className="absolute top-2 tracking-wide right-4 text-3xl font-thin text-center md:text-right">
        {title}
      </h1>
      <TalkingHead name="Hanut" />
    </div>
  );
};

export default CallScreen;
