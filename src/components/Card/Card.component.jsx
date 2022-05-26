import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'

import './Card.css'

const CardComponent = ({ title, description, id, columnId, removeCard }) => {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setModalPurpose } = useContext(ModalContext)
  const { setSelectedCardId } = useContext(DataContext)

  const onEdit = () => {
    setModalPurpose('EDIT_CARD')
    setSelectedCardId(id)
  }

  const onDelete = () => {
    removeCard(id, columnId)
  }

  return (
    <div
      className='card'
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Overlay isMouseHover={isMouseHover}>
        <Actions
          editTooltip='Edit Card'
          deleteTooltip='Delete Card'
          onEditClick={onEdit}
          onDeleteClick={onDelete}
        />
      </Overlay>
    </div>
  )
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  columnId: PropTypes.number.isRequired,
  removeCard: PropTypes.func.isRequired,
}

export default CardComponent
