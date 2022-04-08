import { useRef, useEffect, useCallback, useContext } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'
import ModalContext from '../../context/modalContext'

import './Modal.css'

const Modal = ({ title, children }) => {

  const dialogRef = useRef(null)
  const isFirstTimeRef = useRef(null)
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)

  const onSaveClick = () => {
    console.log('Save clicked!!!')
  }

  const onCancelClick = () => {
    setIsModalOpen(isModalOpen => !isModalOpen)
  }

  const toggleDialog = useCallback(() => {
    isModalOpen ? dialogRef.current.showModal() : dialogRef.current.close()
  }, [isModalOpen])

  useEffect(() => {
    if (!isFirstTimeRef.current) {
      isFirstTimeRef.current = true
    } else {
      toggleDialog()
    }
  }, [isModalOpen])
    
  return (
    <dialog className='modal' ref={dialogRef}>
      <h2>{title}</h2>
      {children}
      <div className='modal__actions'>
        <Button tooltip='Ok'
          label='Ok'
          type='primary'
          onButtonClick={onSaveClick}
        />
        <Button tooltip='Cancel'
          label='Cancel'
          onButtonClick={onCancelClick}
        />
      </div>
    </dialog>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Modal

