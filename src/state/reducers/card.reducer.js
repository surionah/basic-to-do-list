import { cloneObject } from '../../utils/utils'
import { ADD_CARD, REMOVE_CARD, EDIT_CARD } from '../actions/card.action'

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
      const stateRemoveClon = cloneObject(state)
      delete stateRemoveClon[payload.cardId]
      return {
        ...stateRemoveClon,
      }
    case EDIT_CARD:
      const stateEditClon = cloneObject(state)
      const { [payload.cardId]: cardToEdit } = stateEditClon
      cardToEdit.title = payload.title
      cardToEdit.description = payload.description
      return {
        ...stateEditClon,
      }
    default:
      return state
  }
}
