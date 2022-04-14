import { useState } from 'react'

import Input from '../Input/Input'

const ColumnForm = () => {

  const [name, setName] = useState('')

  return (
    <div>
      <Input name='column-name'
        label='Name'
        value={name}
        setValue={setName}
      />
    </div>
  )
}

export default ColumnForm

