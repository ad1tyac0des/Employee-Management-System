import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard"

const App = () => {
    return (
        <div>
            {/* <Login /> */}
            {/* <EmployeeDashboard /> */}
            <AdminDashboard />
        </div>
    )
}

export default App