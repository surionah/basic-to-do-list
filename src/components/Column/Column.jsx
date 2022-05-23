import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'
import Button from '../Button/Button'
import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import { removeCard } from '../../state/actions/card.action'
import { removeColumn } from '../../state/actions/column.action'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'
import { store } from '../../state/store'

import './Column.css'

const Column = ({ name, id, cardsIds }) => {

  const { getState, dispatch } = store
  const cardsState = getState().cards
  const cardsStateValues = Object.values(cardsState)
  const cards = cardsStateValues.length > 0 ? cardsStateValues.filter(card => cardsIds.includes(card.id)) : []
  const [ isMouseHover, setIsMouseHover ] = useState(false)
  const { setModalPurpose } = useContext(ModalContext)
  const { setSelectedColumnId } = useContext(DataContext)

  const onCreate = () => {
    setModalPurpose('ADD_CARD')
    setSelectedColumnId(id)
  }

  const onEdit = () => {
    setModalPurpose('EDIT_COLUMN')
    setSelectedColumnId(id)
  }

  const onDelete = () => {
    cardsIds.forEach(cardId => {
      dispatch(removeCard(cardId, id))
    });
    dispatch(removeColumn(id))
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
      {Object.values(cards).map((card) => (
        <Card title={card.title}
          description={card.description}
          columnId={id}
          id={card.id}
          key={card.id}
        />)
      )}
      <Button
        tooltip='Create new'
        label='Create'
        type='primary'
        onButtonClick={onCreate}
      />
    </div>
  )
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  cardsIds: PropTypes.array.isRequired,
}

export default Column
