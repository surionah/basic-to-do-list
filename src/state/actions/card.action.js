const ADD_CARD = 'ADD_CARD'
const REMOVE_CARD = 'REMOVE_CARD'
const EDIT_CARD = 'EDIT_CARD'

const addCard = (title, description, cardId, columnId) => ({
  type: ADD_CARD,
  payload: { title, description, cardId, columnId },
})

const removeCard = (cardId, columnId) => ({
  type: REMOVE_CARD,
  payload: { cardId, columnId },
})

const editCard = (title, description, cardId) => ({
  type: EDIT_CARD,
  payload: { title, description, cardId },
})

export { ADD_CARD, REMOVE_CARD, EDIT_CARD, addCard, removeCard, editCard }
