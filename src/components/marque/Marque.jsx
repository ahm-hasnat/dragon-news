import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div className='bg-base-200 w-6xl mx-auto mt-4 flex justify-center
         items-center p-2'>
             <button className='bg-accent text-white py-1 px-3 
             rounded-0 mr-1'>Latest</button>
            <Marquee behavior="scroll" pauseOnHover={true} direction="left">
                <p className='text-primary'>Breaking News: 
                    Major event happening now! Major power outage hits downtown area. |
                    Massive wildfire forces thousands to evacuate. |
                    Government announces emergency measures. |
                    Earthquake shakes northern region. |
                    President addresses nation amid unrest. |
                    Gas leak prompts evacuation. |
                    Severe weather warning issued. |
                    Stock markets plunge. |
                    Flight makes emergency landing. |
                    Parliament in chaos. |
                    Local schools shut down. |
                    Police confirm multiple arrests. |
                    Tech giant under investigation. |
                    Oil prices spike. |
                    Missing child found safe. |
                    New AI system revealed.</p>
            </Marquee>
        </div>
    );
};

export default Marque;