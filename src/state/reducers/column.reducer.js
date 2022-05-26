import { cloneObject } from '../../utils/utils'
import {
  ADD_COLUMN,
  REMOVE_COLUMN,
  EDIT_COLUMN,
} from '../actions/column.action'
import { ADD_CARD, REMOVE_CARD } from '../actions/card.action'

export const columnsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_COLUMN:
      return {
        ...state,
        [payload.columnId]: {
          id: payload.columnId,
          name: payload.name,
          cardsIds: [],
        },
      }
    case REMOVE_COLUMN:
      const stateRemoveClon = cloneObject(state)
      delete stateRemoveClon[payload.id]
      return {
        ...stateRemoveClon,
      }
    case EDIT_COLUMN:
      const stateEditColumnCopy = cloneObject(state)
      let { [payload.id]: columnToEdit } = stateEditColumnCopy
      columnToEdit.name = payload.name
      return {
        ...stateEditColumnCopy,
      }
    case ADD_CARD:
      const stateAddCardCopy = cloneObject(state)
      const { [payload.columnId]: columnToAddCard } = stateAddCardCopy
      columnToAddCard.cardsIds = [...columnToAddCard.cardsIds, payload.cardId]
      return {
        ...stateAddCardCopy,
      }
    case REMOVE_CARD:
      const removeCardStateCopy = cloneObject(state)
      const { [payload.columnId]: columnToRemoveCard } = removeCardStateCopy
      columnToRemoveCard.cardsIds = [
        ...columnToRemoveCard.cardsIds.filter(
          (cardId) => cardId !== payload.cardId
        ),
      ]
      return {
        ...removeCardStateCopy,
      }
    default:
      return state
  }
}
