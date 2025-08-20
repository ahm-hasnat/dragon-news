import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAside = () => {
    return (
        <div className=''>
            <Suspense fallback={<span className="loading 
            loading-dots loading-xl"></span>}>
               <Categories />
            </Suspense>
        </div>
    );
};

export default LeftAside;