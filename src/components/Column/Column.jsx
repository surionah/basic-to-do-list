import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import data from '../../../data/data'

import Card from '../Card/Card'
import Button from '../Button/Button'
import Overlay from '../Overlay/Overlay'
import Actions from '../Actions/Actions'
import ColumnForm from '../ColumnForm/ColumnForm'
import CardForm from '../CardForm/CardForm'
import ModalContext from '../../context/modalContext'

import './Column.css'

const Column = ({ name }) => {
  const cards = data.find((item) => item.name === name).cards

  const [isMouseHover, setIsMouseHover] = useState(false)
  const { setIsModalOpen, setModalTitle, setModalBody } = useContext(ModalContext)

  const onCreate = () => {
    setModalTitle('Create card')
    setModalBody(<CardForm/>)
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  const onEdit = () => {
    setModalTitle('Edit column')
    setModalBody(<ColumnForm/>)
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  const onDelete = () => {
    setModalTitle('Delete column')
    setModalBody(<span>Are you sure to delete <strong>{name}</strong>?</span>)
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  return (
    <div className='column'>
      <div className='column__header' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
        <h2>{name}</h2> 
        <Overlay isMouseHover={isMouseHover}>
          <Actions editTooltip='Edit Column'
            deleteTooltip='Delete Column'
            onEditClick={onEdit}
            onDeleteClick={onDelete} />
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
