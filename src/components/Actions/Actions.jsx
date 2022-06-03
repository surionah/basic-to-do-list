import PropTypes from 'prop-types'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import Button from '../Button/Button'

import './Actions.css'

const Actions = ({
  editTooltip,
  deleteTooltip,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className='actions'>
      <Button
        tooltip={editTooltip}
        onButtonClick={onEditClick}
      >
        <AiOutlineEdit />
        {'Edit'}
      </Button>
      <Button
        tooltip={deleteTooltip}
        onButtonClick={onDeleteClick}
      >
        <AiOutlineDelete />
        {'Delete'}
      </Button>
    </div>
  )
}

Actions.propTypes = {
  editTooltip: PropTypes.string.isRequired,
  deleteTooltip: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default Actions
