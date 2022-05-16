import {
  forwardRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  useContext,
} from 'react'

import Input from '../Input/Input'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'
import { addColumn, editColumn } from '../../state/actions/column.action'
import { store } from '../../state/reducers/column.reducer'

const ColumnFormComp = (props, ref) => {
  const { modalPurpose } = useContext(ModalContext)
  const { selectedColumnId } = useContext(DataContext)
  const { dispatch, getState } = store
  const [name, setName] = useState('')
  const isEdit = modalPurpose === 'EDIT_COLUMN'

  useImperativeHandle(ref, () => ({
    save: () => {
      !isEdit
        ? dispatch(addColumn(name))
        : dispatch(editColumn(name, selectedColumnId))
    },
  }))

  useLayoutEffect(() => {
    isEdit &&
      setName(
        getState().columns.find((column) => column.id === selectedColumnId).name
      )
  }, [modalPurpose])

  return (
    <div>
      <Input name='column-name' label='Name' value={name} setValue={setName} />
    </div>
  )
}

export default forwardRef(ColumnFormComp)
