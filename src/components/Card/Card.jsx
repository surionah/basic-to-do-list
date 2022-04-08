import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import CardPresentationMode from '../CardPresentationMode/CardPresentationMode'
import ModalContext from '../../context/modalContext'

import './Card.css'

const Card = ({ title, description }) => {

  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setIsModalOpen } = useContext(ModalContext);

  const onEdit = () => {
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  const onDelete = () => {
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  return (
    <div className='card' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
      <CardPresentationMode {...{ title, description }} />
      <Overlay isMouseHover={isMouseHover}>
        <Actions editTooltip='Edit Card'
          deleteTooltip='Delete Card'
          onEditClick={onEdit}
          onDeleteClick={onDelete}
        />
      </Overlay>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
