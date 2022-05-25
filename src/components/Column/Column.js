import { connect } from 'react-redux'

import { removeCard } from '../../state/actions/card.action'
import { removeColumn } from '../../state/actions/column.action'
import ColumnComponent from './Column.component'

const mapStateToProps = (state, { name, id, cardsIds }) => ({
  cardsState: state.cards,
  name,
  id,
  cardsIds,
})

const mapDispatchToProps = (dispatch) => ({
  removeCard: (cardId, columnId) => dispatch(removeCard(cardId, columnId)),
  removeColumn: (id) => dispatch(removeColumn(id)),
})

const Column = connect(mapStateToProps, mapDispatchToProps)(ColumnComponent)

export default Column
