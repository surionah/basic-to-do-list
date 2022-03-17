import { useState } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'

import './Card.css'

const Card = ({ title, description }) => {

  const [isMouseHover, setIsMouseHover] = useState(false)

  const onEdit = () => {
    console.log('Edit Card clicked!!!')
  }

  const onDelete = () => {
    console.log('Delete Card clicked!!!')
  }

  return (
    <div className='card' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
      <div className='card__info'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Overlay isMouseHover={isMouseHover}>
        <Actions editTooltip='Edit Card' deleteTooltip='Delete Card' onEditClick={onEdit} onDeleteClick={onDelete} />
      </Overlay>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
