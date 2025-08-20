import { format } from 'date-fns';
import React from 'react';
import Marque from '../marque/Marque';


const Header = () => {
  



    return (
        <div className='flex flex-col items-center gap-2 p-8'>
           <div><img src="/src/assets/logo.png" alt="Logo" /></div> 
           <p className='text-base-300 text-sm '>Journalism Without Fear or Favour</p>

           <p className='text-secondary font-medium'>{format(new Date(), 'EEEE, MMMM dd, yyyy')}</p>
           <Marque />
        </div>
    );
};

export default Header;