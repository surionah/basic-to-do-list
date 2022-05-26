import {
  forwardRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  useContext,
} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/Input'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'

const ColumnFormComp = forwardRef(({ columns, addColumn, editColumn }, ref) => {
  const { modalPurpose } = useContext(ModalContext)
  const { selectedColumnId } = useContext(DataContext)
  const [name, setName] = useState('')
  const isEdit = modalPurpose === 'EDIT_COLUMN'

  useImperativeHandle(ref, () => ({
    save: () => {
      !isEdit ? addColumn(name, Date.now()) : editColumn(name, selectedColumnId)
    },
  }))

  useLayoutEffect(() => {
    isEdit &&
      setName(
        Object.values(columns).find((column) => column.id === selectedColumnId)
          .name
      )
  }, [isEdit, columns])

  return (
    <div>
      <Input name='column-name' label='Name' value={name} setValue={setName} />
    </div>
  )
})

ColumnFormComp.displayName = 'ColumnFormComp'
ColumnFormComp.propTypes = {
  columns: PropTypes.object.isRequired,
  addColumn: PropTypes.func.isRequired,
  editColumn: PropTypes.func.isRequired,
}

export default ColumnFormComp
