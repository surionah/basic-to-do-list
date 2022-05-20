import { useContext } from 'react'

import Column from '../Column/Column'
import Button from '../Button/Button'
import ModalContext from '../../context/modalContext'
import { store } from '../../state/store'

import './Dashboard.css'

const Dashboard = () => {
  const { columns } = store.getState()
  const { setModalPurpose } = useContext(ModalContext)

  const onCreate = () => {
    setModalPurpose('ADD_COLUMN')
  }

  return (
    <div className='dashboard'>
      {Object.values(columns).map((column) => (
        <Column name={column.name}
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

export default Dashboard
