const EmployeeHeader = () => {
    return (
        <div className="flex items-center justify-between text-white">
            <h1 className="text-2xl leading-none md:text-3xl">Hello, <br /><span className="text-3xl md:text-4xl font-bold">Sarthak</span>👋</h1>
            <button className="px-3 py-1 rounded bg-red-500 text-sm md:text-lg font-semibold">Log Out</button>
        </div>
    )
}

export default EmployeeHeader
