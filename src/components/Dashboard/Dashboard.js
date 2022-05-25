import { connect } from 'react-redux'

import DashboardComponent from './Dashboard.component'

const mapStateToProps = (state) => ({
  columns: state.columns,
})

const Dashboard = connect(mapStateToProps)(DashboardComponent)

export default Dashboard
