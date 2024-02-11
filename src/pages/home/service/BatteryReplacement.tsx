import tracpad from '../../../assets/image/trackpad 1.png'

const BatteryReplacement = () => {
    return (
        <div className="bg-light-gray h-[300px] md:h-[448px] col-span-12 rounded-md">
        <div className='flex justify-between'>

            <div className=' px-7'>
                <h5>Battery Replacement</h5>
                <h3 className='mt-5 md:mt-28'>Get back to 100% battery health. <br />
                    With 6 month replacement warranty.  </h3>
            </div>
            <div className='h-[300px] md:h-[448px]'>
                <img className='w-full h-full' src={tracpad} alt="" />
            </div>

        </div>
        </div>
    );
};

export default BatteryReplacement;