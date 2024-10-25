import DashboardHeader from '../shared/DashboardHeader'
import EmployeeTaskSummary from './EmployeeTaskSummary'
import EmployeeTaskList from './EmployeeTaskList'

const EmployeeDashboard = () => {
    return (
        <div className='w-full min-h-screen px-5 md:px-14 pt-10 md:pt-12 pb-5 md:pb-10 bg-zinc-950 flex flex-col'>
            <DashboardHeader />
            <EmployeeTaskSummary />
            <EmployeeTaskList />
        </div>
    )
}

export default EmployeeDashboard
