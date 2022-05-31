import { useState } from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'
import Button from '../Button/Button'
import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import useAppContext from '../../hooks/useAppContext'

import './Column.css'

const ColumnComponent = ({
  cards,
  name,
  id,
  cardsIds,
  removeCard,
  removeColumn,
}) => {
  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setModalPurpose, setSelectedColumnId } = useAppContext()

  const onCreate = () => {
    setModalPurpose('ADD_CARD')
    setSelectedColumnId(id)
  }

  const onEdit = () => {
    setModalPurpose('EDIT_COLUMN')
    setSelectedColumnId(id)
  }

  const onDelete = () => {
    cardsIds.forEach((cardId) => {
      removeCard(cardId, id)
    })
    removeColumn(id)
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
      {cards.length > 0 &&
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
      <Button
        tooltip='Create new'
        label='Create'
        type='primary'
        onButtonClick={onCreate}
      />
    </div>
  )
}

ColumnComponent.propTypes = {
  cards: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cardsIds: PropTypes.array.isRequired,
  removeCard: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
}

export default ColumnComponent
