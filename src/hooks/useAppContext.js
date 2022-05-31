import { useContext } from 'react'

import DataContext from '../context/dataContext'
import ModalContext from '../context/modalContext'

const useAppContext = () => {
  const {
    selectedCardId,
    selectedColumnId,
    setSelectedCardId,
    setSelectedColumnId,
  } = useContext(DataContext)
  const { modalPurpose, setModalPurpose } = useContext(ModalContext)

  return {
    selectedCardId,
    selectedColumnId,
    setSelectedCardId,
    setSelectedColumnId,
    modalPurpose,
    setModalPurpose,
  }
}

export default useAppContext
