import { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../Input/Input'

const CardEditMode = ({ title, description }) => {

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  return (
    <div>
      <Input name='card-title' label='Card Title' value={newTitle} setValue={setNewTitle}></Input>
      <Input name='card-description' label='Card Description' value={newDescription} setValue={setNewDescription}></Input>
    </div>
  )
}

CardEditMode.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CardEditMode
