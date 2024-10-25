const EmployeeTaskCard = () => {
    return (
        <div className="w-full h-full bg-green-500 rounded-lg p-4 text-white">
            <div className='flex items-center justify-between'>
                <span className='px-3 py-1 rounded bg-red-500 text-sm md:text-base font-semibold'>High</span>
                <span className='font-semibold'>25 Oct 2024</span>
            </div>
            <div className='pt-5'>
                <h1 className='text-2xl md:text-3xl font-bold'>Make a Youtube Video</h1>
                <p className='text-lg md:text-xl leading-tight md:leading-tight mt-2 pr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quas? Itaque voluptatibus minima inventore vel incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus ratione voluptas iure neque quia quidem inventore modi ipsum nam maxime fugit praesentium nisi nobis eligendi veniam non minus, sed quas rem. Voluptatum error labore maiores laudantium quia similique? Sequi dolore corporis autem neque!</p>
            </div>
        </div>
    )
}

export default EmployeeTaskCard
