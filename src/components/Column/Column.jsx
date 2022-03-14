import data from '../../../data/data'

import Card from '../Card/Card'

import './Column.css'

const Column = () => {

  return (
    <div className='column'>
      <div className='column__header'>
        <h2>Column 1</h2>
      </div>
      {data.map((card) =>
        <Card title={card.title} description={card.description} key={card.id} />
      )}
    </div>
  )
}

export default Column
