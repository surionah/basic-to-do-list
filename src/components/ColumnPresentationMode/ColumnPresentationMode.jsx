import { useState } from 'react'

import Input from '../Input/Input'

const ColumnPresentationMode = () => {

  const [columnName, setColumnName] = useState('')

  return (
    <div className='column-presentation'>
      <Input name='column-name'
	label='Column name'
	value={columnName}
	setValue={setColumnName}
      />
    </div>
  )
}

export default ColumnPresentationMode

