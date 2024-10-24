import EmployeeHeader from './EmployeeHeader'
import EmployeeTaskSummary from './EmployeeTaskSummary'
import EmployeeTaskList from './EmployeeTaskList'

const EmployeeDashboard = () => {
    return (
        <div className='w-full h-screen px-5 md:px-14 pt-10 md:pt-12 bg-zinc-950'>
            <EmployeeHeader />
            <EmployeeTaskSummary />
            <EmployeeTaskList />
        </div>
    )
}

export default EmployeeDashboard
