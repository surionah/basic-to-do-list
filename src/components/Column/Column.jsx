import { useState } from 'react'
import PropTypes from 'prop-types'
import { AiOutlinePlus } from 'react-icons/ai'

import Card from '../Card/Card'
import Button from '../Button/Button'
import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import useAppContext from '../../hooks/useAppContext'
import { useDeleteColumnMutation } from '../../state/api-slices/column-api.slice'
import {
  useGetCardsQuery,
  useDeleteCardMutation,
} from '../../state/api-slices/card-api.slice'

import './Column.css'

const Column = ({ name, id, cardsIds }) => {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setModalPurpose, setSelectedColumnId } = useAppContext()
  const [deleteColumn] = useDeleteColumnMutation()
  const { data: cards, isLoading } = useGetCardsQuery()
  const [deleteCard] = useDeleteCardMutation()

  const onCreate = () => {
    setModalPurpose('ADD_CARD')
    setSelectedColumnId(id)
  }

  const onEdit = () => {
    setModalPurpose('EDIT_COLUMN')
    setSelectedColumnId(id)
  }

  const onDelete = () => {
    cardsIds.forEach((id) => deleteCard(id))
    deleteColumn(id)
  }

  return (
    <div className='column'>
      <div
        className='column__header'
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
      >
        <h2>{name}</h2>
        <Overlay isMouseHover={isMouseHover}>
          <Actions
            editTooltip='Edit Column'
            deleteTooltip='Delete Column'
            onEditClick={onEdit}
            onDeleteClick={onDelete}
          />
        </Overlay>
      </div>
      {!isLoading &&
        cards.length > 0 &&
        cards
          .filter((card) => cardsIds.includes(card.id))
          .map((card) => (
            <Card
              title={card.title}
              description={card.description}
              columnId={id}
              id={card.id}
              key={card.id}
            />
          ))}
      <Button tooltip='Create new' onButtonClick={onCreate}>
        <AiOutlinePlus />
        {'Add card'}
      </Button>
    </div>
  )
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cardsIds: PropTypes.array.isRequired,
}

export default Column
