import PropTypes from 'prop-types'

const CardPresentationMode = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

CardPresentationMode.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default CardPresentationMode
