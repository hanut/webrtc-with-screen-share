import { useSelector } from "react-redux";
import CallActions from "./components/call-actions/call-actions";
import CallFocusArea from "./components/call-screen/call-focus-area";
import ParticipantsList from "./components/participants-list/participants-list";
import { selectIsParticipantsListOpen } from "./store/call.slice";

function App() {
  return (
    <>
      <CallScreen />
    </>
  );
}

export default App;

export function CallScreen() {
  return (
    <div className="w-full h-full flex flex-row bg-black text-white overflow-hidden">
      <CallFocusArea />
      <ParticipantsList />
      <CallActions />
    </div>
  );
}
