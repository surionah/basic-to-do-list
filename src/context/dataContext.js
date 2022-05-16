import { createContext } from 'react'

const dataContext = {
  selectedColumnId: 0,
  setSelectedColumnId: () => {},
  selectedCardId: 0,
  setSelectedCardId: () => {},
}

const DataContext = createContext(dataContext)

export default DataContext
