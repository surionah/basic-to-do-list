import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import ModalContext from '../../context/modalContext'

import './Card.css'

const Card = ({ title, description }) => {

  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setIsModalOpen, setModalTitle } = useContext(ModalContext);

  const onEdit = () => {
    setModalTitle('Edit card')
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  const onDelete = () => {
    setModalTitle('Delete card')
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  return (
    <div className='card'
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
