import PropTypes from 'prop-types'

import Button from '../Button/Button'

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
        label='Edit'
        onButtonClick={onEditClick}
      ></Button>
      <Button
        tooltip={deleteTooltip}
        label='Delete'
        onButtonClick={onDeleteClick}
      ></Button>
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
