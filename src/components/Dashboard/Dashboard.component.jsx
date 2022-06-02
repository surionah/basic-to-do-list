import PropTypes from 'prop-types'

import Column from '../Column/Column'

import './Dashboard.css'

const DashboardComponent = ({ columns }) => {
  return (
    <div className='dashboard'>
      {columns.length > 0 &&
        columns.map((column) => (
          <Column
            name={column.name}
            id={column.id}
            cardsIds={column.cardsIds}
            key={column.id}
          />
        )
      )}
    </div>
  )
}

DashboardComponent.propTypes = {
  columns: PropTypes.array.isRequired,
}

export default DashboardComponent
