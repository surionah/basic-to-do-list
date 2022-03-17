import { useState } from 'react'
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

  return (
    <div className='column'>
      <div className='column__header' onMouseEnter={() => setIsMouseHover(true)} onMouseLeave={() => setIsMouseHover(false)}>
        <h2>{name}</h2>
        <Overlay isMouseHover={isMouseHover}>
          <Actions editTooltip='Edit Card' deleteTooltip='Delete Card' />
        </Overlay>
      </div>
      {cards.map((card) => (
        <Card title={card.title} description={card.description} key={card.id} />
      ))}
      <Button tooltip='Create new' label='Create' />
    </div>
  )
}

Column.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Column
