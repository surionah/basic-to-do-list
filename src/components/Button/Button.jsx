import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ tooltip, label, onButtonClick }) => {
  return (
    <button className='btn' title={tooltip} onClick={onButtonClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  tooltip: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default Button
