import PropTypes from 'prop-types'

import Button from '../Button/Button'

const Actions = ({
  editLabel,
  editTooltip,
  deleteLabel,
  deleteTooltip
}) => {

  return (
    <div className="actions">
      <Button tooltip={editTooltip} label='Edit'></Button>
      <Button tooltip={deleteTooltip} label='Delete'></Button>
    </div>
  )
}

Actions.propTypes = {
  editTooltip: PropTypes.string.isRequired,
  deleteTooltip: PropTypes.string.isRequired,
}

export default Actions
