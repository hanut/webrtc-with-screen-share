import CallTitle from "./call-title";

const CallFocusArea = () => {
  return (
    <div
      id="callFocusArea"
      className="h-full w-full flex flex-col justify-start items-center"
    >
      <CallTitle />
      <video
        id="videoPlayer"
        className="left-0 right-0 -scale-x-100 h-3/4"
        autoPlay
      />
    </div>
  );
};

export default CallFocusArea;
