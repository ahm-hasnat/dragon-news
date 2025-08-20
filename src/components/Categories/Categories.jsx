import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const categoryData = fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
       const activeLink = ({ isActive }) =>
     isActive
      ? "text-primary bg-base-200  rounded-xs w-3/5  px-8 py-2"
       :
      "text-base-300";

    return (
        <div className='w-full'>
            <h1 className='text-lg font-semibold
             text-primary '>All Categories</h1>
          

             <div className='flex flex-col pl-6 gap-3 mt-4 items-left justify-center'>
                 {categories.map(category => (
                     <NavLink  to={`/category/${category.id}`} key={category.id}
                      className=
                       {activeLink}>
                         {category.name}
                     </NavLink>
                 ))}
             </div>

        </div>
    );
};

export default Categories;