import { createContext } from 'react'

const modalContext = {
  modalPurpose: '',
  setModalPurpose: () => {}
}

const ModalContext = createContext(modalContext)

export default ModalContext

