import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ tooltip, label, onButtonClick, type = 'secondary' }) => {
  return (
    <button className={`btn ${type}`} title={tooltip} onClick={onButtonClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  tooltip: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  type: PropTypes.string,
}

export default Button
