import { connect } from 'react-redux'

import { addColumn, editColumn } from '../../state/actions/column.action'
import ColumnFormComponent from './ColumnForm.component'

const mapStateToProps = (state) => ({
  columns: state.columns,
})

const mapDispatchToProps = (dispatch) => ({
  addColumn: (name, id) => dispatch(addColumn(name, id)),
  editColumn: (name, columnId) => dispatch(editColumn(name, columnId)),
})

const ColumnForm = connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ColumnFormComponent)

export default ColumnForm
