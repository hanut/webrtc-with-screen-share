import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ParticipantListLabels } from "../../labels";
import { selectCallParticipants } from "../../store/call.slice";

const ParticipantListItem = ({ name, id, onClick = () => {} }) => {
  return (
    <div className="py-2">
      <a
        data-id={id}
        className={`participants-list-item-text ${
          !!onClick && "cursor-pointer"
        } hover:font-normal hover:underline`}
        onClick={onClick}
      >
        {name}
      </a>
    </div>
  );
};

const ParticipantsList = () => {
  const participants = useSelector(selectCallParticipants);

  const handleOnParticipantClicked = useCallback(
    (e) => {
      const pid = e.target.dataset.id;
      console.log("Clicked the participant with id:", pid);
    },
    [participants]
  );

  return (
    <div className="bg-white text-black md:w-72 overflow-y-scroll md:overflow-hidden">
      <h2 className="px-2 text-lg font-medium py-3 bg-red-900 text-white">
        {ParticipantListLabels.Title}
      </h2>
      <hr className="px-2 invisible md:visible" />
      <div className="px-2 flex flex-col mt-2">
        {participants.length !== 0 ? (
          participants.map(({ name, id }) => (
            <ParticipantListItem
              name={name}
              key={id}
              id={id}
              onClick={handleOnParticipantClicked}
            />
          ))
        ) : (
          <h3 className="participants-list-item-text">
            {ParticipantListLabels.ZeroTitle}
          </h3>
        )}
      </div>
    </div>
  );
};

export default ParticipantsList;
