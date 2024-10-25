import EmployeeTaskCard from './EmployeeTaskCard'

const EmployeeTaskList = () => {
    return (
        <div className='flex-1 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 pt-6 lg:pt-10'>
            <EmployeeTaskCard />
        </div>
    )
}

export default EmployeeTaskList
