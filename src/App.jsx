import { useState } from 'react'

import ModalContext from './context/modalContext'
import DataContext from './context/dataContext'
import Dashboard from './components/Dashboard/Dashboard'
import Modal from './components/Modal/Modal'

const App = () => {
  const [modalPurpose, setModalPurpose] = useState('')
  const [selectedColumnId, setSelectedColumnId] = useState(0)
  const [selectedCardId, setSelectedCardId] = useState(0)

  return (
    <main className='container'>
      <ModalContext.Provider value={{ modalPurpose, setModalPurpose }}>
        <DataContext.Provider
          value={{
            selectedCardId,
            setSelectedCardId,
            selectedColumnId,
            setSelectedColumnId,
          }}
        >
          <Dashboard />
          <Modal />
        </DataContext.Provider>
      </ModalContext.Provider>
    </main>
  )
}

export default App
