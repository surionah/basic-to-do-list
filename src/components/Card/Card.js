import { connect } from 'react-redux'

import { removeCard } from '../../state/actions/card.action'
import CardComponent from './Card.component'

const mapStateToProps = (_, { title, description, id, columnId }) => ({
  title,
  description,
  id,
  columnId
})

const mapDispatchToProps = dispatch => ({
  removeCard: (id, columnId) => dispatch(removeCard(id, columnId))
})

const Card = connect(mapStateToProps, mapDispatchToProps)(CardComponent)

export default Card
