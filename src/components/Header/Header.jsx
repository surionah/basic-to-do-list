import Button from '../Button/Button'
import useAppContext from '../../hooks/useAppContext'

import './Header.css'

const Header = () => {

  const { setModalPurpose } = useAppContext()

  const onCreate = () => {
    setModalPurpose('ADD_COLUMN')
  }

  return (
    <nav className='navbar'>
      <h3>ToDo List</h3>
      <Button
        tooltip='Create new column'
        label='Add column'
        onButtonClick={onCreate}
      />
    </nav>
  )
}

export default Header