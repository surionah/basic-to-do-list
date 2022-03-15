import PropTypes from 'prop-types'

import './Overlay.css'

const Overlay = ({ children }) => {
  return <div className='overlay'>{children}</div>
}

Overlay.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Overlay
