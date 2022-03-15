import PropTypes from 'prop-types'

import './Button.css'

const Button = ({ tooltip, label }) => {
  return (
    <button className='btn' tooltip={tooltip}>
      {label}
    </button>
  )
}

Button.propTypes = {
  tooltip: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Button
