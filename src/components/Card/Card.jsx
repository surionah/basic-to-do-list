import { useState } from 'react'
import PropTypes from 'prop-types'

import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import useAppContext from '../../hooks/useAppContext'
import { useDeleteCardMutation } from '../../state/api-slices/card-api.slice'
import {
  useGetColumnsQuery,
  useEditColumnMutation,
} from '../../state/api-slices/column-api.slice'

import './Card.css'

const Card = ({ title, description, id, columnId }) => {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setModalPurpose, setSelectedCardId } = useAppContext()
  const { data: columns } = useGetColumnsQuery()
  const [deleteCard] = useDeleteCardMutation()
  const [editColumn] = useEditColumnMutation()

  const onEdit = () => {
    setModalPurpose('EDIT_CARD')
    setSelectedCardId(id)
  }

  const onDelete = () => {
    deleteCard(id)
    const columnToEdit = { ...columns.find((col) => col.id === columnId) }
    columnToEdit.cardsIds = columnToEdit.cardsIds.filter((card) => card !== id)
    editColumn(columnToEdit)
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
  id: PropTypes.string.isRequired,
  columnId: PropTypes.number.isRequired,
}

export default Card
