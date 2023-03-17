import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ParticipantListLabels } from "../../labels";
import {
  selectCallParticipants,
  selectIsParticipantsListOpen,
  toggleParticipantsList,
} from "../../store/call.slice";
import ParticipantListItem from "./participants-list-item";

const ParticipantsList = () => {
  const participants = useSelector(selectCallParticipants);
  const isListOpen = useSelector(selectIsParticipantsListOpen);
  const dispatch = useDispatch();

  const handleOnParticipantKicked = useCallback((e) => {
    const pid = e.target.dataset.id;
    console.log("Kicking the participant with id:", pid);
  }, []);
  const handleOnParticipantMuted = useCallback((e) => {
    const pid = e.target.dataset.id;
    console.log("Muting the participant with id:", pid);
  }, []);
  const handleOpenParticipantsList = useCallback(
    (e) => {
      console.log("toggling participants list...", isListOpen);
      dispatch(toggleParticipantsList(!isListOpen));
    },
    [isListOpen]
  );

  if (participants.length === 0) {
    return null;
  }

  return (
    <div className={`h-full z-20`}>
      <button
        className={`absolute right-0 top-0 w-8 h-8 z-10 ${
          !isListOpen && "bg-yellow-500"
        }`}
        title="Open the participants list"
        onClick={handleOpenParticipantsList}
      >
        {isListOpen ? "✖️" : "📃"}
      </button>
      {isListOpen && (
        <div
          id="callParticipantsList"
          className="bg-white w-full text-black h-screen md:w-72 sm:w-full md:overflow-hidden"
        >
          <h2 className="p-2 font-medium text-center">
            {ParticipantListLabels.Title}
          </h2>
          <hr className="px-2 invisible md:visible" />
          <div className="px-2 flex flex-col mt-2">
            {participants.map(({ name, id }) => (
              <ParticipantListItem
                name={name}
                key={id}
                id={id}
                onKick={handleOnParticipantKicked}
                onMute={handleOnParticipantMuted}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantsList;
