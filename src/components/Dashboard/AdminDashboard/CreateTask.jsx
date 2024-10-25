const CreateTask = () => {
    return (
        <div className="mt-10 lg:mt-14">
            <form className="flex flex-col lg:flex-row gap-5 lg:justify-between">
                <div className="flex flex-col gap-5 lg:w-[45%] 2xl:w-[40%]">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <label className="text-lg lg:text-xl" htmlFor="title">Task Title</label>
                        <input className="px-2 py-1 outline-none bg-transparent border border-zinc-600 rounded lg:text-lg" required type="text" id="title" placeholder="Make a UI design" />
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <label className="text-lg lg:text-xl" htmlFor="date">Date</label>
                        <input className="px-2 py-1 outline-none bg-transparent border border-zinc-600 rounded lg:text-lg" required type="date" id="date" />
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <label className="text-lg lg:text-xl" htmlFor="assignTo">Asign to</label>
                        <input className="px-2 py-1 outline-none bg-transparent border border-zinc-600 rounded lg:text-lg" required type="text" id="assignTo" placeholder="Arjun" />
                    </div>
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <label className="text-lg lg:text-xl" htmlFor="category">Category</label>
                        <input className="px-2 py-1 outline-none bg-transparent border border-zinc-600 rounded lg:text-lg" required type="text" id="category" placeholder="Design, Development, etc." />
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:w-[45%] 2xl:w-[40%] lg:justify-between">
                    <div className="flex flex-col gap-1 lg:gap-2">
                        <label className="text-lg lg:text-xl" htmlFor="description">Task Description</label>
                        <textarea className="w-full h-[10rem] lg:h-[14rem] resize-none px-2 lg:px-4 py-1 lg:py-2 leading-tight text-zinc-200 text-[1.08rem] lg:text-xl outline-none bg-transparent border border-zinc-600 rounded" required id="description" placeholder="Detailed description of the task (Max 200 characters)"/>
                    </div>
                    <div>
                        <button className="w-full bg-emerald-500 px-4 py-2 rounded-md text-lg lg:text-xl 2xl:text-2xl font-semibold" type="submit">Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
