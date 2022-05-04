import { useContext } from 'react'

import Column from '../Column/Column'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import ColumnForm from '../ColumnForm/ColumnForm'
import ModalContext from '../../context/modalContext'

import './Dashboard.css'

const Dashboard = () => {

  const data = []
  const { setIsModalOpen, setModalTitle, setModalBody } = useContext(ModalContext)

  const onCreate = () => {
    setModalTitle('Create column')
    setModalBody(<ColumnForm/>)
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
      <Modal />
    </>
  )
}

export default Dashboard
