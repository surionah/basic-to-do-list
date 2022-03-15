import PropTypes from 'prop-types'

import './Card.css'

const Card = ({ title, description }) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Card
