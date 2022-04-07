import { useContext } from 'react'

import data from '../../../data/data'

import Column from '../Column/Column'
import Button from '../Button/Button'
import ModalForm from '../ModalForm/ModalForm'
import ModalContext from '../../context/modalContext'

import './Dashboard.css'

const Dashboard = () => {

  const { setIsModalOpen } = useContext(ModalContext)

  const onCreate = () => {
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  return (
    <>
      <div className='dashboard'>
        {data.map((column) => (
          <Column name={column.name} key={column.id} />
        ))}
        <div className='dashboard__create'>
          <Button tooltip='Create new column'
	          label='Create'
	          type='primary'
	          onButtonClick={onCreate}
	        />
        </div>
      </div>
      <ModalForm />
    </>
  )
}

export default Dashboard
