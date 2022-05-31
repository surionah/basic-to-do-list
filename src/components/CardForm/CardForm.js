import { connect } from 'react-redux'

import { addCard, editCard } from '../../state/slices/card.slice'
import { addCardToColumn } from '../../state/slices/column.slice'
import CardFormComponent from './CardForm.component'

const mapStateToProps = (state) => ({
  cards: state.cards,
})

const mapDispatchToProps = (dispatch) => ({
  addCard: (id, title, description) =>
    dispatch(addCard(id, title, description)),
  editCard: (id, title, description) =>
    dispatch(editCard(id, title, description)),
  addCardToColumn: (columnId, cardId) =>
    dispatch(addCardToColumn(columnId, cardId)),
})

const CardForm = connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(CardFormComponent)

export default CardForm
