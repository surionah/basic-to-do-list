import {
  forwardRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/Input'
import useAppContext from '../../hooks/useAppContext'

const ColumnFormComp = forwardRef(({ columns, addColumn, editColumn }, ref) => {
  const { modalPurpose, selectedColumnId } = useAppContext()
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
