import {
  forwardRef,
  useContext,
  useState,
  useImperativeHandle,
  useLayoutEffect
} from 'react'

import Input from '../Input/Input'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'

const CardFormComp = ({ cards, addCard, editCard }, ref) => {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const { modalPurpose } = useContext(ModalContext)
  const { selectedCardId, selectedColumnId } = useContext(DataContext)
  const isEdit = modalPurpose === 'EDIT_CARD'

  useImperativeHandle(ref, () => ({
    save: () => {
      !isEdit
        ? addCard(title, description, Date.now(), selectedColumnId)
        : editCard(title, description, selectedCardId)
    },
  }))

  useLayoutEffect(() => {
    if (isEdit) {
      const cardToEdit = Object.values(cards).find((card) => card.id === selectedCardId)
      setTitle(cardToEdit.title)
      setDescription(cardToEdit.description)
    }
  }, [isEdit, cards, selectedCardId])

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
