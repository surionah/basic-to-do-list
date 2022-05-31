import {
  forwardRef,
  useState,
  useImperativeHandle,
  useLayoutEffect,
} from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/Input'
import useAppContext from '../../hooks/useAppContext'

const CardFormComp = forwardRef(({ cards, addCard, editCard, addCardToColumn }, ref) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { modalPurpose, selectedCardId, selectedColumnId } = useAppContext()
  const isEdit = modalPurpose === 'EDIT_CARD'

  useImperativeHandle(ref, () => ({
    save: () => {
      if (!isEdit) {
        const cardId = Date.now()
        addCard(cardId, title, description)
        addCardToColumn(selectedColumnId, cardId)
      } else {
        editCard(selectedCardId, title, description)
      }
    },
  }))

  useLayoutEffect(() => {
    if (isEdit) {
      const { [selectedCardId]: cardToEdit } = cards
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
  addCardToColumn: PropTypes.func.isRequired
}

export default CardFormComp
