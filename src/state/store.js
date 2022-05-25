import { createStore, combineReducers } from 'redux'

import { columnsReducer } from './reducers/column.reducer'
import { cardsReducer } from './reducers/card.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
  combineReducers({
    columns: columnsReducer,
    cards: cardsReducer,
  }),
  composeWithDevTools()
)
