import {
  forwardRef,
  useContext,
  useState,
  useImperativeHandle,
  useLayoutEffect
} from 'react'

import Input from '../Input/Input'
import { store } from '../../state/store'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'
import { addCard, editCard } from '../../state/actions/card.action'

const CardFormComp = (_, ref) => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const { dispatch, getState } = store
  const { modalPurpose } = useContext(ModalContext)
  const { selectedCardId, selectedColumnId } = useContext(DataContext)
  const isEdit = modalPurpose === 'EDIT_CARD'

  useImperativeHandle(ref, () => ({
    save: () => {
      !isEdit
        ? dispatch(addCard(title, description, Date.now(), selectedColumnId))
        : dispatch(editCard(title, description, selectedCardId))
    },
  }))

  useLayoutEffect(() => {
    if (isEdit) {
      const cardToEdit = Object.values(getState().cards).find((card) => card.id === selectedCardId)
      setTitle(cardToEdit.title)
      setDescription(cardToEdit.description)
    }
  }, [modalPurpose])

  return (
    <div>
      <Input
        name='card-title'
        label='Title'
        value={title}
        setValue={setTitle}
      />
      <Input
        name='card-description'
        label='Description'
        value={description}
        setValue={setDescription}
      />
    </div>
  )
}

export default forwardRef(CardFormComp)
