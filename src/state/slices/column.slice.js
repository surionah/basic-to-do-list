import { createSlice } from '@reduxjs/toolkit'

const defaultColumnActionPrepare = (id, name) => ({
  payload: {
    id,
    name
  }
})

const defaultCardActionPrepare = (columnId, cardId) => ({
  payload: {
    columnId,
    cardId
  }
})

export const columnSlice = createSlice({
  name: 'column',
  initialState: {},
  reducers: {
    addColumn: {
      reducer: (state, { payload }) => ({
        ...state,
        [payload.id]: {
          id: payload.id,
          name: payload.name,
          cardsIds: [],
        },
      }),
      prepare: defaultColumnActionPrepare
    },
    removeColumn: (state, action) => {
      delete state[action.payload]
    },
    editColumn: {
      reducer: (state, { payload }) => {
        const { [payload.id]: columnToEdit } = state
        columnToEdit.name = payload.name
      },
      prepare: defaultColumnActionPrepare
    },
    addCardToColumn: {
      reducer: (state, { payload}) => {
        const { [payload.columnId]: columnToAddCard } = state
        columnToAddCard.cardsIds.push(payload.cardId)
      },
      prepare: defaultCardActionPrepare
    },
    removeCardFromColumn: {
      reducer: (state, { payload }) => {
        const { [payload.columnId]: columnToRemoveCard } = state
        columnToRemoveCard.cardsIds = columnToRemoveCard.cardsIds.filter(id => id !== payload.cardId)
      },
      prepare: defaultCardActionPrepare
    }
  }
})

export const { addColumn, removeColumn, editColumn, addCardToColumn, removeCardFromColumn } = columnSlice.actions

export default columnSlice.reducer
