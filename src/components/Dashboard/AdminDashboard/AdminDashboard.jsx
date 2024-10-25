import DashboardHeader from '../shared/DashboardHeader'
import CreateTask from './CreateTask'
import TaskOverview from './TaskOverview'

const AdminDashboard = () => {
    return (
        <div className='w-full min-h-screen bg-zinc-950 px-5 md:px-14 pt-10 md:pt-12 pb-5 md:pb-10 text-white'>
            <DashboardHeader />
            <CreateTask />
            <TaskOverview />
        </div>
    )
}

export default AdminDashboard
