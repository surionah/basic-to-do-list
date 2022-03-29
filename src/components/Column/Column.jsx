import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import data from '../../../data/data'

import Card from '../Card/Card'
import Button from '../Button/Button'
import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'

import './Column.css'

const Column = ({ name }) => {
  const cards = data.find((item) => item.name === name).cards

  const [isMouseHover, setIsMouseHover] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  const onCreate = () => {
    console.log('Create Card clicked!!!')
  }

  const onDelete = () => {
    console.log('Delete Column clicked!!!')
  }

  useEffect(() => {
    isEditMode && setIsMouseHover(false)
  }, [isEditMode])

  return (
    <div className='column'>
      <div className='column__header' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
        {isEditMode ?
          <input type="text" value={name} /> :
          <h2>{name}</h2>
        }
        <Overlay isMouseHover={isMouseHover && !isEditMode}>
          <Actions editTooltip='Edit Column' deleteTooltip='Delete Column' onEditClick={() => setIsEditMode(true)} onDeleteClick={onDelete} />
        </Overlay>
      </div>
      {cards.map((card) => (
        <Card title={card.title} description={card.description} key={card.id} />
      ))}
      <Button tooltip='Create new'
	label='Create'
	type='primary'
	onButtonClick={onCreate}
      />
    </div>
  )
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Column
