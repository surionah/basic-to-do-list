import { createContext } from 'react'

const modalContext = {
  isModalOpen: false,
  setIsModalOpen: () => {}
}

const ModalContext = createContext(modalContext)

export default ModalContext

