import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'

import './Card.css'

const Card = ({ title, description }) => {
  return (
    <div className='card'>
      <div className='card__info'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Overlay>
        <></>
      </Overlay>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
