import React from 'react';

const Qzone = () => {
    return (
        <div>
        <div className='bg-[#F3F3F3] mt-8 p-3 rounded'>
            <h1 className='text-lg font-semibold text-primary'>Q-Zone</h1>
           <img className='w-full mt-4' src="/src/assets/swimming.png" alt="" /> 
           <img className='w-full mt-4' src="/src/assets/class.png" alt="" />
           <img className='w-full mt-4' src="/src/assets/playground.png" alt="" />
           </div>
          <img className='mt-4 w-full' src="/src/assets/bg.png" alt="" />
        </div>
    );
};

export default Qzone;