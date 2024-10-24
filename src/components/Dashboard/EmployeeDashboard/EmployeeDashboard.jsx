import EmployeeHeader from './EmployeeHeader'
import EmployeeTaskSummary from './EmployeeTaskSummary'
import EmployeeTaskList from './EmployeeTaskList'

const EmployeeDashboard = () => {
    return (
        <div>
            <EmployeeHeader />
            <EmployeeTaskSummary />
            <EmployeeTaskList />
        </div>
    )
}

export default EmployeeDashboard
