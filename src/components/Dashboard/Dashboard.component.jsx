import PropTypes from 'prop-types'

import Column from '../Column/Column'
import Button from '../Button/Button'
import useAppContext from '../../hooks/useAppContext'

import './Dashboard.css'

const DashboardComponent = ({ columns }) => {
  const { setModalPurpose } = useAppContext()

  const onCreate = () => {
    setModalPurpose('ADD_COLUMN')
  }

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
        ))}
      <div className='dashboard__create'>
        <Button
          tooltip='Create new column'
          label='Create'
          type='primary'
          onButtonClick={onCreate}
        />
      </div>
    </div>
  )
}

DashboardComponent.propTypes = {
  columns: PropTypes.array.isRequired,
}

export default DashboardComponent
