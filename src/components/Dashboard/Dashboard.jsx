import { useContext } from 'react'

import Column from '../Column/Column'
import Button from '../Button/Button'
import ModalContext from '../../context/modalContext'
import { store } from '../../state/reducers/column.reducer'

import './Dashboard.css'

const Dashboard = () => {

  const { columns } = store.getState()
  const { setModalPurpose } = useContext(ModalContext)

  const onCreate = () => {
    setModalPurpose('ADD_COLUMN')
  }

  return (
    <div className='dashboard'>
      {columns.map((column) => (
        <Column name={column.name} id={column.id} key={column.id} />
      ))}
      <div className='dashboard__create'>
        <Button tooltip='Create new column'
	        label='Create'
	        type='primary'
	        onButtonClick={onCreate}
	      />
      </div>
    </div>
  )
}

export default Dashboard
