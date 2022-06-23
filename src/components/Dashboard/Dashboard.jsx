import Column from '../Column/Column'
import { useGetColumnsQuery } from '../../state/api-slices/column-api.slice'

import './Dashboard.css'

const Dashboard = () => {

  const { data: columns, isLoading } = useGetColumnsQuery()

  return (
    <div className='dashboard'>
      {!isLoading &&
        columns.map((column) => (
          <Column
            name={column.name}
            id={column.id}
            cardsIds={column.cardsIds}
            key={column.id}
          />
        )
      )}
    </div>
  )
}

export default Dashboard
