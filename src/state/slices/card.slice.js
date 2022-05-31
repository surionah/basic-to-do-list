import { createSlice } from '@reduxjs/toolkit'

const defaultCardActionPrepare = (id, title, description) => ({
  payload: {
    id,
    title,
    description,
  },
})

export const cardSlice = createSlice({
  name: 'card',
  initialState: {},
  reducers: {
    addCard: {
      reducer: (state, { payload }) => ({
        ...state,
        [payload.id]: {
          id: payload.id,
          title: payload.title,
          description: payload.description,
        },
      }),
      prepare: defaultCardActionPrepare,
    },
    editCard: {
      reducer: (state, { payload }) => {
        const { [payload.id]: cardToEdit } = state
        cardToEdit.title = payload.title
        cardToEdit.description = payload.description
      },
      prepare: defaultCardActionPrepare,
    },
    removeCard: (state, action) => {
      delete state[action.payload]
    },
  },
})

export const { addCard, editCard, removeCard } = cardSlice.actions

export default cardSlice.reducer
