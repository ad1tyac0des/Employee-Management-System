import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard"
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
    const [user, setUser] = useState(null)

    const authData = useContext(AuthContext)
    // console.log(authData)

    const handleLogin = (email, password) => {
        if (authData && authData.admin.find((ad) => email===ad.email && password === ad.password)) {
            setUser('admin')
        } else if (authData && authData.employees.find((employee) => email === employee.email && password === employee.password)) {
            setUser('employee')
        } else {
            alert('Invalid email or password')
        }
    }

    return (
        <div>
            {!user ? <Login handleLogin={handleLogin} /> : user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard /> : ''}
        </div>
    )
}

export default App