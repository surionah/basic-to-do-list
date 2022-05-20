import { useRef, useEffect, useCallback, useContext } from 'react'

import Button from '../Button/Button'
import ColumnForm from '../ColumnForm/ColumnForm'
import CardForm from '../CardForm/CardForm'
import ModalContext from '../../context/modalContext'
import DataContext from '../../context/dataContext'
import { removeColumn } from '../../state/actions/column.action'
import { removeCard } from '../../state/actions/card.action'
import { store } from '../../state/store'

import './Modal.css'

const MODAL_TITLES = {
  ADD_COLUMN: 'Create new column',
  EDIT_COLUMN: 'Edit column',
  REMOVE_COLUMN: 'Remove column',
  ADD_CARD: 'Create new card',
  EDIT_CARD: 'Edit card',
  REMOVE_CARD: 'Remove card',
}

const Modal = () => {
  const { dispatch } = store
  const dialogRef = useRef(null)
  const isFirstTimeRef = useRef(null)
  const modalBodyRef = useRef(null)
  const { modalPurpose, setModalPurpose } = useContext(ModalContext)
  const { selectedColumnId, selectedCardId } = useContext(DataContext)

  const onOkClick = () => {
    switch(modalPurpose) {
      case 'REMOVE_COLUMN':
        dispatch(removeColumn(selectedColumnId))
        break
      case 'REMOVE_CARD':
        dispatch(removeCard(selectedCardId, selectedColumnId))
        break
      default:
        modalBodyRef.current.save()
        break
    }
    setModalPurpose('')
  }

  const onCancelClick = () => {
    setModalPurpose('')
  }

  const toggleDialog = useCallback(() => {
    modalPurpose !== ''
      ? dialogRef.current.showModal()
      : dialogRef.current.close()
  }, [modalPurpose])

  useEffect(() => {
    if (!isFirstTimeRef.current) {
      isFirstTimeRef.current = true
    } else {
      toggleDialog()
    }
  }, [modalPurpose])

  return (
    <dialog className='modal' ref={dialogRef}>
      <h2>{MODAL_TITLES[modalPurpose]}</h2>
      {modalPurpose.indexOf('REMOVE_') >= 0 ? (
        <span>Are you sure to delete this item?</span>
      ) : modalPurpose.indexOf('_COLUMN') >= 0 ? (
        <ColumnForm ref={modalBodyRef} />
      ) : (
        <CardForm ref={modalBodyRef} />
      )}
      <div className='modal__actions'>
        <Button
          tooltip='Ok'
          label='Ok'
          type='primary'
          onButtonClick={onOkClick}
        />
        <Button tooltip='Cancel' label='Cancel' onButtonClick={onCancelClick} />
      </div>
    </dialog>
  )
}

export default Modal
