import { configureStore } from '@reduxjs/toolkit'

import columnReducer from './slices/column.slice'
import cardReducer from './slices/card.slice'

export const store = configureStore({
  reducer: {
    columns: columnReducer,
    cards: cardReducer,
  },
})
