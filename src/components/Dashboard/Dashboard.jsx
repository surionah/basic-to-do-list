import data from '../../../data/data'

import Column from '../Column/Column'
import Button from '../Button/Button'

import './Dashboard.css'

const Dashboard = () => {

  const onCreate = () => {
    console.log('Create Column clicked!!!')
  }

  return (
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
  )
}

export default Dashboard
