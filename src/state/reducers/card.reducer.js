import {
  ADD_CARD,
  REMOVE_CARD,
  EDIT_CARD,
} from '../actions/card.action'

export const cardsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        [payload.cardId]: {
          id: payload.cardId,
          title: payload.title,
          description: payload.description,
        },
      }
    case REMOVE_CARD:
      const { [payload.cardId]: cardToRemove, ...removeRestState } = state
      return {
        ...removeRestState,
      }
    case EDIT_CARD:
      const stateCopy = JSON.parse(JSON.stringify(state))
      const { [payload.cardId]: cardToEdit } = stateCopy
      cardToEdit.title = payload.title
      cardToEdit.description = payload.description
      return {
        ...stateCopy,
      }
    default:
      return state
  }
}
