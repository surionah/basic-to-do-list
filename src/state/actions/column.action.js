const ADD_COLUMN = 'ADD_COLUMN'
const REMOVE_COLUMN = 'REMOVE_COLUMN'
const EDIT_COLUMN = 'EDIT_COLUMN'

const addColumn = (name, columnId) => ({
  type: ADD_COLUMN,
  payload: { name, columnId },
})

const removeColumn = (id) => ({
  type: REMOVE_COLUMN,
  payload: { id },
})

const editColumn = (name, id) => ({
  type: EDIT_COLUMN,
  payload: { name, id },
})

export {
  ADD_COLUMN,
  REMOVE_COLUMN,
  EDIT_COLUMN,
  addColumn,
  removeColumn,
  editColumn,
}
