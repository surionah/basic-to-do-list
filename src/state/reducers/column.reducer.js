import { createStore } from 'redux'

import {
  ADD_COLUMN,
  REMOVE_COLUMN,
  EDIT_COLUMN
} from '../actions/column.action'

const columnsReducer = (state = { columns: [] }, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        columns: [
          ...state.columns,
          {
            id: Date.now(),
            name: action.payload.name
          }
        ]
      }
    case REMOVE_COLUMN:
      return {
        columns: [...state.columns.filter(column => column.id != action.payload.id)]
      }
    case EDIT_COLUMN:
      return {
        columns: [
          ...editColumnAt(state.columns, action.payload)
        ]
      }
    default:
      return state
  }
}

const editColumnAt = (columns, payload) => {
  const result = JSON.parse(JSON.stringify(columns))
  const indexToEdit = result.findIndex(column => column.id === payload.id)
  result[indexToEdit].name = payload.name
  return result
}

export const store = createStore(columnsReducer)

