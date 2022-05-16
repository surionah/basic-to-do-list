import PropTypes from 'prop-types'

import './Overlay.css'

const Overlay = ({ isMouseHover, children }) => {
  return (
    <div className={`overlay${isMouseHover ? ' visible' : ''}`}>{children}</div>
  )
}

Overlay.propTypes = {
  isMouseHover: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default Overlay
