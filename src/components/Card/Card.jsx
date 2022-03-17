import { useState } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'

import './Card.css'

const Card = ({ title, description }) => {

  const [isMouseHover, setIsMouseHover] = useState(false)

  return (
    <div className='card' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
      <div className='card__info'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Overlay isMouseHover={isMouseHover}>
        <Actions editTooltip='Edit Card' deleteTooltip='Delete Card' />
      </Overlay>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
