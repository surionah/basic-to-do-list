import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'
import { removeCard } from '../../state/actions/card.action'
import { store } from '../../state/store'

import './Card.css'

const Card = ({ title, description , id, columnId}) => {

  const { dispatch } = store
  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setModalPurpose } = useContext(ModalContext)
  const { setSelectedCardId } = useContext(DataContext)

  const onEdit = () => {
    setModalPurpose('EDIT_CARD')
    setSelectedCardId(id)
  }

  const onDelete = () => {
    dispatch(removeCard(id, columnId))
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
