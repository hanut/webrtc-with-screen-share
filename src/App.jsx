import CallScreen from "./components/call-screen/call-screen";
import ParticipantsList from "./components/participants-list/participants-list";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen md:overflow-hidden bg-black text-white">
      <CallScreen />
      <ParticipantsList />
    </div>
  );
}

export default App;
