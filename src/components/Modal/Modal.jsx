import { useRef, useEffect, useCallback } from 'react'

import Button from '../Button/Button'
import ColumnForm from '../ColumnForm/ColumnForm'
import CardForm from '../CardForm/CardForm'
import useAppContext from '../../hooks/useAppContext'

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
  const dialogRef = useRef(null)
  const isFirstTimeRef = useRef(null)
  const modalBodyRef = useRef(null)
  const { modalPurpose, setModalPurpose } = useAppContext()

  const onOkClick = () => {
    modalBodyRef.current.save()
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
      {modalPurpose.length > 0 &&
        (modalPurpose.indexOf('_COLUMN') >= 0 ? (
          <ColumnForm ref={modalBodyRef} />
        ) : (
          <CardForm ref={modalBodyRef} />
        ))}
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
