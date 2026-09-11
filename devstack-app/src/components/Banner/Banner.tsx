import BannerImg from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto lg:px-0 py-5'>

            <div className='w-[90%] lg:w-[45%] space-y-8 flex flex-col items-center justify-center lg:items-start'>
                <h1 className='text-4xl lg:text-5xl font-extrabold text-center lg:text-left'>Build Your Ideal <br /> <span className='bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>Development Stack</span></h1>

                <p className='text-sm text-center lg:text-left leading-6 text-gray-400'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>

                <div className='flex gap-4'>
                    <button className='bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-medium py-2 px-3 rounded-lg cursor-pointer active:scale-95'>Explore Technologies</button>
                    <button className='border-2 border-gray-300 rounded-lg py-2 px-8 cursor-pointer active:scale-95'>Learn More</button>
                </div>
            </div>

            <div>
                <img className='w-125 ' src={BannerImg} alt="DevStack Banner Image" />
            </div>

        </div>
    );
};

export default Banner;