import {
  forwardRef,
  useState,
  useImperativeHandle,
  useLayoutEffect,
} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/Input'
import useAppContext from '../../hooks/useAppContext'

const CardFormComp = forwardRef(({ cards, addCard, editCard }, ref) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { modalPurpose, selectedCardId, selectedColumnId } = useAppContext()
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
      const cardToEdit = Object.values(cards).find(
        (card) => card.id === selectedCardId
      )
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
})

CardFormComp.displayName = 'CardFormComp'
CardFormComp.propTypes = {
  cards: PropTypes.object.isRequired,
  addCard: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
}

export default CardFormComp
