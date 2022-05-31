import { connect } from 'react-redux'

import DashboardComponent from './Dashboard.component'

const mapStateToProps = ({ columns }) => ({
  columns: Object.values(columns),
})

const Dashboard = connect(mapStateToProps)(DashboardComponent)

export default Dashboard
