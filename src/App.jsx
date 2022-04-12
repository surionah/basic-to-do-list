import { useState } from 'react'

import ModalContext from './context/modalContext'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  return (
    <main className='container'>
      <ModalContext.Provider value={{isModalOpen, setIsModalOpen, modalTitle, setModalTitle}}>
        <Dashboard />
      </ModalContext.Provider>
    </main>
  )
}

export default App
