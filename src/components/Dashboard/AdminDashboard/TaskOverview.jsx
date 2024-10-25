const TaskOverview = () => {
    return (
        <div className="mt-10 lg:mt-14">
            <h1 className="text-[1.7rem] md:text-3xl lg:text-4xl font-semibold">Task Overview</h1>
            <div className="flex flex-col gap-4 lg:gap-8 mt-5 lg:mt-8">
                {/* Task 1 */}
                <div className="w-full min-h-[8rem] bg-blue-500 flex flex-col gap-2 p-4 lg:p-6 rounded-md">
                    <span className="text-zinc-200 text-2xl lg:text-3xl font-bold leading-none">Sarthak</span>

                    <p className="w-full md:w-[80%] lg:w-[70%] xl:w-[45%] text-zinc-200 text-base md:text-lg lg:text-xl leading-none md:leading-tight lg:leading-tight">Make a UI design Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, at!</p>

                    <span className="w-fit px-2 py-1 lg:px-3 lg:py-2 mt-5 bg-emerald-500 rounded-md text-zinc-200 text-base lg:text-[1.08rem] leading-none tracking-tight">Completed</span>
                </div>

            </div>
        </div>
    )
}

export default TaskOverview
