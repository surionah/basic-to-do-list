import { createContext } from 'react'

const modalContext = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalTitle: '',
  setModalTitle: () => {},
  modalBody: <></>,
  setModalBody: () => {}
}

const ModalContext = createContext(modalContext)

export default ModalContext

