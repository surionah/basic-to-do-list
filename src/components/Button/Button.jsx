import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ children, tooltip, onButtonClick, type = 'secondary' }) => {
  return (
    <button
      className={`btn ${type}`}
      title={tooltip}
      onClick={onButtonClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  tooltip: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default Button
