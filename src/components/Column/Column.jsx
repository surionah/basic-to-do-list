//
import data from '../../../data/data'

import Card from '../Card/Card'
import Button from '../Button/Button'

import './Column.css'

const Column = () => {
  return (
    <div className='column'>
      <h2>Column 1</h2>
      {data.map((card) => (
        <Card title={card.title} description={card.description} key={card.id} />
        ))}
      <Button tooltip='Create new' label='Create' />
    </div>
  )
}

export default Column
