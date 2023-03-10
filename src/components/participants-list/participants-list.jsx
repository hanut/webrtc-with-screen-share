import { useCallback } from "react";
import { useSelector } from "react-redux";
import { ParticipantListLabels } from "../../labels";
import { selectCallParticipants } from "../../store/call.slice";
import PropTypes from "prop-types";

const ParticipantListActionButton = ({ icon, title, id, onClick }) => {
  return (
    <button className="mx-2" data-id={id} title={title} onClick={onClick}>
      {icon}
    </button>
  );
};
ParticipantListActionButton.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const ParticipantListItem = ({ name, id, onKick, onMute }) => {
  return (
    <div className="py-2 pl-4 participants-list-item-text flex flex-row justify-between">
      <div>{name}</div>
      <div>
        <ParticipantListActionButton
          icon="🥾"
          title="Kick from Call"
          id={id}
          onClick={onKick}
        />
        <ParticipantListActionButton
          icon="🔇"
          title="Mute this person"
          id={id}
          onClick={onMute}
        />
      </div>
    </div>
  );
};

ParticipantListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onKick: PropTypes.func.isRequired,
  onMute: PropTypes.func.isRequired,
};

const ParticipantsList = () => {
  const participants = useSelector(selectCallParticipants);

  const handleOnParticipantKicked = useCallback((e) => {
    const pid = e.target.dataset.id;
    console.log("Kicking the participant with id:", pid);
  }, []);
  const handleOnParticipantMuted = useCallback((e) => {
    const pid = e.target.dataset.id;
    console.log("Muting the participant with id:", pid);
  }, []);

  return (
    <div className="bg-white text-black md:w-72 overflow-y-scroll md:overflow-hidden">
      <h2 className="px-2 text-lg font-medium py-3 bg-red-900 text-white text-center">
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
              onKick={handleOnParticipantKicked}
              onMute={handleOnParticipantMuted}
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
