import { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'


import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import CardPresentationMode from '../CardPresentationMode/CardPresentationMode'
import CardEditMode from '../CardEditMode/CardEditMode'

import './Card.css'

const Card = ({ title, description }) => {

  const [isMouseHover, setIsMouseHover] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  const onDelete = () => {
    console.log('Delete Card clicked!!!')
  }

  useEffect(() => {
    isEditMode && setIsMouseHover(false)
  }, [isEditMode])

  return (
    <div className='card' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
      {isEditMode ?
        <CardEditMode {...{ title, description }} /> :
        <CardPresentationMode {...{ title, description }} />
      }
      <Overlay isMouseHover={isMouseHover && !isEditMode}>
        <Actions editTooltip='Edit Card' deleteTooltip='Delete Card' onEditClick={() => setIsEditMode(true)} onDeleteClick={onDelete} />
      </Overlay>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
