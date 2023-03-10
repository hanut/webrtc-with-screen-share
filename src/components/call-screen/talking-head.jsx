import PropTypes from "prop-types";

const TalkingHead = ({ name }) => {
  return (
    <div className="rounded-full p-8 bg-red-100">
      <div className="rounded-full p-8 h-28 w-28 bg-red-900 text-5xl text-center items:center justify-center">
        {name.charAt(0)}
      </div>
    </div>
  );
};

TalkingHead.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TalkingHead;
