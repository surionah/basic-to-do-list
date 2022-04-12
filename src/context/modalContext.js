import { createContext } from 'react'

const modalContext = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalTitle: '',
  setModalTitle: () => {}
}

const ModalContext = createContext(modalContext)

export default ModalContext

