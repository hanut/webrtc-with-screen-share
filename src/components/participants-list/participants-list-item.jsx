import PropTypes from "prop-types";
import ParticipantListActionButton from "./participants-list-action-button";

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

export default ParticipantListItem;
