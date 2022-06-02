import { useState } from 'react'
import { Provider } from 'react-redux'

import ModalContext from './context/modalContext'
import DataContext from './context/dataContext'
import Dashboard from './components/Dashboard/Dashboard'
import Modal from './components/Modal/Modal'
import Header from './components/Header/Header'
import { store } from './state/store'

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
          <Provider store={store}>
            <Header />
            <Dashboard />
            <Modal />
          </Provider>
        </DataContext.Provider>
      </ModalContext.Provider>
    </main>
  )
}

export default App
