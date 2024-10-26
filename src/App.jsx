import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard/AdminDashboard"
import { useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";

const App = () => {

    useEffect(() => {
        setLocalStorage()
        getLocalStorage()
    }, [])

    return (
        <div>
            <Login />
            {/* <EmployeeDashboard /> */}
            {/* <AdminDashboard /> */}
        </div>
    )
}

export default App