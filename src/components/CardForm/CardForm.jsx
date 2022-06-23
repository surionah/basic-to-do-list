import {
  forwardRef,
  useState,
  useImperativeHandle,
  useLayoutEffect,
} from 'react'

import Input from '../Input/Input'
import useAppContext from '../../hooks/useAppContext'
import { useGetCardsQuery, useCreateCardMutation, useEditCardMutation } from '../../state/api-slices/card-api.slice'
import { useGetColumnsQuery, useEditColumnMutation } from '../../state/api-slices/column-api.slice'

const CardForm = forwardRef((_, ref) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { modalPurpose, selectedCardId, selectedColumnId } = useAppContext()
  const isEdit = modalPurpose === 'EDIT_CARD'
  const [ createCard ] = useCreateCardMutation()
  const [ editColumn ] = useEditColumnMutation()
  const [ editCard ] = useEditCardMutation()
  const { data: columns } = useGetColumnsQuery()
  const { data: cards } = useGetCardsQuery()

  useImperativeHandle(ref, () => ({
    save: () => {
      if (!isEdit) {
        const cardId = Date.now()
        createCard({id: cardId, title, description})
        const columnToEdit = {...columns.find(col => col.id === selectedColumnId)}
        columnToEdit.cardsIds = [...columnToEdit.cardsIds, cardId]
        editColumn(columnToEdit)
      } else {
        editCard({id: selectedCardId, title, description})
      }
    },
  }))

  useLayoutEffect(() => {
    if (isEdit) {
      const cardToEdit = cards.find(card => card.id === selectedCardId)
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

CardForm.displayName = 'CardForm'

export default CardForm
