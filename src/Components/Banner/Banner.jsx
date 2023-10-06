

const Banner = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/K6G8bYd/Image-15.jpg")] w-full  h-[500px] bg-cover bg-no-repeat flex flex-col justify-center items-center gap-6'>
           <div>
           <p className=" text-white text-lg font-bold tracking-wide text-center">THE ART OF CREATING MOOD</p>
            <h1 className="font-semibold text-6xl text-white tracking-wide text-center">
            <i>Organization  of Events <br />  and <br /> Celebrations  of Any Scale</i>
            </h1>
           </div>
           <div className="flex justify-center gap-7">
                <div>
                    <h1 className="text-center font-semibold text-3xl text-white">14</h1>
                    <p className="text-red-700 font-semibold text-center">Years of Experience</p>
                </div>
                <div>
                    <h1 className="text-center font-semibold text-3xl text-white">400+</h1>
                    <p className="text-red-700 font-semibold text-center">Events Implements</p>
                </div>
           </div>
        </div>
    );
};

export default Banner;