import { connect } from 'react-redux'

import { removeColumn } from '../../state/slices/column.slice'
import { removeCard } from '../../state/slices/card.slice'
import ColumnComponent from './Column.component'

const mapStateToProps = (state, { name, id, cardsIds }) => ({
  cards: Object.values(state.cards),
  name,
  id,
  cardsIds,
})

const mapDispatchToProps = (dispatch) => ({
  removeCard: (id) => dispatch(removeCard(id)),
  removeColumn: (id) => dispatch(removeColumn(id)),
})

const Column = connect(mapStateToProps, mapDispatchToProps)(ColumnComponent)

export default Column
