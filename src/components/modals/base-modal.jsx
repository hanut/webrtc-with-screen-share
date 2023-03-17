import * as PropTypes from "prop-types";

const BaseModal = ({ show = false, children }) => {
  if (!show) return null;
  return <div className="absolute w-full h-full">{children}</div>;
};

BaseModal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default BaseModal;
