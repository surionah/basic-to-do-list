import { connect } from 'react-redux'

import { removeCard } from '../../state/slices/card.slice'
import { removeCardFromColumn } from '../../state/slices/column.slice'
import CardComponent from './Card.component'

const mapStateToProps = (_, { title, description, id, columnId }) => ({
  title,
  description,
  id,
  columnId,
})

const mapDispatchToProps = (dispatch) => ({
  removeCard: (id) => dispatch(removeCard(id)),
  removeCardFromColumn: (columnId, cardId) =>
    dispatch(removeCardFromColumn(columnId, cardId)),
})

const Card = connect(mapStateToProps, mapDispatchToProps)(CardComponent)

export default Card
