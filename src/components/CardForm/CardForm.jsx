import { useState } from 'react'

import Input from '../Input/Input'

const CardForm = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div>
      <Input name='card-title'
        label='Title'
        value={title}
        setValue={setTitle}
      />
      <Input name='card-description'
        label='Description'
        value={description}
        setValue={setDescription}
      />
    </div>
  )
}

export default CardForm

