const EmployeeTaskSummary = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-white mt-6 lg:mt-10">
            <div className="bg-blue-500 w-[calc(50% - 1rem)] rounded px-4 lg:px-6 py-3 lg:py-5">
                <h1 className="text-4xl lg:text-5xl font-bold">0</h1>
                <p className="text-xl lg:text-2xl font-semibold mt-1 lg:mt-2">New Task</p>
            </div>

            <div className="bg-green-500 w-[calc(50% - 1rem)] rounded px-4 lg:px-6 py-3 lg:py-5">
                <h1 className="text-4xl lg:text-5xl font-bold">0</h1>
                <p className="text-xl lg:text-2xl font-semibold mt-1 lg:mt-2">Completed</p>
            </div>

            <div className="bg-amber-500 w-[calc(50% - 1rem)] rounded px-4 lg:px-6 py-3 lg:py-5">
                <h1 className="text-4xl lg:text-5xl font-bold">0</h1>
                <p className="text-xl lg:text-2xl font-semibold mt-1 lg:mt-2">Accepted</p>
            </div>

            <div className="bg-red-500 w-[calc(50% - 1rem)] rounded px-4 lg:px-6 py-3 lg:py-5">
                <h1 className="text-4xl lg:text-5xl font-bold">0</h1>
                <p className="text-xl lg:text-2xl font-semibold mt-1 lg:mt-2">Failed</p>
            </div>
        </div>
    )
}

export default EmployeeTaskSummary
