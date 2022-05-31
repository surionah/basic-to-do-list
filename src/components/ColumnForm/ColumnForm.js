import { connect } from 'react-redux'

import { addColumn, editColumn } from '../../state/slices/column.slice'
import ColumnFormComponent from './ColumnForm.component'

const mapStateToProps = (state) => ({
  columns: Object.values(state.columns),
})

const mapDispatchToProps = (dispatch) => ({
  addColumn: (id, name) => dispatch(addColumn(id, name)),
  editColumn: (id, name) => dispatch(editColumn(id, name)),
})

const ColumnForm = connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ColumnFormComponent)

export default ColumnForm
