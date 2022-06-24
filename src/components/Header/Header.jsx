import Button from '../Button/Button'
import useAppContext from '../../hooks/useAppContext'
import { AiOutlinePlus } from 'react-icons/ai'

import './Header.css'

const Header = () => {
  const { setModalPurpose } = useAppContext()

  const onCreate = () => {
    setModalPurpose('ADD_COLUMN')
  }

  return (
    <nav className='navbar'>
      <h3>To Do List</h3>
      <Button tooltip='Create new column' onButtonClick={onCreate}>
        <AiOutlinePlus />
        {'Add column'}
      </Button>
    </nav>
  )
}

export default Header
