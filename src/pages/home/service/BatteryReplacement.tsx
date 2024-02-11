import tracpad from '../../../assets/image/trackpad 1.png'

const BatteryReplacement = () => {
    return (
        <div className='grid gap-5 grid-cols-12'>

            <div className='col-span-6'>
                <p>Battery Replacement</p>
                <h4>Get back to 100% battery health.
                    With 6 month replacement warranty.  </h4>
            </div>
            <div className='h-[100%] col-span-6 bg-red-400'>
                <img className='object-contain' src={tracpad} alt="" />
            </div>

        </div>
    );
};

export default BatteryReplacement;