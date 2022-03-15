import PropTypes from 'prop-types'

import data from '../../../data/data'

import Card from '../Card/Card'
import Button from '../Button/Button'
import Overlay from '../Overlay/Overlay'

import './Column.css'

const Column = ({ name }) => {
  const cards = data.find((item) => item.name === name).cards

  return (
    <div className='column'>
      <div className='column__header'>
        <h2>{name}</h2>
        <Overlay>
          <></>
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
