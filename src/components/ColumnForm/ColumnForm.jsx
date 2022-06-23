import {
  forwardRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
} from 'react'

import Input from '../Input/Input'
import useAppContext from '../../hooks/useAppContext'
import {
  useGetColumnsQuery,
  useCreateColumnMutation,
  useEditColumnMutation,
} from '../../state/api-slices/column-api.slice'

const ColumnForm = forwardRef((props, ref) => {
  const { modalPurpose, selectedColumnId } = useAppContext()
  const [name, setName] = useState('')
  const isEdit = modalPurpose === 'EDIT_COLUMN'
  const { data: columns } = useGetColumnsQuery()
  const [createColumn] = useCreateColumnMutation()
  const [editColumn] = useEditColumnMutation()

  useImperativeHandle(ref, () => ({
    save: () => {
      !isEdit
        ? createColumn({ id: Date.now(), name, cardsIds: [] })
        : editColumn({ id: selectedColumnId, name })
    },
  }))

  useLayoutEffect(() => {
    isEdit &&
      setName(columns.find((column) => column.id === selectedColumnId).name)
  }, [isEdit, columns])

  return (
    <div>
      <Input name='column-name' label='Name' value={name} setValue={setName} />
    </div>
  )
})

ColumnForm.displayName = 'ColumnForm'

export default ColumnForm
