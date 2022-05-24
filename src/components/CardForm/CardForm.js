import { connect } from 'react-redux'

import { addCard, editCard } from '../../state/actions/card.action'
import CardFormComponent from './CardForm.component'

const mapStateToProps = state => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  addCard: (title, description, cardId, columnId) => dispatch(addCard(title, description, cardId, columnId)),
  editCard: (title, description, cardId) => dispatch(editCard(title, description, cardId))
})

const CardForm = connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(CardFormComponent)

export default CardForm
