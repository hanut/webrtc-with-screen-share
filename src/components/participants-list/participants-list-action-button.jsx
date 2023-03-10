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

export default ParticipantListActionButton;
