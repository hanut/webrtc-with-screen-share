import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CallScreen from "./components/call-screen/call-screen";
import ParticipantsList from "./components/participants-list/participants-list";
import { setCallStarted } from "./store/call.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setCallStarted({
          title: "Test Call",
          participants: [
            { id: "p00001", name: "Participant One", muted: false, host: true },
            { id: "p00002", name: "Participant Two", muted: false },
          ],
        })
      );
    }, 800);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-screen h-screen md:overflow-hidden bg-black text-white">
      <CallScreen />
      <ParticipantsList />
    </div>
  );
}

export default App;
